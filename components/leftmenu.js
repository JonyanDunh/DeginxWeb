
export default function Leftmenu() {
    return (
        <>
            <div className="sm:w-72 w-full ">
                <ul  className="menu  md:flex bg-base-100 sm:w-72  w-full  p-2 rounded-lg">
                    <li><a>Item 1</a></li>
                    <li><a className="active">Item 2</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </>
    )
}