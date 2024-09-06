import { sql } from './db.js'
import { randomUUID } from 'crypto'

export class Database {
    async createUser(user) {
        const id = randomUUID();
        const name = user.name;
        const senha = user.password;
        const perfil = user.profile;

        await sql`insert into users (id, name, password, profile)
        values (${id}, ${name}, ${senha}, ${perfil})`
    }
}
