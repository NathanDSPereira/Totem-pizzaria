import { ItemCarrinho } from "./ItemCarrinho";

export interface PedidoFinal {
  localConsumo: string;
  cliente: string;
  metodoPagamento: string;
  produtos: ItemCarrinho[];
  valorTotal: number;
  numeroPedido: string;
}