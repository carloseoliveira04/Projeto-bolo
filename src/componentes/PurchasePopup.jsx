import { useNavigate } from 'react-router-dom';

export default function PurchasePopup({ isOpen, onClose, cake, quantidade, valorTotal }) {
  const navigate = useNavigate();

  if (!isOpen || !cake) return null;

  const handleConfirm = () => {
    alert("Compra realizada com sucesso!");
    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-raleway font-bold mb-4 text-[#FF748C]">Confirmar Compra</h2>
        <p className="mb-4">
          Você está comprando {quantidade} unidades de {cake.nome || 'produto'} por R$ {valorTotal || 0}.
          Deseja continuar?
        </p>
        <div className="flex justify-end space-x-3">
          <button 
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button 
            className="px-4 py-2 bg-[#FF748C] text-white rounded-md hover:bg-[#f59ead] transition-colors"
            onClick={handleConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}