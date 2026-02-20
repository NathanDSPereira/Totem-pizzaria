import { ItemCarrinho } from "./ItemCarrinho";

export interface PedidoFinal {
  localConsumo: "local" | "viagem";
  cliente: string;
  metodoPagamento: string;
  produtos: ItemCarrinho[];
  valorTotal: number;
  numeroPedido: string;
}