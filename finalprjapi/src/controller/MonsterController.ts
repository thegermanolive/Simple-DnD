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

    @Route('get', '/:name*?')
    async read (req: Request, res: Response, next: NextFunction): Promise<Monster | Monster[]> {
        if(req.params.name){
            return await this.monsterRepo.findOneBy({Name: req.params.name})
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

    // @Ro
}
