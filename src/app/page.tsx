// app/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ModalChamarGarcom } from "./cardapio/components/SheetChamarGarcom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
  const [modalOpen, setModalOpen] = useState(false)
  const [mesaSelecionada, setMesaSelecionada] = useState("")

  function abrirModalComMesa(mesa: string) {
    setMesaSelecionada(mesa);
    setModalOpen(true);
  }
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
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card className="bg-[#1e1e1e] h-full border p-0 border-[#f2a900]/30 hover:border-[#f2a900] hover:scale-[1.02] transition-all cursor-pointer rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={800}
                className="w-full h-80 object-cover rounded-t-xl select-none pointer-events-none"
                priority={i < 3}
              />

              <CardHeader className="">
                <CardTitle className="text-[#f2a900] text-lg">
                  {item.title} – <span className="text-white">{item.price}</span>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-100 text-sm leading-relaxed mb-1">
                  {item.description}
                </p>
                <p className="italic text-gray-400 text-xs">“{item.quote}”</p>
              </CardContent>

              <CardFooter className="mb-3 justify-center">
                <Button className="bg-[#f2a900] w-full text-zinc-900 hover:text-white" onClick={() => abrirModalComMesa(item.title)}>Chamar Garçom</Button>
                <ModalChamarGarcom
                  open={modalOpen}
                  onOpenChange={setModalOpen}
                />
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </section>
    </main>
  );
}