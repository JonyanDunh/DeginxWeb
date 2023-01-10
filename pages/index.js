import Layout_fixed_navbar from "../components/layout_fixed_navbar";


export default function Page() {
    return (
       <>
           <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
               <div className="hero-overlay bg-opacity-60"></div>
               <div className="hero-content text-center text-neutral-content">
                   <div className="max-w-md">
                       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                       <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       <button className="btn btn-primary">Get Started</button>
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