export default function Items({ tools }) {
    return (
        <>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                {tools.data.map((tool) => (
                    <div className="card rounded-lg w-auto sm:w-72 mx-4 sm:mx-0 bg-base-100">
                        <figure><img src={tool.map.ItemImg} alt="Shoes"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{tool.map.ItemName}</h2>
                            <p>{tool.map.ItemDescribe}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}