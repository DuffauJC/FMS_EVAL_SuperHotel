import { Roles } from "./roles.model";

export class User {
    id: number;
    username: string;
    email: string;
    password:string
    roles: Roles;

    constructor(
        id: number,
        username: string,
        email: string,
        password:string,
        roles: Roles
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password=password
        this.roles = roles;
    }
}