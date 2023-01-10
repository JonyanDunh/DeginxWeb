import Layout_sticky_navbar from "../components/layout_sticky_navbar";
export default function Page() {
    return (
        <>
            <div class="flex flex-wrap justify-center sm:justify-start gap-4">

                <div class="card rounded-lg w-auto sm:w-72 mx-4 sm:mx-0 bg-base-100">
                    <figure><img src="http://i0.hdslb.com/bfs/archive/312c7066cada83f01719790009fc8a8642145b17.jpg" alt="Shoes"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Page.getLayout = function getLayout(page) {
    return (
        <>
        <Layout_sticky_navbar page={page}/>

        </>

    )
}