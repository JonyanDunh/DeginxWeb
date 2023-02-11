import Navbar from './navbar'
import Leftmenu from "./leftmenu";
import Footer from "./footer";
export default function Layout_fixed_navbar({page}) {
    return (
        <div>
            <div id="header" className="sm:container sm:mx-auto mx-4  fixed top-0 right-0 left-0  ">
                <Navbar links="fuck"/>
            </div>
            <div className="content w-full flex flex-wrap sm:flex-nowrap">
                <div className="sm:static sm:w-full  right-content  overflow-auto">
                    <main>{page}</main>
                </div>
            </div>
            <div id="footer" className="header w-full">
                <Footer/>
            </div>
        </div>
    )
}