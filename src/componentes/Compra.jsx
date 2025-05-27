import { __unstable__loadDesignSystem } from "tailwindcss";
import Nav from "./Nav"
import { useLocation, useNavigate } from "react-router-dom"


export default function Compra(){

    const location = useLocation()
    const state = location.state
    const navigate = useNavigate()

    return(
        <>
            <Nav></Nav>
            <div className="flex font-raleway">
                <div className="bg-[#FF748C] w-[50%] h-[400px] m-4">
                    <div className="bg-white size-[180px] mb-8 m-auto rounded-xl">
                       <img src="/src/assets/boloSite.png" alt="Imagem bolo" className="mt-4 p-4 rounded-md size-[120px] m-auto"/>
                       <p className="text-center font-raleway font-[600] text-[40px]">{state.cake.nome}</p>
                    </div>                    
                    <h1 className="text-white m-2 text-center font-[500] text-[60px]">R$ {state.cake.preco}</h1>
                </div>
                <div className="bg-[#8ECAE6] w-[50%] m-4 font-[600] flex-col align-center">
                    <h1 className="text-[40px] my-2 text-center">{state.cake.descricao}</h1>
                    <div className="justify-items-center">
                        <p className="bg-white font-raleway text-[10px] w-50 font-[400] text-[#FF748C] text-center mb-[-4px] translate-x-[-21px]">quantidade</p>
                        <select name="quan" className="w-50 bg-white mt-0 text-center font-[400] outline-none shadow-xl">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <button className="bg-[#FF748C] size-[30px] rounded-full text-white ml-3 shadow-xl hover:cursor-pointer hover:bg-[#f59ead] transition-colors duration-500" onClick={() => {navigate(-1)}}>+</button>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}