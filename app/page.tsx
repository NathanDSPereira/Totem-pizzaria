'use client';

import ListPizza from '@/components/ListPizza';
import ListCategorias from '@/components/ListCategorias';
import Footer from '@/components/FooterPage';
import CarrinhoModal from '@/components/CarrinhoModal';
import CustomizacaoPizzaModal from '@/components/CustomizacaoPizzaModal';

import BdPizzas from '@/bancoDeDados/BdPizzas.json';
import BdCategorias from '@/bancoDeDados/BdCategorias.json';
import BdIngredientes from '@/bancoDeDados/BdIngredientes.json'

import { Pizza } from '@/interface/Pizza';
import { ItemCarrinho } from '@/interface/ItemCarrinho';

import { useEffect, useRef, useState } from 'react';
import SelecionarQuantidadeExclusaoModal from '@/components/SelecionarQuantidadeExclusaoModal';
import Toast from '@/components/Toast';


export default function Home() {

  // const jsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'PizzaRestaurant',
  //   'name': 'Duperon Pizzaria',
  //   'address': {
  //     '@type': 'PostalAddress',
  //     'streetAddress': 'Bairro Abadia, 406',
  //     'addressLocality': 'Uberaba',
  //     'addressRegion': 'MG',
  //     'postalCode': '38025-170',
  //     'addressCountry': 'BR'
  //   },
  //   'telephone': '+553499999999', // Atualize com o número real
  //   'openingHours': 'Mo-Fr 18:00-23:00',
  //   'priceRange': '$$'
  // };

  const listaPizzas = BdPizzas;
  const listCategorias = BdCategorias;
  const listIngredientes = BdIngredientes;

  const [categoriaAtiva, setCategoriaAtiva] = useState('pizzas-salgadas');
  const [categoriaNome, setCategoriaNomeAtivo] = useState('Pizzas Salgadas')
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>(() => {
    if (typeof window !== 'undefined') {
      const carrinhoSalvo = localStorage.getItem('carrinho');
      return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    }
    return [];
  });

  const [isFinalizarAberto, setIsFinalizarAberto] = useState(false);
  const [produtoEmEdicao, setProdutoEmEdicao] = useState<Pizza | null | ItemCarrinho>(null);
  const [produtoARetirarCarrinho, setProdutoARetirarCarrinho] = useState<ItemCarrinho | null>(null);
  const [toast, setToast] = useState<{message: string; visible: boolean, id: number, type: string}>(
    {
      message: '', 
      visible: false, 
      id: 0,
      type: 'success'
    }
  
  );

  const produtosFiltrados = listaPizzas.filter((produto) => produto.categoriaId == categoriaAtiva);
  const valorTotal = carrinho.reduce((acumulador, item) => acumulador + (item.precoTotal * item.quantidadeCarrinho), 0)
  const quantidadeTotal = carrinho.reduce((acumulador, item) => acumulador + item.quantidadeCarrinho, 0)

  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }, [carrinho]);

  const editarProduto = (produto: Pizza) => {
    setProdutoEmEdicao(produto);
  }

  const removerItemCarrinho = (id: string) => {
    setCarrinho((itensAtuais) => {
      return itensAtuais.filter(item => item.cartId !== id);
    })
  }

  const aoClicarEmExcluirProdutoCarrinho = (produto: ItemCarrinho) => {
    if(produto.quantidadeCarrinho > 1) {
      setProdutoARetirarCarrinho(produto);
    } else {
      removerItemCarrinho(produto.cartId)
      mostrarToast(`${produto.nome} removida do carrinho!`, 'error');
    }
  }

  const retirarProdutoCarrinhoSegundoQuantidade = (quantidadeARetirar: number) => {
    if(!produtoARetirarCarrinho) return

    setCarrinho((anteriores) => {
      const listaAtualizada = anteriores.map((item) => {
        if(item.cartId === produtoARetirarCarrinho.cartId) {
          const novaQuantidade = item.quantidadeCarrinho - quantidadeARetirar
  
          if(novaQuantidade <= 0) return null;
  
          return {...item, quantidadeCarrinho: novaQuantidade};
        }
        return item;
      })
      return listaAtualizada.filter((item): item is ItemCarrinho => item !== null)
    })
    
    mostrarToast(`${produtoARetirarCarrinho?.nome} removida do carrinho!`, 'error');
    setProdutoARetirarCarrinho(null);
  }

  const adicionarAoCarrinho = (produto: Pizza | ItemCarrinho, cartIdAntigo?: string) => {
    setCarrinho((itensAtuais : ItemCarrinho[]) => {

      const tipoMensagem = cartIdAntigo ? 'info' : 'success';
      const mensagemToast = cartIdAntigo ? 'atualizada com sucesso!' : 'adicionada ao carrinho!';

      const listaFiltrada = cartIdAntigo ? 
        itensAtuais.filter((item) => item.cartId !== cartIdAntigo) : 
        itensAtuais

      const novoItem: ItemCarrinho = ('cartId' in produto) 
        ? produto 
        : {
            ...produto, 
            cartId: gerarCartId(produto.id, {}, []),
            precoTotal: produto.preco,
            removidos: [],
            extras: {},
            quantidadeCarrinho: 1
      }

      const itemExiste = listaFiltrada.find((anterior) => 
        anterior.id === novoItem.id &&
        JSON.stringify(anterior.removidos) === JSON.stringify(novoItem.removidos) &&
        JSON.stringify(anterior.extras) === JSON.stringify(novoItem.extras)
      );

      if(itemExiste) {
        mostrarToast(`${produto.nome} ${mensagemToast}`, tipoMensagem);
        return listaFiltrada.map((item) =>
          item.cartId === itemExiste.cartId 
          ? {...item, quantidadeCarrinho: (item.quantidadeCarrinho || 0) + 1} : item
        )
      }

      mostrarToast(`${produto.nome} ${mensagemToast}`, tipoMensagem);

      return [...listaFiltrada, novoItem]
    })
  }

  const selecionarCategoria = (categoriaSlug: string, categoriaNome: string) => {
    setCategoriaAtiva(categoriaSlug);
    setCategoriaNomeAtivo(categoriaNome)
  };

  const gerarCartId = (produtoId: string, extras: Record<number, number>, removidos: number[]) => {
    const extasString = JSON.stringify(Object.keys(extras).sort());
    const removidoString = JSON.stringify([...removidos].sort());

    return `${produtoId}-${extasString}-${removidoString}`
  }

  const mostrarToast = (message: string, type: string) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    setToast((anteriores) => ({...anteriores, visible: false}));

    setTimeout(() => {
      setToast(
        {
          message, 
          visible: true, 
          id: Date.now(),
          type
        }
      );

      toastTimerRef.current = setTimeout(() => {
        setToast((anteriores) => ({...anteriores, visible: false}));
        toastTimerRef.current = null;
      }, 3000);
    }, 10);
  }

  return (
    <section className="overflow-hidden bg-zinc-950 h-screen pt-4 flex">

      <script
        type="application/ld+json"
        // dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ListCategorias 
        listaCategorias={listCategorias} 
        selecionarCategoria={selecionarCategoria}
        categoriaAtiva={categoriaAtiva}
      />

      <main className='flex flex-1 flex-col h-[calc(100vw - 50px)] overflow-y-auto custom-scrollbar'>
        <ListPizza 
          listaPizzas={produtosFiltrados} 
          adicionarAoCarrinho={adicionarAoCarrinho}
          abrirCustomizacao={editarProduto}
          categoriaNome={categoriaNome}
        />

        {isFinalizarAberto && (
          <CarrinhoModal 
            itens={carrinho}
            editarProduto={editarProduto}
            fechar={() => setIsFinalizarAberto(false)}
            remover={aoClicarEmExcluirProdutoCarrinho}
            total={valorTotal}
            todosOsIngredientes={listIngredientes}
          />
        )}

        {produtoEmEdicao && (
          <CustomizacaoPizzaModal
            key={('cartId' in produtoEmEdicao ? produtoEmEdicao.cartId : produtoEmEdicao.id)}
            gerarCartId={gerarCartId}
            adicionarAoCarrinho={adicionarAoCarrinho}
            fecharModal={() => setProdutoEmEdicao(null)}
            produto={produtoEmEdicao}
            todosOsIngredientes={listIngredientes}
          />
        )}
      </main>
      
      {quantidadeTotal > 0 && (
          <Footer 
            valorTotal={valorTotal} 
            quantidadeTotal={quantidadeTotal} 
            aoFinalizar={() => setIsFinalizarAberto(true)}
          />
        )}

        {produtoARetirarCarrinho && (
          <SelecionarQuantidadeExclusaoModal
            setProdutoARetirarCarrinho={setProdutoARetirarCarrinho}
            produtoARetirarCarrinho={produtoARetirarCarrinho}
            confirmar={retirarProdutoCarrinhoSegundoQuantidade}
          />
        )}

      <Toast toast={toast} />
    </section>
  );
}