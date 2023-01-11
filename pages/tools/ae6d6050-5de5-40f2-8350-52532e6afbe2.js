import Layout_sticky_navbar from "../../components/layout_sticky_navbar";
import Link from "next/link";


export default function Page() {
    return (
        <Layout_sticky_navbar
            MenuItems=
                {(
                   <div className="bilibili_profile  glass w-72  rounded-lg">
                       <div className="tabs">
                           <a className="tab-active tab w-1/3 tab-lg tab-lifted font-semibold">资料</a>
                           <a className="tab w-1/3 tab-lg tab-lifted font-semibold">设置</a>
                           <a className="tab w-1/3 tab-lg tab-lifted font-semibold">退出</a>
                       </div>
                       <div className="tab_content bg-base-100  rounded-b-lg">
                           <div className="flex flex-col">
                                   <div className="avatar justify-center m-6">
                                       <div className="w-24 mask mask-squircle">
                                           <img src="https://placeimg.com/192/192/people" />
                                       </div>
                                   </div>
                               <div className="text-xl text-center font-bold">JONYAN DUNH</div>
                               <div className="text-center ">
                                   <div className="text-center font-semibold badge badge-primary badge-outline">uid:</div>
                               </div>
                               <div className="text-center  grid grid-cols-2 grid-rows-2 m-6 gap-4">
                                   <div className=" rounded-lg p-2  shadow">
                                       <div className="text-2xl">
                                           11.4k
                                       </div>
                                       <div>fans</div>
                                   </div>
                                   <div className=" rounded-lg p-2  shadow">
                                       <div className="text-2xl">
                                           5.14k
                                       </div>
                                       <div>videos</div>
                                   </div>
                                   <div className=" rounded-lg p-2  shadow">
                                       <div className="text-2xl">
                                           104
                                       </div>
                                       <div>posts</div>
                                   </div>
                                   <div className=" rounded-lg p-2  shadow">
                                       <div className="text-2xl">
                                           92k
                                       </div>
                                       <div>coins</div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                )}
            page=
                {(
                    <></>
                )}
        />
    )
}