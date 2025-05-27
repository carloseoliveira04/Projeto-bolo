import { Link } from "react-router-dom";

export default function Nav(){
  return (
    <>
      <nav className="bg-purple-600 flex justify-between items-center">
        <h1 className="text-white font-[600] text-2xl p-5">Sugar Rush</h1>
        <h1 className="text-[#D9D9D9] font-[400] text-lg font-roboto p-5"><Link to="/">Home</Link> | Carrinho</h1>
      </nav>
    </>
  )
}