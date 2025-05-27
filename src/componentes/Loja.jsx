import React from "react"
import { useNavigate } from "react-router-dom"
import Bottom from "./Bottom"

export default function Loja(){

    const [bolos, setBolos] = React.useState([
        {id: 1, nome: "Cupcake", preco: "15", descricao: "Gostoso"},
        {id: 2, nome: "Cupcake", preco: "10", descricao: "Delicioso"},
        {id: 3, nome: "Cupcake", preco: "12", descricao: "Obra de arte"},
    ]);

    const navigate = useNavigate();
    
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        const newBolo = {
            id: bolos.length+1,
            nome: formData.get("nomeBolo"),
            preco: formData.get("precoBolo"),
            descricao: formData.get("descricaoBolo")
        };
        
        setBolos(prevBolos => [...prevBolos, newBolo]);
        event.target.reset();
    }

    return(
        <div className="">
            <div className="p-5 text-center">
                <div className="font-raleway font-[600] italic text-[#FF748C] text-8xl">Welcome</div>
                <div className="font-raleway font-[600] italic text-[#FF748C] text-4xl">Craving sugar?</div>
            </div>
            <div className="">
                <div className="bg-[#FF748C] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 p-4">
                    {bolos.map((bolo) => (
                            <div 
                                key={bolo.id}
                                className="bg-white m-4 p-4 rounded-md size-[200px] hover:cursor-pointer"
                                onClick={() => navigate(`/compra/${bolo.id}`, {
                                            state: { cake: bolo}
                                        })}
                            >
                                <img 
                                    src="/src/assets/boloSite.png" 
                                    alt="Bolo" 
                                    className="m-auto w-[100px] h-[100px]" 
                                />
                                <p className="font-raleway font-[600] text-[40px] text-center mt-1 mb-0">
                                    {bolo.nome}
                                </p>
                            </div>
                    ))}
                </div>
            </div>
            <Bottom onSubmit={handleSubmit}></Bottom>
        </div>
    )
}