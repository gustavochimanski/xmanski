"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Loader2, Bell } from "lucide-react";

interface ModalChamarGarcomProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ModalChamarGarcom({ open, onOpenChange }: ModalChamarGarcomProps) {
  const [mesaInput, setMesaInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Detecta se é mobile ou desktop
  useEffect(() => {
    function checkScreenSize() {
      setIsMobile(window.innerWidth < 768);
    }
    checkScreenSize(); // chama logo para iniciar correto
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Limpa estado ao fechar modal
  useEffect(() => {
    if (!open) {
      setShowInput(false);
      setMesaInput("");
      setLoading(false);
    }
  }, [open]);

  // Você esqueceu de mostrar o input em algum momento? 
  // O botão para mostrar input está faltando no seu código.
  // Adicionei abaixo um botão para disparar o showInput = true

  async function handleChamarGarcom() {
    const mesaNumero = Number(mesaInput);
    if (!mesaInput.trim() || isNaN(mesaNumero) || mesaNumero <= 0) {
      toast.error("Número da mesa inválido.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/chamar-garcom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mesa: mesaNumero }),
      });

      if (!res.ok) throw new Error("Erro na requisição");

      toast.success("Garçom a caminho da sua mesa!");
      onOpenChange(false);
    } catch {
      toast.error("Erro ao chamar o garçom. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side={isMobile ? "top" : "right"}
        className={`bg-[#1e1e1e] shadow-lg flex flex-col ${
          isMobile
            ? "rounded-t-xl border-t min-h-[60vh]"   // no mobile, altura mínima 60% da tela
            : "rounded-l-xl border-l border-t-0 min-h-[300px]" // desktop, min 300px
        } sm:max-w-md sm:mx-auto`}
      >


        <SheetHeader>
          <SheetTitle className="text-[#f2a900] flex items-center gap-2 text-lg sm:text-xl">
            <Bell className="w-5 h-5 text-[#f2a900]" /> Chamar Garçom
          </SheetTitle>
          <SheetDescription className="text-gray-300 text-sm sm:text-base">
            {showInput
              ? "Digite o número da sua mesa e enviaremos um garçom rapidinho 🏃‍♂️"
              : "Clique no botão abaixo para informar o número da mesa"}
          </SheetDescription>
        </SheetHeader>

        {/* Botão fica em container próprio, sem padding vertical */}
        {!showInput && (
          <div className="mx-4">
            <Button onClick={() => setShowInput(true)} className="w-full">
              Informar Número da Mesa
            </Button>
          </div>
        )}

        {/* Container do input e footer, com padding e transição */}
          <div
            className={`transition-all duration-800 ease-in-out m-4 flex flex-col  ${
              showInput ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >

          <div className="mx-4">
            <label htmlFor="mesa" className="text-stone-400">
              Número da Mesa
            </label>
            <Input
              id="mesa"
              type="number"
              min={1}
              placeholder="Ex: 12"
              value={mesaInput}
              onChange={(e) => setMesaInput(e.target.value)}
              disabled={loading}
              className="bg-black"
              aria-label="Número da mesa"
            />
          </div>

          <SheetFooter className="flex justify-end gap-4 mt-10">
            <SheetClose asChild>
              <Button variant="outline" disabled={loading} className="w-full sm:w-auto">
                Cancelar
              </Button>
            </SheetClose>

            <Button
              onClick={handleChamarGarcom}
              disabled={loading || !showInput}
              className="w-full sm:w-auto bg-[#f2a900] text-black hover:bg-yellow-400"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin h-5 w-5" />
                  Enviando...
                </span>
              ) : (
                "Chamar Garçom"
              )}
            </Button>
          </SheetFooter>
        </div>
      </SheetContent>

    </Sheet>
  );
}
