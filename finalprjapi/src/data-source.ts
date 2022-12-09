import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Monster} from "./entity/Monster";
import {Spell} from "./entity/Spell";
import {Bookmark} from "./entity/Bookmark";

export const AppDataSource = new DataSource({
    type: 'better-sqlite3',
    database: 'sqlite.db',
    synchronize: true,
    logging: false,
    entities: [User, Monster,Spell,Bookmark],
    migrations: [],
    subscribers: [],
})
