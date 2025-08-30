"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface Cliente {
  nome: string;
  whatsapp: string;
  email: string;
  cep: string;
  endereco: string;
  cidade: string;
  numero: string;
  complemento: string;
  login: string;
  senha: string;
}

interface ClienteContextType {
  cliente: Cliente | null;
  atualizarCliente: (novoCliente: Cliente) => void;
}

const ClienteContext = createContext<ClienteContextType | undefined>(undefined);

export const ClienteProvider = ({ children }: { children: React.ReactNode }) => {
  const [cliente, setCliente] = useState<Cliente | null>(null);

  useEffect(() => {
    const dados = localStorage.getItem("clienteCadastro");
    if (dados) {
      setCliente(JSON.parse(dados));
    }
  }, []);

  const atualizarCliente = (novoCliente: Cliente) => {
    localStorage.setItem("clienteCadastro", JSON.stringify(novoCliente));
    setCliente(novoCliente); // 🔥 Atualiza o estado global
  };

  return (
    <ClienteContext.Provider value={{ cliente, atualizarCliente }}>
      {children}
    </ClienteContext.Provider>
  );
};

export const useCliente = () => {
  const context = useContext(ClienteContext);
  if (!context) throw new Error("useCliente deve ser usado dentro de ClienteProvider");
  return context;
};