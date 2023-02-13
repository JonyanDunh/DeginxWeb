import Layout_sticky_navbar from "../../components/layout_sticky_navbar";
import Link from "next/link";
import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Image from "next/image";
import useSWR from 'swr'

export default function Page() {

    const router = useRouter()
    const [LeftMenuItems, setLeftMenuItems] = useState(null)
    const fetcher = url => fetch(url, {method: 'GET', redirect: 'follow'}).then(r => r.json())
    const {data: ToolsData} = useSWR(router.isReady ? 'https://api.deginx.com/api/tools/get/' + GetQueryString("ItemType") : null, fetcher)
    const {data: LeftMenuItemsData} = useSWR(router.isReady ? 'https://api.deginx.com/api/tools/get_item_type' : null, fetcher)
    const ItemImgLoader = ({src}) => {
        return src
    }

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
        var context = "";
        if (r != null)
            context = decodeURIComponent(r[2]);
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    }

    useEffect(() => {
        if (!LeftMenuItemsData)
            return
        let LeftMenuItems = []
        for (const data of LeftMenuItemsData.data) {
            LeftMenuItems.push({
                ItemName: data["map"]["ItemName"],
                ItemType: data["map"]["ItemType"],
                ItemLink: "?ItemType=" + data["map"]["ItemType"],
                ItemChildAmount: data["map"]["ItemCount"]
            })
        }
        setLeftMenuItems(LeftMenuItems)

    }, [LeftMenuItemsData])
    return (
        <Layout_sticky_navbar
            MenuItems={
                (
                    <ul className="menu rounded-box md:flex bg-base-100 sm:w-72  w-full  p-2 ">
                        {LeftMenuItems?.map((item) => (
                            <Link key={item.ItemType} href={item.ItemLink}>
                                <li>
                                    <div className={item.ItemType === GetQueryString("ItemType") ? "active" : ""}>
                                        {item.ItemName}
                                        <div
                                            className="badge badge-accent absolute  right-4">{item.ItemChildAmount}</div>
                                    </div>
                                </li>
                            </Link>)
                        )}
                    </ul>

                )
            }
            page={(
                <div className="flex flex-wrap  justify-center sm:justify-start  gap-4 ">
                    {ToolsData?.data?.map((tool) => (
                        <div key={tool.map.ItemUUID}
                             className="card  flex-shrink flex-grow w-36 sm:w-72 sm:flex-grow-0 bg-base-100  ">
                            <figure>
                                <div className=" relative  overflow-hidden aspect-w-16 aspect-h-10 w-full">
                                    <Image fill
                                           loader={ItemImgLoader}
                                           src={tool.map.ItemImg}
                                    />
                                </div>
                            </figure>
                            <div className="card-body p-4 sm:p-8 ">
                                <div className="sm:text-xl font-bold text-center line-clamp-1">{tool.map.ItemName}</div>
                                <div className="line-clamp-2 sm:text-center">{tool.map.ItemDescribe}</div>
                                <div className="card-actions justify-center ">
                                    <Link href={`/tools/${tool.map.ItemShortName}`}>
                                        <button disabled={tool.map.disabled} className="btn btn-secondary ">立即使用
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>)}/>
    )
}


