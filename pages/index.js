import Layout_fixed_navbar from "../components/layout_fixed_navbar";


export default function Page() {
    return (
        <>

            <div className="hero min-h-screen" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">正在开发中</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

Page.getLayout = function getLayout(page) {
    return (
        <Layout_fixed_navbar page={page}/>
    )
}