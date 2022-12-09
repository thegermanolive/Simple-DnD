import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Monster} from "./entity/Monster";
import {Spell} from "./entity/Spells";
import {Bookmark} from "./entity/Bookmark";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Monster,Spell,Bookmark],
    migrations: [],
    subscribers: [],
})
