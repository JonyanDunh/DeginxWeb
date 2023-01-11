import Navbar from './navbar'
import Leftmenu from "./leftmenu";
import Footer from "./footer";

export default function Layout_sticky_navbar({MenuItems,page}) {
    return (
        <div className="sm:container sm:mx-auto">
            <div id="header" className="sticky top-0 ">
            <Navbar />
            </div>
            <div className="content w-full flex mb-4 sm:px-4  flex-wrap sm:flex-nowrap">
                <Leftmenu MenuItems={MenuItems}/>
                <div className="sm:static sm:w-full  right-content   overflow-auto rounded-lg">
                    <main>{page}</main>
                </div>
            </div>
            <Footer/>
        </div>
    )
}