import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from 'express'
import { Spell } from '../entity/Spell'
import { Route } from '../decorator/Route'
import { validate, ValidationError, ValidatorOptions } from 'class-validator'
import {Controller} from "../decorator/Controller";
import {Bookmark} from "../entity/Bookmark";

@Controller('/spells')
export default class SpellController {
    private readonly spellRepo = AppDataSource.getRepository(Spell)

    private readonly validOptions: ValidatorOptions = {
        stopAtFirstError: true,
        skipMissingProperties: false,
        validationError: { target: false, value: false }
    }

    @Route('get', '/:id*?')
    async read (req: Request, res: Response, next: NextFunction): Promise<Spell | Spell[]> {
        if(req.params.id){
            return await this.spellRepo.findOneBy({id: req.params.id})
        }
        else{
            const findOptions: any = { order:{},where:[]}
            const existingFields = this.spellRepo.metadata.ownColumns.map((col) => col.propertyName)
            const sortField: string = existingFields.includes(req.query.sortby) ? req.query.sortby : 'id'
            findOptions.order[sortField] = req.query.reverse ? 'DESC' : 'ASC'
            // findOptions. loo
            return await this.spellRepo.find()
        }
    }

    @Route('delete', '/:id')
    async delete(req: Request, res: Response, next: NextFunction): Promise<Spell> {
        const spellToRemove = await this.spellRepo.findOneBy({id: req.params.id});
        res.statusCode = 204
        if(spellToRemove){
            return await this.spellRepo.remove(spellToRemove)
        } else {
            next()
        }
    }

    @Route('put', '/:id')
    async update(req: Request, res: Response, next: NextFunction):Promise<Spell | ValidationError[]>{
        const spellToUpdate = await this.spellRepo.preload(req.body)
        // Extra validation - ensure the name param matched the name submitted in the body
        if (!spellToUpdate || spellToUpdate.id.toString() !== req.params.id) next() // pass the buck until 404 error is sent
        else {
            const violations = await validate(spellToUpdate, this.validOptions)
            if (violations.length) {
                res.statusCode = 422 // Unprocessable Entity
                return violations
            } else {
                return await this.spellRepo.save(spellToUpdate)
            }
        }
    }

    @Route('post') // IF the POST HTTP Request Method is used then run the action below
    async save (request: Request, response: Response, next: NextFunction): Promise<Spell | ValidationError[]> {
        const newSpell = Object.assign(new Spell(), request.body)
        const violations = await validate(newSpell/*, this.validOptions */) // error in notes doc
        if (violations.length) {
            response.statusCode = 422 // 418 is better though
            return violations
        } else {
            response.statusCode = 201
            return await this.spellRepo.save(newSpell)
        }
    }
}
