import Navbar from './navbar'
import Leftmenu from "./leftmenu";
import Pagecontent from "./pagecontent";
import Footer from "./footer";

export default function Layout_sticky_navbar({items, page}) {
    return (
        <div className="sm:container sm:mx-auto">
            <Navbar links="fuck"/>
            <div className="content w-full flex mb-4 sm:px-4  flex-wrap sm:flex-nowrap">
                <Leftmenu items={items}/>
                <div
                    className="sm:static sm:w-full  right-content  overflow-auto rounded-lg">
                    <main>{page}</main>
                </div>
            </div>
            <Footer/>
        </div>
    )
}