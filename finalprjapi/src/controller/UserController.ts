import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import {Controller} from "../decorator/Controller";
import {Route} from "../decorator/Route";

@Controller('/users')
export default class UserController {

    private readonly userRepository = AppDataSource.getRepository(User)

    @Route('get') // IF the GET HTTP Request Method is used then run the action below
    async all (request: Request, response: Response, next: NextFunction): Promise<User[]> {
        return await this.userRepository.find()
    }

    @Route('get', '/:id')
    async one (request: Request, response: Response, next: NextFunction): Promise<any> {
        const id = parseInt(request.params.id)


        const user = await this.userRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    @Route('post')
    async save(request: Request, response: Response, next: NextFunction): Promise<User> {
        const { firstName, lastName, age } = request.body;

        const user = Object.assign(new User(), {
            firstName,
            lastName,
            age
        })

        return this.userRepository.save(user)
    }

    @Route('delete', '/:id')
    async remove(request: Request, response: Response, next: NextFunction): Promise<any> {
        const id = parseInt(request.params.id)

        let userToRemove = await this.userRepository.findOneBy({ id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.userRepository.remove(userToRemove)

        return "user has been removed"
    }

}
