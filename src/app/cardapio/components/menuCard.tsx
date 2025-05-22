"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

interface MenuItem {
  title: string;
  price: string;
  description: string;
  quote: string;
  image: string;
  highlight: boolean;
  onChamarGarcom: (mesa: string) => void;
}

export function MenuCard({ title, price, description, quote, image, onChamarGarcom }: MenuItem) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[#1e1e1e] h-full border p-0 border-[#f2a900]/30 hover:border-[#f2a900] hover:scale-[1.02] transition-all cursor-pointer rounded-xl">
        <Image
          src={image}
          alt={title}
          width={600}
          height={800}
          className="w-full h-80 object-cover rounded-t-xl select-none pointer-events-none"
          priority={false}
        />

        <CardHeader>
          <CardTitle className="text-[#f2a900] text-lg">
            {title} – <span className="text-white">{price}</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-100 text-sm leading-relaxed mb-1">
            {description}
          </p>
          <p className="italic text-gray-400 text-xs">“{quote}”</p>
        </CardContent>

        <CardFooter className="mb-3 justify-center">
          <Button
            className="bg-[#f2a900] w-full text-zinc-900 hover:text-white"
            onClick={() => onChamarGarcom(title)}
          >
            Chamar Garçom
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
