import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from 'express'
import { Monster } from '../entity/Monster'
import { Route } from '../decorator/Route'
import { validate, ValidationError, ValidatorOptions } from 'class-validator'
import {Controller} from "../decorator/Controller";

@Controller('/monsters')
export default class MonsterController {
    private readonly monsterRepo = AppDataSource.getRepository(Monster)

    private readonly validOptions: ValidatorOptions = {
        stopAtFirstError: true,
        skipMissingProperties: false,
        validationError: { target: false, value: false }
    }

    @Route('get', '/:id*?')
    async read (req: Request, res: Response, next: NextFunction): Promise<Monster | Monster[]> {
        if(req.params.id){
            return await this.monsterRepo.findOneBy({id: req.params.id})
        }
        else{
            const findOptions: any = { order:{},where:[]}
            const existingFields = this.monsterRepo.metadata.ownColumns.map((col) => col.propertyName)
            const sortField: string = existingFields.includes(req.query.sortby) ? req.query.sortby : 'id'
            findOptions.order[sortField] = req.query.reverse ? 'DESC' : 'ASC'
            // findOptions. loo
            return await this.monsterRepo.find()
        }
    }

    @Route('delete', '/:id')
    async delete(req: Request, res: Response, next: NextFunction): Promise<Monster> {
        const monsterToRemove = await this.monsterRepo.findOneBy({id: req.params.id});
        res.statusCode = 204
        if(monsterToRemove){
            return await this.monsterRepo.remove(monsterToRemove)
        } else {
            next()
        }
    }

    @Route('put', '/:id')
    async update(req: Request, res: Response, next: NextFunction):Promise<Monster | ValidationError[]>{
        const monsterToUpdate = await this.monsterRepo.preload(req.body)
        // Extra validation - ensure the name param matched the name submitted in the body
        if (!monsterToUpdate || monsterToUpdate.id.toString() !== req.params.id) next() // pass the buck until 404 error is sent
        else {
            const violations = await validate(monsterToUpdate, this.validOptions)
            if (violations.length) {
                res.statusCode = 422 // Unprocessable Entity
                return violations
            } else {
                return await this.monsterRepo.save(monsterToUpdate)
            }
        }
    }

    @Route('post') // IF the POST HTTP Request Method is used then run the action below
    async save (request: Request, response: Response, next: NextFunction): Promise<Monster | ValidationError[]> {
        const newMonster = Object.assign(new Monster(), request.body)
        const violations = await validate(newMonster/*, this.validOptions */) // error in notes doc
        if (violations.length) {
            response.statusCode = 422 // 418 is better though
            return violations
        } else {
            response.statusCode = 201
            return await this.monsterRepo.save(newMonster)
        }
    }
}
