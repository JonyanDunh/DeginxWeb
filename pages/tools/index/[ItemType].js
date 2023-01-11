import Layout_sticky_navbar from "../../../components/layout_sticky_navbar";
import Link from "next/link";

export default function Page({LeftMenuItems, tools}) {
    return (
        <Layout_sticky_navbar
            MenuItems={
                (

                    <ul className="menu  md:flex bg-base-100 sm:w-72  w-full  p-2 rounded-lg">
                        {LeftMenuItems.map((item) => (
                            <Link key={item.ItemType} href={item.ItemLink}>
                                <li>
                                    <div className={item.ItemActive}>
                                        {item.ItemName}
                                        <div
                                            className="badge badge-secondary absolute  right-4">{item.ItemChildAmount}</div>
                                    </div>
                                </li>
                            </Link>)
                        )}
                    </ul>

                )
            }
            page={(
                <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                    {tools.data.map((tool) => (
                        <div key={tool.map.ItemUUID}
                             className="card rounded-lg w-auto sm:w-72 mx-4 sm:mx-0 bg-base-100">
                            <figure>
                                <img src={tool.map.ItemImg}/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{tool.map.ItemName}</h2>
                                <div>{tool.map.ItemDescribe}</div>
                                <div className="card-actions justify-end">
                                    <Link href={`/tools/${tool.map.ItemUUID}`}>
                                        <button disabled={tool.map.disabled} className="btn  btn-primary">立即使用
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>)}/>
    )
}

export async function getStaticPaths() {
    const res_type = await fetch('http://127.0.0.1:8000/api/tools/get_item_type')
    const tools_type = await res_type.json()
    const paths = tools_type.data.map((type) => ({
        params: {ItemType: type["map"]["ItemType"]},
    }))
    return {paths, fallback: false}
}

export async function getStaticProps(context) {
    const {params} = context;
    const ItemType = params.ItemType;
    let data;
    const res = await fetch('http://127.0.0.1:8000/api/tools/get/' + ItemType)
    const tools = await res.json()
    const res_type = await fetch('http://127.0.0.1:8000/api/tools/get_item_type')
    const tools_type = await res_type.json()
    let LeftMenuItems = []
    for (data of tools_type.data) {
        LeftMenuItems.push({
            ItemName: data["map"]["ItemName"],
            ItemType: data["map"]["ItemType"],
            ItemLink: "/tools/index/" + data["map"]["ItemType"],
            ItemActive: data["map"]["ItemType"] == ItemType ? "active" : "",
            ItemChildAmount: data["map"]["ItemCount"]
        })

    }
    return {
        props: {
            tools,
            LeftMenuItems
        },

    }
}
