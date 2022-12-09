import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from 'express'
import { Bookmark } from '../entity/Bookmark'
import { Route } from '../decorator/Route'
import { validate, ValidationError, ValidatorOptions } from 'class-validator'
import {Controller} from "../decorator/Controller";

@Controller('/bookmarks')
export default class BookmarkController {
    private readonly bookmarkRepo = AppDataSource.getRepository(Bookmark)

    private readonly validOptions: ValidatorOptions = {
        stopAtFirstError: true,
        skipMissingProperties: false,
        validationError: { target: false, value: false }
    }

    @Route('get', '/:id*?')
    async read (req: Request, res: Response, next: NextFunction): Promise<Bookmark | Bookmark[]> {
        if(req.params.id){
            return await this.bookmarkRepo.findOneBy({id: req.params.id})
        }
        else{
            const findOptions: any = { order:{},where:[]}
            const existingFields = this.bookmarkRepo.metadata.ownColumns.map((col) => col.propertyName)
            const sortField: string = existingFields.includes(req.query.sortby) ? req.query.sortby : 'id'
            findOptions.order[sortField] = req.query.reverse ? 'DESC' : 'ASC'
            return await this.bookmarkRepo.find()
        }
    }

    @Route('delete', '/:id')
    async delete(req: Request, res: Response, next: NextFunction): Promise<Bookmark> {
        const bookmarkToRemove = await this.bookmarkRepo.findOneBy({id: req.params.id});
        res.statusCode = 204
        if(bookmarkToRemove){
            return await this.bookmarkRepo.remove(bookmarkToRemove)
        } else {
            next()
        }
    }

    @Route('put', '/:id')
    async update(req: Request, res: Response, next: NextFunction):Promise<Bookmark | ValidationError[]>{
        const bookmarkToUpdate = await this.bookmarkRepo.preload(req.body)
        // Extra validation - ensure the id param matched the id submitted in the body
        if (!bookmarkToUpdate || bookmarkToUpdate.id.toString() !== req.params.id) next() // pass the buck until 404 error is sent
        else {
            const violations = await validate(bookmarkToUpdate, this.validOptions)
            if (violations.length) {
                res.statusCode = 422 // Unprocessable Entity
                return violations
            } else {
                return await this.bookmarkRepo.save(bookmarkToUpdate)
            }
        }
    }

    @Route('post') // IF the POST HTTP Request Method is used then run the action below
    async save (request: Request, response: Response, next: NextFunction): Promise<Bookmark | ValidationError[]> {
        const newBookmark = Object.assign(new Bookmark(), request.body)
        const violations = await validate(newBookmark/*, this.validOptions */) // error in notes doc
        if (violations.length) {
            response.statusCode = 422 // 418 is better though
            return violations
        } else {
            response.statusCode = 201
            return await this.bookmarkRepo.save(newBookmark)
        }
    }

}
