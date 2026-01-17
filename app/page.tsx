'use client';

import ListPizza from '@/components/ListPizza';
import ListCategorias from '@/components/ListCategorias';
import Footer from '@/components/FooterPage';

import BdPizzas from '@/bancoDeDados/BdPizzas.json';
import BdCategorias from '@/bancoDeDados/BdCategorias.json';

import { useState } from 'react';

import { Pizza } from '@/interface/Pizza';

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

  const [categoriaAtiva, setCategoriaAtiva] = useState('salgadas');
  const [carrinho, setCarrinho] = useState<Pizza[]>([]);

  const produtosFiltrados = listaPizzas.filter((produto) => produto.categoriaId == categoriaAtiva);
  const valorTotal = carrinho.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0)
  const quantidadeTotal = carrinho.reduce((acumulador, item) => acumulador + item.quantidade, 0)

  const adicionarAoCarinho = (produto: Pizza) => {
    setCarrinho((itensAtuais) => {
      const itemExiste = itensAtuais.find((item) => item.id === produto.id)

      if(itemExiste) {
        return itensAtuais.map((item) => 
          item.id === produto.id 
          ? {...item, quantidade: item.quantidade + 1} : item
        )
      }


      return [...itensAtuais, {...produto, quantidade: 1}]
    })
  }

  const selecionarCategoria = (categoriaSlug: string) => {
    setCategoriaAtiva(categoriaSlug);
  };

  return (
    <main className="overflow-x-hidden bg-zinc-950 min-h-screen pb-10 flex">

      <script
        type="application/ld+json"
        // dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ListCategorias 
        listaCategorias={listCategorias} 
        selecionarCategoria={selecionarCategoria}
        categoriaAtiva={categoriaAtiva}
      />
      <ListPizza listaPizzas={produtosFiltrados} adicionarAoCarrinho={adicionarAoCarinho} />

      {quantidadeTotal > 0 && (
        <Footer valorTotal={valorTotal} quantidadeTotal={quantidadeTotal} />
      )}
    </main>
  );
}
