export interface CorsType {
    origin: string,
    Credentials: boolean,
}

export interface UserType {
    email: string,
    name: string,
    password: string,
    accessToken?: string,
    comments: Object,
    cookie: string
}