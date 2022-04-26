export interface CreateUser {
    name: string,
    age: number,
    gender: string
}

export interface ReadUser {
    id: string,
    name: string,
    age: number,
    gender: string,
    createdAt: Date,
    updatedAt: Date
}