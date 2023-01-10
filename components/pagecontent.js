import Footer from "./footer";

export default function Pagecontent({page}) {
    return (
        <>
            <div
                 className="sm:static sm:w-full  right-content  overflow-auto rounded-lg">
                <main>{page}</main>

            </div>

        </>
    )
}