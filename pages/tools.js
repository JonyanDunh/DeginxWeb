import Layout_sticky_navbar from "../components/layout_sticky_navbar";
import Items from "../components/tools/items";
import Leftmenu from "../components/leftmenu";
export default function Page({LeftMenuItems,tools}) {
    return (<Layout_sticky_navbar items={LeftMenuItems} page={(<Items tools={tools}/>)} />)
}
export async function getStaticProps() {
    let data;
    const res = await fetch('http://127.0.0.1:8000/api/tools/get')
    const tools = await res.json()
    const Type2Name = { all: "所有", Programmer: "程序员", VideoWebSite: "视频网站", Other: "其他" }
    let LeftMenuItems=[]
    let ToolsItems={}

    ToolsItems["all"] = []
    for (data of tools.data) {
        ToolsItems["all"].push(data["map"])
        if (ToolsItems[data["map"]["ItemType"]] == null)
            ToolsItems[data["map"]["ItemType"]] = [];
        ToolsItems[data["map"]["ItemType"]].push(data["map"])
    }
    let key=0
    for (data in ToolsItems) {
        LeftMenuItems.push({ ItemName: Type2Name[data], ItemKey: key, ItemType: data, ItemChildAmount: ToolsItems[data].length })
        key++
    }
    return {
        props: {
            tools,
             LeftMenuItems
        },
    }
}