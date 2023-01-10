export default function Leftmenu(items) {

    return (
        <>
            <div className="hidden sm:block left-menu sticky mr-4">
                <div className="sm:w-72 w-full ">
                    <ul className="menu  md:flex bg-base-100 sm:w-72  w-full  p-2 rounded-lg">

                        {items["items"].map((item) => (<li>
                            <a>
                                {item.ItemName}
                                <div
                                    className="badge badge-secondary absolute  right-4">{item.ItemChildAmount}</div>
                            </a></li>))}

                    </ul>
                </div>
            </div>
        </>
    )
}