// app/page.tsx
"use client";

import Image from "next/image";
import { CardDescription,  CardTitle } from "@/components/ui/card";
import { ModalChamarGarcom } from "./cardapio/components/SheetChamarGarcom";
import { useState } from "react";

import { MenuCard } from "./cardapio/components/menuCard";

const menu = [
  {
    title: "BRUTINHO",
    price: "R$ 10,90",
    description:
      "90g de carne suculenta, cheddar, maionese da casa e pão brioche selado na manteiga.",
    quote: "Feito pra pequenos guerreiros com fome de verdade.",
    image: "/menu/brutinho.jpg",
    highlight: false,
  },
  {
    title: "CLÁSSICO",
    price: "R$ 12,90",
    description:
      "130g de carne suculenta, cheddar duplo, cebola caramelizada e pão brioche selado na manteiga.",
    quote: "Pequeno no preço, gigante no sabor.",
    image: "/menu/classico.jpg",
    highlight: true,
  },
  {
    title: "BAGUAL",
    price: "R$ 18,90",
    description:
      "130g, queijo, catupiry, tomate, bacon rústico, maionese da casa e pão brioche.",
    quote: "É bagual, é raiz, é brabeza no dente.",
    image: "/menu/bagual.jpg",
    highlight: false,
  },
  {
    title: "SÓ RAIZ",
    price: "R$ 14,90",
    description:
      "130g de carne, queijo prato, alface, tomate, cebola roxa, maionese da casa e pão brioche.",
    quote: "Simples, forte e sem frescura.",
    image: "/menu/soraiz.jpg",
    highlight: false,
  },
  {
    title: "X TUDO",
    price: "R$ 29,90",
    description:
    "130g, cheddar defumado, cream cheese, bacon, ovo, presunto, alface, tomate, cebola roxa, milho, batata palha, maionese e pão brioche.",
    quote: "Come, luta e grita SKÅL!",
    image: "/menu/xtudo.jpg",
    highlight: true,
  },
  {
    title: "XMANSKI",
    price: "R$ 19,90",
    description:
      "130g, cheddar defumado, cream cheese, cebola roxa, picles, milho, maionese do céu e pão brioche.",
    quote: "Só para os mais chegados, que conhecem o Sabor!",
    image: "/menu/xmanski.jpg",
    highlight: false,
  },
  {
    title: "GALO DE GUERRA",
    price: "R$ 17,90",
    description:
      "Peito de frango, queijo prato, bacon, alface, tomate, maionese e pão brioche.",
    quote: "Galando na guerra dos sabores. 🐓🔥",
    image: "/menu/galodeguerra.jpg",
    highlight: false,
  },
  {
    title: "GEMA DURA",
    price: "R$ 16,90",
    description:
      "130g, queijo prato, bacon, ovo frito na manteiga, pimenta do reino, pão brioche.",
    quote: "Esse lanche vale cada mordida 🥚💥",
    image: "/menu/gemadura.jpg",
    highlight: false,
  },
  {
    title: "CALABRESO",
    price: "R$ 16,90",
    description:
      "130g, queijo prato, calabresa, cebola roxa, picles, maionese da casa, pão brioche.",
    quote: "Fogo na garganta, soco no sabor. 🔥🌶️",
    image: "/menu/calabreso.jpg",
    highlight: false,
  },
];

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="p-6 bg-black min-h-screen text-white">
      <header className="text-center mb-10">
        <div className="flex items-center justify-center gap-4 mx-auto w-fit">
          <Image 
            src={"/logo.png"} 
            alt={"Logo"} 
            width={200}
            height={200}
          />
        </div>
        <CardTitle className="text-gray-300 italic mt- max-w-xl mx-auto">
          95% dos clientes voltam !!!
        </CardTitle>
        <CardDescription className="text-gray-400 italic mt-1 max-w-xl mx-auto">
          Os outros 5%... Não resistiram de tanto comer... 😭
        </CardDescription>
      </header>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {menu.map((item, i) => (
          <MenuCard
            key={i}
            title={item.title}
            price={item.price}
            description={item.description}
            quote={item.quote}
            image={item.image}
            highlight={item.highlight}
            onChamarGarcom={() => setModalOpen(true)}
          />
        ))}
      </section>

      <ModalChamarGarcom
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </main>
  );
}
