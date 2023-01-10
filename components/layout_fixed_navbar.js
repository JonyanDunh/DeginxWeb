import Navbar from './navbar'
import Leftmenu from "./leftmenu";
import Pagecontent from "./pagecontent";
import Footer from "./footer";
export default function Layout_fixed_navbar({page}) {
    return (
        <div>
            <div id="header" className="header w-full p-4 fixed top-0 ">
                <Navbar links="fuck"/>
            </div>
            <div className="content w-full flex flex-wrap sm:flex-nowrap">
                <Pagecontent page={page}/>
            </div>
            <div id="footer" className="header w-full">
                <Footer/>
            </div>
        </div>
    )
}