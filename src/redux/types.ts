export interface IAuthStore {
    email: string | null,
    password: string | null,
}

export interface ICategoryState {
    name: string | null,
    products: any,
}