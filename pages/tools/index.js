import Layout_sticky_navbar from "../../components/layout_sticky_navbar";
import Link from "next/link";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from "next/image";

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

export default  function Page() {

    const router = useRouter()
    const ItemType = router.query["ItemType"];
    const [tools, settools] = useState(null)
    const [isLoadingTools, setLoadingTools] = useState(false)
    const [LeftMenuItems, setLeftMenuItems] = useState(null)
    const [isLoadingLeftMenuItems, setLoadingLeftMenuItems] = useState(false)
    const [thisItemType, setthisItemType] = useState(null)

    const ItemImgLoader = ({src}) => {
        return src
    }
    useEffect(() => {
        if(!router.isReady) {
            return;
        }
        setLoadingTools(true)
        setLoadingLeftMenuItems(true)
        setthisItemType(ItemType)
        fetch('https://api.deginx.com/api/tools/get/'+ItemType)
            .then((res) => res.json())
            .then((data) => {
                settools(data)
                setLoadingTools(false)
            })
        fetch('https://api.deginx.com/api/tools/get_item_type')
            .then((res) => res.json())
            .then((data) => {
                let LeftMenuItems = []
                for (data of data.data) {
                    LeftMenuItems.push({
                        ItemName: data["map"]["ItemName"],
                        ItemType: data["map"]["ItemType"],
                        ItemLink: "?ItemType=" + data["map"]["ItemType"],
                        ItemChildAmount: data["map"]["ItemCount"]
                    })
                }
                setLeftMenuItems(LeftMenuItems)
                setLoadingLeftMenuItems(false)
            })
        const handleRouteChange = (url, { shallow }) => {
            let ItemType=GetQueryString("ItemType")
            setthisItemType(ItemType)
            fetch('https://api.deginx.com/api/tools/get/'+ItemType)
                .then((res) => res.json())
                .then((data) => {
                    settools(data)
                })
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])
    useEffect(() => {
        //alert(router.pathname)
    }, [router.query])
    if (isLoadingTools||isLoadingLeftMenuItems||!tools||!LeftMenuItems) return <Layout_sticky_navbar
        MenuItems={
            (
                <ul className="menu  md:flex bg-base-100 sm:w-72  w-full  p-2 rounded-lg shadow">

                </ul>
            )
        }
        page={(
            <div className="flex flex-wrap  justify-center sm:justify-start  gap-4 ">
            </div>)}/>

    return (
        <Layout_sticky_navbar
            MenuItems={
                (
                    <ul className="menu  md:flex bg-base-100 sm:w-72  w-full  p-2 rounded-lg shadow">
                        {LeftMenuItems.map((item) => (
                            <Link key={item.ItemType}  href={item.ItemLink}>
                                <li>
                                    <div className={item.ItemType==thisItemType?"active":""}>
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
                <div className="flex flex-wrap  justify-center sm:justify-start  gap-4 ">
                    {tools.data.map((tool) => (
                        <div key={tool.map.ItemUUID}
                             className="card rounded-lg flex-shrink flex-grow w-36 sm:w-72 sm:flex-grow-0 bg-base-100 shadow ">
                            <figure>
                                <div className="rounded-lg relative  overflow-hidden aspect-w-16 aspect-h-10 w-full">
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
                                    <Link  href={`/tools/${tool.map.ItemShortName}`}>
                                        <button disabled={tool.map.disabled} className="btn btn-primary ">立即使用
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>)}/>
    )
}


