import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"
import * as cors from 'cors'
import UserController from "./controller/UserController";
import MonsterController from "./controller/MonsterController";
import SpellController from "./controller/SpellController";
import BookmarkController from "./controller/BookmarkController";
import {RouteDefinition} from "./decorator/RouteDefinition";
import * as createError from 'http-errors'

const port = 5050;

const corsOptions = {
    origin: /localhost\:\d{4,5}$/i, // localhost any 4 digit port
    credentials: true, // needed to set and return cookies
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
    methods: 'GET,PUT,POST,DELETE',
    maxAge: 43200 // 12 hours
}

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    app.use(cors(corsOptions))

    app.options('*', cors(corsOptions))

    // register express routes from defined application routes
    const controllers: any[] = [UserController, MonsterController, SpellController,BookmarkController]
    controllers.forEach((controller) => {
        // This is our instantiated class
        // eslint-disable-next-line new-cap
        const instance = new controller()
        // The prefix saved to our controller
        const path = Reflect.getMetadata('path', controller)
        // Our `routes` array containing all our routes for this controller
        const routes: RouteDefinition[] = Reflect.getMetadata('routes', controller)

        // Iterate over all routes and register them to our express application
        routes.forEach((route) => {
            // eslint-disable-next-line max-len
            app[route.method.toLowerCase()](path + route.param, (req: express.Request, res: express.Response, next: express.NextFunction) => {
                const result = instance[route.action](req, res, next)
                if (result instanceof Promise) {
                    result.then((result) => result !== null && result !== undefined ? res.send(result) : next())
                        .catch((err) => next(createError(500, err)))
                } else if (result !== null && result !== undefined) res.json(result)
            })
        })
    })

    app.use(function (req, res, next) {
        next(createError(404))
    })

    app.use(function (err, req, res, next) {
        res.status(err.status || 500)
        res.json({ status: err.status, message: err.message, stack: err.stack.split(/\s{4,}/) })
    })

    // start express server
    app.listen(port)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            UserName: "Timber",
            Password: "Saw",
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            UserName: "Phantom",
            Password: "Assassin",
        })
    )

    console.log("Express server has started on port 3000. Open http://localhost:5050/users to see results")

}).catch(error => console.log(error))
