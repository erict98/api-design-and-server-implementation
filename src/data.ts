export interface Collection {
    users: {
        [user: string] : {
            id: string,
            businesses: string[],
            reviews: string[]
        }
    },
    businesses: {
        [business: string] : {
            businessName: string,
            id: string,
            reviews: {
                [id: string] : {
                rating: string,
                review: string
                }
            }
        }
    }
}