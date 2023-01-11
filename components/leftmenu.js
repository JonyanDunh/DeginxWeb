import Link from 'next/link'

export default function Leftmenu({MenuItems}) {
    return (

        <div className="sm:block left-menu sm:w-72 w-full ">
                <main>{MenuItems}</main>
        </div>
    )
}