"use client";

import Image from "next/image";
import { useState } from "react";
import CadastroModal from "./CadastroModal";
import EditarCadastroModal from "./EditarCadastroModal";
import { useCliente } from "../components/ClientContext";

export default function TopBar() {
  const [showModal, setShowModal] = useState(false);
  const { cliente } = useCliente(); // 🔥 dados sempre atualizados via contexto

  return (
    <header className="sticky top-0 bg-[#381819] p-4 flex flex-col items-center shadow-md z-50">
      <div className="flex justify-between items-center w-full">
        <Image
          src="/assets/profilePictures/lolo3d.png"
          alt="Logo Sabores da Lolô"
          width={80}
          height={80}
          className="rounded-full"
        />
        <button
          onClick={() => setShowModal(true)}
          className="bg-pink-100 text-[#381819] px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          {cliente?.nome ? "Configurações" : "Entrar"}
        </button>
      </div>

      {cliente?.nome && (
        <div className="w-full flex justify-center mt-2">
          <span className="text-pink-100 text-xl font-semibold">
            Olá, {cliente.nome}!
          </span>
        </div>
      )}

      {showModal && !cliente?.nome && (
        <CadastroModal onClose={() => setShowModal(false)} />
      )}

      {showModal && cliente?.nome && (
        <EditarCadastroModal onClose={() => setShowModal(false)} />
      )}
    </header>
  );
}