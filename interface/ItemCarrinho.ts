import { Pizza } from "./Pizza";

export interface ItemCarrinho extends Pizza {
    cartId: string;
    precoTotal: number;
    removidos: number[];
    extras: Record<number, number>;
    quantidadeCarrinho: number;
}