import Link from 'next/link'

export default function Leftmenu({MenuItems}) {
    return (

        <div className="hidden sm:block left-menu sticky mr-4">
            <div className="sm:w-72 w-full ">
                <main>{MenuItems}</main>
            </div>
        </div>
    )
}