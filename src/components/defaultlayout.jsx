import { Outlet } from "react-router-dom";
import hero from '../assets/hero.png';
import Headerlink from "./Headerlinks";
const DefaultLayout = ()=>{
    return(
        <div className="wrapper">

            <header className="border-2 border-b-indigo-600">
                <Headerlink />
            </header>
            <main className="border-3 border-amber-800">
                
                < Outlet />
                
            </main>

            <footer className="border-2 border-b-pink-800">
                <p>footer</p>
            </footer>

        </div>
    )
}

export default DefaultLayout; 