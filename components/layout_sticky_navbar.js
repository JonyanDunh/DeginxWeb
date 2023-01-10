import Navbar from './navbar'
import Leftmenu from "./leftmenu";
import Pagecontent from "./pagecontent";
import Footer from "./footer";

export default function Layout_sticky_navbar({page}) {
    return (
        <div className="sm:container sm:mx-auto   ">
            <div id="header" className="header w-full p-4 sticky top-0 ">
                <Navbar links="fuck"/>
            </div>

            <div className="content w-full flex mb-4 sm:px-4  flex-wrap sm:flex-nowrap">
                <div className="hidden sm:block left-menu sticky mr-4">
                    <Leftmenu/>
                </div>
                <Pagecontent page={page}/>
            </div>
            <div id="footer" className="w-full px-4 ">
                <Footer/>
            </div>

        </div>
    )
}