// CadastroModal.tsx
interface CadastroModalProps {
  onClose: () => void;
}

export default function CadastroModal({ onClose }: CadastroModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4 text-pink-700">Cadastro de Cliente</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Nome" className="w-full border p-2 rounded" />
          <input type="tel" placeholder="Telefone" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            Cadastrar
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-sm text-gray-500 hover:underline">
          Fechar
        </button>
      </div>
    </div>
  );
}