"use client";

import { useState, useEffect } from "react";
import { useCliente } from "../components/ClientContext";

interface EditarCadastroModalProps {
  onClose: () => void;
}

interface FormDataType {
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

export default function EditarCadastroModal({ onClose }: EditarCadastroModalProps) {
  const { atualizarCliente } = useCliente();
  const [cadastroTipo, setCadastroTipo] = useState<null | "dados" | "endereco" | "login">(null);
  const [formData, setFormData] = useState<FormDataType>({
    nome: "",
    whatsapp: "",
    email: "",
    cep: "",
    endereco: "",
    cidade: "",
    numero: "",
    complemento: "",
    login: "",
    senha: "",
  });

  useEffect(() => {
    const dados = localStorage.getItem("clienteCadastro");
    if (dados) setFormData(JSON.parse(dados));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    atualizarCliente(formData); // ✅ Atualiza o contexto e localStorage
    alert("Dados atualizados com sucesso!");
    console.log("Dados do formulário:", formData);
    onClose(); // ✅ Fecha o modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4 text-pink-700">Editar Cadastro</h2>

        {!cadastroTipo && (
          <div className="space-y-4">
            <p className="text-gray-800">Qual informação deseja atualizar?</p>
            <button onClick={() => setCadastroTipo("dados")} className="bg-pink-500 text-white px-4 py-2 rounded">Dados pessoais</button>
            <button onClick={() => setCadastroTipo("endereco")} className="bg-pink-500 text-white px-4 py-2 rounded">Endereço</button>
            <button onClick={() => setCadastroTipo("login")} className="bg-pink-500 text-white px-4 py-2 rounded">Login e senha</button>
          </div>
        )}

        {cadastroTipo && (
          <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
            {cadastroTipo === "dados" && (
              <>
                <input name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" className="w-full border p-2 rounded" />
                <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="Whatsapp" className="w-full border p-2 rounded" />
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" />
              </>
            )}

            {cadastroTipo === "endereco" && (
              <>
                <input name="cep" value={formData.cep} onChange={handleChange} placeholder="CEP" className="w-full border p-2 rounded" />
                <input name="endereco" value={formData.endereco} onChange={handleChange} placeholder="Endereço" className="w-full border p-2 rounded" />
                <input name="cidade" value={formData.cidade} onChange={handleChange} placeholder="Cidade" className="w-full border p-2 rounded" />
                <input name="numero" value={formData.numero} onChange={handleChange} placeholder="Número" className="w-full border p-2 rounded" />
                <input name="complemento" value={formData.complemento} onChange={handleChange} placeholder="Complemento" className="w-full border p-2 rounded" />
              </>
            )}

            {cadastroTipo === "login" && (
              <>
                <input name="login" value={formData.login} onChange={handleChange} placeholder="Login" className="w-full border p-2 rounded" />
                <input name="senha" type="password" value={formData.senha} onChange={handleChange} placeholder="Senha" className="w-full border p-2 rounded" minLength={8} />
              </>
            )}

            <div className="flex justify-between">
              <button type="button" onClick={() => setCadastroTipo(null)} className="text-sm text-gray-500 hover:underline">Voltar</button>
              <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Salvar</button>
            </div>
          </form>
        )}

        <button onClick={onClose} className="mt-4 text-sm text-gray-500 hover:underline">Fechar</button>
      </div>
    </div>
  );
}