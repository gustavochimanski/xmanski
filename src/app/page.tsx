// app/page.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const menu = [
  {
    title: "BRUTINHO",
    price: "R$ 10,90",
    description:
      "90g de carne suculenta, cheddar, maionese da casa e pão brioche selado na manteiga.",
    quote: "Feito pra pequenos guerreiros com fome de verdade.",
    image: "/menu/brutinho.jpg",
    category: "Clássicos",
    highlight: false,
  },
  {
    title: "CLÁSSICO",
    price: "R$ 12,90",
    description:
      "130g de carne suculenta, cheddar duplo, cebola caramelizada e pão brioche selado na manteiga.",
    quote: "Pequeno no preço, gigante no sabor.",
    image: "/menu/classico.jpg",
    category: "Clássicos",
    highlight: true,
  },
  {
    title: "X TUDO",
    price: "R$ 29,90",
    description:
    "130g, cheddar defumado, cream cheese, bacon, ovo, presunto, alface, tomate, cebola roxa, milho, batata palha, maionese e pão brioche.",
    quote: "Come, luta e grita SKÅL!",
    image: "/menu/xtudo.jpg",
    category: "Hardcore",
    highlight: true,
  },
  {
    title: "XMANSKI",
    price: "R$ 27,90",
    description:
      "130g, cheddar defumado, cream cheese, cebola roxa, picles, milho, maionese do céu e pão brioche.",
    quote: "Só para os mais chegados, que conhecem o Sabor!",
    image: "/menu/xmanski.jpg",
    category: "Hardcore",
    highlight: false,
  },
  {
    title: "SÓ RAIZ",
    price: "R$ 14,90",
    description:
      "130g de carne, queijo prato, alface, tomate, cebola roxa, maionese da casa e pão brioche.",
    quote: "Simples, forte e sem frescura.",
    image: "/menu/soraiz.jpg",
    category: "Clássicos",
    highlight: false,
  },
  {
    title: "GALO DE GUERRA",
    price: "R$ 17,90",
    description:
      "Peito de frango, queijo prato, bacon, alface, tomate, maionese e pão brioche.",
    quote: "Galando na guerra dos sabores. 🐓🔥",
    image: "/menu/galodeguerra.jpg",
    category: "Clássicos",
    highlight: false,
  },
  {
    title: "GEMA DURA",
    price: "R$ 16,90",
    description:
      "130g, queijo prato, bacon, ovo frito na manteiga, pimenta do reino, pão brioche.",
    quote: "Esse lanche vale cada mordida 🥚💥",
    image: "/menu/gemadura.jpg",
    category: "Clássicos",
    highlight: false,
  },
  {
    title: "CALABRESO",
    price: "R$ 16,90",
    description:
      "130g, queijo prato, calabresa, cebola roxa, picles, maionese da casa, pão brioche.",
    quote: "Fogo na garganta, soco no sabor. 🔥🌶️",
    image: "/menu/calabreso.jpg",
    category: "Apimentados",
    highlight: false,
  },
  {
    title: "BAGUAL",
    price: "R$ 18,90",
    description:
      "130g, queijo, catupiry, tomate, bacon rústico, maionese da casa e pão brioche.",
    quote: "É bagual, é raiz, é brabeza no dente.",
    image: "/menu/bagual.jpg",
    category: "Clássicos",
    highlight: false,
  },
];

const categories = ["Clássicos","Hardcore", "Apimentados", ];

export default function HomePage() {
  return (
    <main className="p-6 bg-black min-h-screen text-white">
      <header className="text-center mb-10">
        <h1 className="text-4xl font- font-extrabold text-[#f2a900]">🍔 XMANSKI </h1>
        <p className="text-gray-300 italic mt-2 max-w-xl mx-auto">
          “95% dos clientes voltam... Os outros 5%? Não resistiram de tanto comer...”
        </p>
      </header>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {menu.map((item, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-[#1e1e1e] rounded-xl border border-[#f2a900]/30 p-5 cursor-pointer hover:scale-[1.02] hover:border-[#f2a900] transition-transform transition-colors"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={600}
              className="w-full h-72 object-cover rounded-lg mb-4 select-none pointer-events-none"
              priority={i < 3}
            />
            <h2 className="text-[#f2a900] text-xl font-semibold mb-1">
              {item.title} – <span className="text-white">{item.price}</span>
            </h2>
            <p className="text-gray-100 mb-2 text-sm leading-relaxed">{item.description}</p>
            <p className="italic text-gray-400 text-xs">“{item.quote}”</p>
          </motion.article>
        ))}
      </section>
    </main>
  );
}