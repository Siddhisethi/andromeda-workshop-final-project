import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Vaultium Token Swap dApp",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr10ew5z00v9007m47kx29jc7mlgaguntwkkt3hyl0vnrfr3cxw2d6qd358qw",
            cw20: "andr1zym3vmhmtgv0ljf2at8jqwtzv3tackug64fw47x3rpr4jqat3zssvxdvre",
            name: "Vaultium Token Swap dApp",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
