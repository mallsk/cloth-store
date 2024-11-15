import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ShoppingBag , CircleUser } from "lucide-react"
import { Home } from "./pages/Home";

export default function App() {
  return <div className="text-black">
    <Router>
      <div className="flex justify-between h-16 border-solid border-b-2 rounded border-gray-150 lg:pl-20 pl-4 lg:pr-20 pr-4">
        <div className="flex justify-start text-3xl font-bold pt-3 text-transparent bg-clip-text bg-gradient-to-tl from-orange-500 to-black">
          <span className="pr-2"><img src="https://i.ibb.co/SVyxVNf/Screenshot-2024-11-12-195852.png" alt="" className="w-10 h-10 pb-2" /></span>
          <Link to={"/"}>Hidden Deer</Link>
        </div>
        <div className="flex justify-start">
          <span className="lg:pr-20 pr-5 pt-3 "><input className="w-32 lg:w-64 pl-4 h-10 border-solid border-2 rounded border-gray-150 shadow-lg shadow-gray-200/50 placeholder:text-sm font-medium tracking-wide pb-1 hover:shadow-gray-300/50" type="text" placeholder="Search...." /></span>
          <span className="pt-4 cursor-pointer lg:pr-10 pr-2"><ShoppingBag /></span>
          <span className="pt-4 cursor-pointer"><CircleUser /></span>
        </div>
      </div>

      <div className="flex justify-center">
        <Routes>
          <Route path="/" element={<Home /> } />
        </Routes>
      </div>
    </Router>
  </div>
}