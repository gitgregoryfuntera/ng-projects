export class User {
    constructor(
        public username: string,
        public email: string,
        public password?: string,
        public password_confirmation?: string,
        public id?: number,
    ) {}
}