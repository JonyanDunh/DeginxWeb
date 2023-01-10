export default function Navbar({}) {
    return (
        <>
            <div id="header" className="header w-full p-4 sticky top-0 ">
            <div className="navbar w-full text-neutral-content  rounded-lg glass">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">DeginX</a>
                </div>
                <div className="flex-none">
                    <button className="btn  btn-ghost hidden sm:block">主页</button>
                    <button className="btn btn-ghost hidden sm:block">工具</button>
                    <button className="btn btn-ghost hidden sm:block">插件</button>
                    <button className="btn btn-ghost hidden sm:block">开放平台</button>
                    <button className="btn btn-ghost hidden  sm:block">文档</button>
                    <button className="btn btn-ghost hidden sm:block">关于</button>
                    <div className="dropdown dropdown-end">
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