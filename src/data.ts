export interface Data {
    users: {
        id: string
        businesses: string[]
        reviews: string[]
    }[],
    businesses: {
        businessName: string,
        id: string,
        ratings: number,
        reviews: {
            id: string,
            review: string
        }
    }[]
}