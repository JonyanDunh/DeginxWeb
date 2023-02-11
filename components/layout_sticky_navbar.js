import Navbar from './navbar'
import Leftmenu from "./leftmenu";
import Footer from "./footer";

export default function Layout_sticky_navbar({MenuItems, page}) {
    return (
        <div className="sm:container sm:mx-auto mx-4">
            <div id="header" className=" top-4 ">
                <Navbar/>
            </div>
            <div className="content w-full flex  mb-4  flex-wrap sm:flex-nowrap gap-4">
                <Leftmenu MenuItems={MenuItems}/>
                <div className="sm:static sm:w-full   right-content   overflow-auto">
                    <main>{page}</main>
                </div>
            </div>
            <Footer/>
        </div>
    )
}