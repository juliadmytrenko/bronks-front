// muszę najpierw dodać schema graphQL i scalar Datetime
export type product = {
    id: number;
    slug: string;
    name: string;
    description: string;
    createdAt: Date;
    img: string;
}

// jak dodam schema GraphQL to chyba nie będę nawet potrzebowała tych typów
// używam ich teraz tylko przez problem z typem DateTime, który w interfejsie zaimportowanym z typów generowanych
// przez Prisme nie zgadza się z tym co ts u mnie oczekuje
export type beer = {
    id: number;
    slug: string;
    name: string;
    description: string;
    createdAt: Date;
    img: string;
}

