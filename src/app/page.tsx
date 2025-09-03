// app/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent,  CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ModalChamarGarcom } from "./cardapio/components/SheetChamarGarcom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {  ChevronLeft, ChevronRight } from "lucide-react";
const menu = [
  {
    title: "XMANSKI-DUPLO",
    price: "R$ 29,90",
    description:
      "DOIS BURGERS DE 130g FEITOS NA LENHA, cheddar, bacon, cream cheese, cebola roxa, picles, milho, tomate, maionese do céu e pão brioche.",
    quote: "BIG FOMEEEEEEEEE",
    images: [
      "/menu/xmanski-duplo/1.webp",
      "/menu/xmanski-duplo/2.webp"
    ],
    highlight: true,
  },
  {
    title: "Combo Família",
    price: "R$ 69,90",
    description:
      "3 X-Salada de respeito, Porção de batata grande com cheddar artesanal. Acompanhando uma deliciosa porção de calabresa e nuggets. Também vai junto 3 maionese artesanal.",
    quote: "Pra dividir com a Galera!",
    images: [
      "/menu/combo-familia/1.webp",
      "/menu/combo-familia/2.webp",
      "/menu/combo-familia/3.webp"
    ],
    highlight: true,
  },
  {
    title: "X-BACON",
    price: "R$ 18,90",
    description:
      "Pão Brioche, Burger de 130g, bacon, queijo, catupiry, alface, tomate, maionese artesanal.",
    quote: "Galando na guerra dos sabores. 🐓🔥",
    images: [
      "/menu/x-bacon/1.webp",
      "/menu/x-bacon/2.webp"
    ],
    highlight: false,
  },
  {
    title: "Prensadão da Casa",
    price: "R$ 14,00",
    description:
      "2 Vinas de primeira, cream cheese, tomate, frango temperado desfiado, maionese da casa e pão brioche.",
    quote: "Cocóricóóóóóóóóóó",
    images: [
      "/menu/prensadao/1.webp",
      "/menu/prensadao/2.webp"
    ],
    highlight: false,
  },
  {
    title: "X-COSTELA",
    price: "R$ 22,90",
    description:
      "Pão brioche, costela desfiada, queijo, catupiry, cream cheese, milho, ervilha, alface, tomate, e maionese artesanal.",
    quote: "Feito pra pequenos guerreiros com fome de verdade.",
    images: [
      "/menu/x-costela/1.webp",
      "/menu/x-costela/2.webp"
    ],
    highlight: true,
  },
  {
    title: "Porção De Batata Grande",
    price: "R$ 21,90",
    description:
      "500g da melhor batata do mundo!",
    quote: "Sequina, crocante por fora macia por dentro.",
    images: [
      "/menu/batata-grande/1.webp",
      "/menu/batata-grande/2.webp"
    ],
    highlight: false,
  },
  {
    title: "X-CALABRESO",
    price: "R$ 16,90",
    description:
      "130g, queijo prato, catupiry, calabresa, tomate, alface, maionese da casa, pão brioche.",
    quote: "Só para os calbresos",
    images: [
      "/menu/calabreso/1.webp",
      "/menu/calabreso/2.webp"
    ],
    highlight: false,
  },
];


export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mesaSelecionada, setMesaSelecionada] = useState("");

  function abrirModalComMesa(mesa: string) {
    setMesaSelecionada(mesa);
    setModalOpen(true);
  }

  return (
    <main className="p-6 bg-black min-h-screen text-white">
      <header className="text-center mb-10">
        {/* Logo e título */}
      </header>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {menu.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card className="bg-[#1e1e1e] h-full border p-0 border-[#f2a900]/30 cursor-pointer rounded-xl">
              <CarrosselImagens images={item.images} />

              <CardHeader>
                <CardTitle className="text-primary text-lg">
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
                <Button className="bg-primary w-full ">

                  <a
                    href="https://api.whatsapp.com/send?phone=5541996194716&text=Ol%C3%A1.%20Gostaria%20de%20ver%20o%20card%C3%A1pio"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Chamar Garçom
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </section>
    </main>
  );
}

function CarrosselImagens({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function next() {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-t-xl">
      {/* Container que desliza */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative min-w-full h-80">
            <Image
              src={src}
              alt={`Imagem ${i + 1}`}
              fill
              className="object-cover select-none pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </>
      )}
    </div>
  );
}
