"use client";

import { useState } from "react";
import { useCliente } from "../components/ClientContext";

interface CadastroModalProps {
  onClose: () => void;
}

export default function  CadastroModal({ onClose }: CadastroModalProps) {
  const { atualizarCliente } = useCliente(); // 🔥 pega do contexto
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({

  nome: "Danilo",
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.login || formData.senha.length < 8) {
    alert("Login e senha são obrigatórios. A senha deve ter no mínimo 8 dígitos.");
    return;
  }

    atualizarCliente(formData); // ✅ atualiza o contexto global
    alert("Cadastro realizado com sucesso!");
    console.log("Dados do formulário:", formData);
    onClose(); // fecha o modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4 text-pink-700">
          Cadastro de Cliente
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <input
                name="nome"
                type="text"
                placeholder="Nome completo"
                value={formData.nome}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                name="whatsapp"
                type="tel"
                placeholder="Whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <button
                type="button"
                onClick={nextStep}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
              >
                Próximo
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <input
                name="cep"
                type="text"
                placeholder="CEP"
                value={formData.cep}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                name="endereco"
                type="text"
                placeholder="Endereço"
                value={formData.endereco}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                name="cidade"
                type="text"
                placeholder="Cidade"
                value={formData.cidade}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                name="numero"
                type="number"
                placeholder="Número"
                value={formData.numero}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                name="complemento"
                type="text"
                placeholder="Complemento"
                value={formData.complemento}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-sm text-gray-500 hover:underline"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                >
                  Próximo
                </button>
              </div>
            </>
          )}

{step === 3 && (
  <>
    <p className="text-sm text-gray-700 mb-2">
      Confirme seus dados e crie seu login:
    </p>

    <ul className="text-sm text-gray-600 space-y-1 mb-4">
  <li><strong>Email:</strong> {formData.email}</li>
  <li><strong>CEP:</strong> {formData.cep}</li>
  <li><strong>Endereço:</strong> {formData.endereco}</li>
  <li><strong>Cidade:</strong> {formData.cidade}</li>
  <li><strong>Número:</strong> {formData.numero}</li>
  <li><strong>Complemento:</strong> {formData.complemento}</li>
    </ul>

    <input
      name="login"
      type="text"
      placeholder="Login"
      value={formData.login || ""}
      onChange={handleChange}
      className="w-full border p-2 rounded mb-2"
      required
    />
    <input
      name="senha"
      type="password"
      placeholder="Senha (mínimo 8 dígitos)"
      value={formData.senha || ""}
      onChange={handleChange}
      className="w-full border p-2 rounded mb-2"
      required
      minLength={8}
    />

    <div className="flex justify-between mt-4">
      <button
        type="button"
        onClick={prevStep}
        className="text-sm text-gray-500 hover:underline"
      >
        Voltar
      </button>
      <button
        type="submit"
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
      >
        Confirmar Cadastro
      </button>
    </div>
  </>
)}
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:underline"
        >
          Fechar
        </button>
      </div>
    </div>
  );

}

