export default function Bottom(props) {
    return (
        <div>
            <form className="bg-[#023047] flex justify-evenly items-center h-[137px]" onSubmit={props.onSubmit}>
                <div className="">
                    <h2 className="text-[#FF748C] text-sm ml-10">Nome do produto</h2>
                    <input 
                        type="text" 
                        placeholder="bolo" 
                        name="nomeBolo"
                        className="border-b-[#FF748C] border-b-2 text-white ml-10 bg-transparent outline-none"
                        required
                    />
                </div>
                <div className="">
                    <h2 className="text-[#FF748C] text-sm ml-10">Preço</h2>
                    <input 
                        type="text" 
                        placeholder="preço" 
                        name="precoBolo"
                        className="border-b-[#FF748C] border-b-2 text-white ml-10 bg-transparent outline-none"
                        required
                    />
                </div>
                <div className="">
                    <h2 className="text-[#FF748C] text-sm ml-10">Descrição</h2>
                    <input 
                        type="text" 
                        placeholder="Descrição" 
                        name="descricaoBolo"
                        className="border-b-[#FF748C] border-b-2 text-white ml-10 bg-transparent outline-none"
                        required
                    />
                </div>
                <button 
                    type="submit"
                    className="rounded-full bg-[#FF748C] text-white text-2xl ml-[-70px] size-[40px] hover:cursor-pointer hover:bg-[#e5637a] transition-colors"
                >
                    +
                </button>
            </form>
        </div>
    );
}