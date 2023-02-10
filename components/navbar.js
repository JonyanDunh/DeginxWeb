import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Navbar({}) {
    const router = useRouter()
    return (
        <>
            <div id="header" className="header w-full my-4  shadow ">
            <div className="navbar w-full  rounded-lg bg-base-200">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">DeginX</a>
                </div>
                <div className="flex-none">
                    <Link href="/"> <button className={`btn  btn-ghost hidden sm:block  ${"/"==router.pathname?"btn-active":""}`}>主页</button></Link>
                    <Link href="/tools?ItemType=all"><button className={`btn  btn-ghost sm:block  ${"/tools"==router.pathname?"btn-active":""}`}>工具</button></Link>
                    <button className="btn btn-ghost hidden ">插件</button>
                    <button className="btn btn-ghost hidden ">开放平台</button>
                    <button className="btn btn-ghost hidden  ">文档</button>
                    <button className="btn btn-ghost hidden ">关于</button>
                    <div className="dropdown dropdown-end hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i2.hdslb.com/bfs/face/dfc20ec4a6e62d1604d55be06ce4ff6977a6e8dc.png"/>
                            </div>
                        </label>
                        <ul tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}