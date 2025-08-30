"use client";
// src/app/components/TopBar.tsx
import Image from 'next/image';

import { useState } from 'react';
import CadastroModal from './CadastroModal';

export default function TopBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="sticky top-0 bg-[#381819] p-4 flex justify-between items-center shadow-md z-50">
      <Image
        src="/assets/profilePictures/lolo3d.png" // use caminho absoluto a partir da pasta public
        alt="Logo Sabores da Lolô"
        width={80}
        height={80}
        className="rounded-full"
      />
      <button
        onClick={() => setShowModal(true)}
        className="bg-pink-100 text-[#381819] px-4 py-2 rounded hover:bg-pink-600 transition"
      >
        Entrar
      </button>

      {showModal && <CadastroModal onClose={() => setShowModal(false)} />}
    </header>
  );
}