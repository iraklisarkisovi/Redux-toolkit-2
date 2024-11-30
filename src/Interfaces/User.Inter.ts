export interface IUser{
    id: number, 
    name: string,
    email: string
}   

export interface Root2 {
    id: null | undefined
    last_name: string
    first_name: string
    page: number
    per_page: number
    total: number
    total_pages: number
    data: Daum[]
    support: Support
}

export interface Daum {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

export interface Support {
    url: string
    text: string
}