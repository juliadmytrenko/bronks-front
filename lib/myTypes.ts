// muszę najpierw dodać schema graphQL i scalar Datetime
export type beverage = {
    id: number;
    slug: string;
    name: string;
    description: string;
    createdAt: Date;
    img: string;
}
