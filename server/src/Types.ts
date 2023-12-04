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
export interface CommentType {
    email: string,
    category: string,
    rating: string,
    comment: string,
}

export interface ResultType {
    status: string,
    error?: string,
}