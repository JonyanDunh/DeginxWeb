import Layout_sticky_navbar from "../../components/layout_sticky_navbar";
import Link from "next/link";
import Image from 'next/image'

export default function Page() {
    return (
        <Layout_sticky_navbar
            MenuItems=
                {(
                    <div className="left_content  sm:static">
                        <div className="bilibili_profile  glass w-full sm:w-72 rounded-lg">
                            <div className="tabs">
                                <a className="tab-active tab w-1/3 tab-lg tab-lifted font-semibold">资料</a>
                                <a className="tab w-1/3 tab-lg tab-lifted font-semibold">设置</a>
                                <a className="tab w-1/3 tab-lg tab-lifted font-semibold">退出</a>
                            </div>
                            <div className="tab_content bg-base-100  rounded-b-lg">
                                <div className="flex flex-col">
                                    <div className="avatar justify-center m-6">
                                        <div className="w-24 mask mask-squircle">
                                            <img
                                                src="https://i0.hdslb.com/bfs/album/07bbfabf11355750b35f34a616f0c78f0a22a8f4.jpg"/>
                                        </div>
                                    </div>
                                    <div className="text-xl text-center font-bold">JONYAN DUNH</div>
                                    <div className="text-center ">
                                        <div
                                            className="text-center font-semibold badge badge-primary badge-outline">uid:
                                        </div>
                                    </div>
                                    <div className="text-center  grid grid-cols-2 grid-rows-2 m-6 gap-4">
                                        <div className=" rounded-lg p-2  shadow">
                                            <div className="text-2xl">
                                                11.4k
                                            </div>
                                            <div>粉丝</div>
                                        </div>
                                        <div className=" rounded-lg p-2  shadow">
                                            <div className="text-2xl">
                                                5.14k
                                            </div>
                                            <div>视频</div>
                                        </div>
                                        <div className=" rounded-lg p-2  shadow">
                                            <div className="text-2xl">
                                                104
                                            </div>
                                            <div>动态</div>
                                        </div>
                                        <div className=" rounded-lg p-2  shadow">
                                            <div className="text-2xl">
                                                92k
                                            </div>
                                            <div>硬币</div>
                                        </div>
                                    </div>
                                    <div className="text-center mb-4">
                                        <button className="btn btn-primary">前往个人主页</button>
                                    </div>
                                    <div className="text-center mb-6">
                                        <button className="btn btn-primary">前往直播间</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stats shadow flex flex-col mt-4 rounded-lg">
                            <div className="stat ">
                                <div className="stat-figure text-secondary ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         className="inline-block w-8 h-8 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <div className="stat-title">本工具服务人数</div>
                                <div className="stat-value text-secondary">2.6M</div>
                                <div className="stat-desc">根据用户哔哩哔哩UID来统计</div>
                            </div>
                        </div>
                        <div className="bg-base-100 rounded-lg mt-4 p-4 shadow">
                            <div className=" text-lg font-bold">打赏支持作者 :)</div>
                            <div
                                className="text-sm  italic">您的支持是对我最大的鼓励！UP主将继续努力发掘更多有意思的东西给大家~
                            </div>
                            <div className="grid grid-cols-2 pt-4 gap-4">
                                <div>
                                    <div className="avatar justify-center">
                                        <div className=" rounded">
                                            <img
                                                src="https://message.biliimg.com/bfs/im/5c22fa147a19971554e1bff9f7108958030dceab.png"/>
                                        </div>
                                    </div>
                                    <div className="text-center font-semibold ">微信</div>
                                </div>
                                <div>
                                    <div className="avatar justify-center">
                                        <div className=" rounded">
                                            <img
                                                src="https://message.biliimg.com/bfs/im/703dec6333b348170b705355be9eb8b52654e236.png"/>
                                        </div>
                                    </div>
                                    <div className="text-center font-semibold">支付宝</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            page=
                {(
                    <div>
                        <div className="alert alert-info shadow-lg rounded-lg mb-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="stroke-current flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>此工具箱为内测版，功能可能存在不稳定，敬请原谅</span>
                            </div>
                        </div>
                        <div className=" grid grid-cols-1  sm:mx-0 sm:grid-cols-3 auto-rows-max gap-4">
                            <div className="flex  flex-col bg-base-100 rounded-lg  p-4 shadow">
                                <div className="text-xl font-bold ">用户须知</div>

                            </div>
                            <div className=" md:col-span-2 bg-base-100 rounded-lg  p-4 shadow">
                                <div className="text-xl font-bold ">投稿动态封面上传</div>
                                <div className="flex flex-col sm:flex-row w-full mt-4 ">
                                    <div
                                        className=" flex flex-col sm:w-1/3 relative rounded-lg flex-grow overflow-hidden justify-center gap-4 ">
                                        <div className="text-center text-base font-bold">
                                            视频封面
                                        </div>
                                        <div className="grid flex-grow place-items-center">
                                            <div className="rounded-lg relative  overflow-hidden w-72 h-48 ">
                                                <Image fill
                                                       src="https://i0.hdslb.com/bfs/album/07a048755d28c6244c16f5cb1094773e8ec612e2.webp"/>
                                            </div>
                                        </div>
                                        <div className="flex  justify-center">
                                            <button className="btn btn-warning  ">选择图片</button>
                                        </div>
                                        <div className="flex  justify-center">
                                            <select className="select select-secondary w-full max-w-xs">
                                                <option disabled selected>选择一个视频</option>
                                            </select>
                                        </div>
                                        <div className="flex  justify-center">
                                            <button className="btn btn-success   ">上传图片</button>
                                        </div>
                                    </div>
                                    <div className="divider divider-horizontal"/>
                                    <div className="divider sm:hidden"/>
                                    <div
                                        className=" flex flex-col sm:w-1/3 relative rounded-lg flex-grow overflow-hidden justify-center gap-4 ">
                                        <div className="text-center text-base font-bold">
                                            专栏封面
                                        </div>
                                        <div className="grid flex-grow place-items-center">
                                            <div className="rounded-lg relative  overflow-hidden w-72 h-48 ">
                                                <Image fill
                                                       src="https://i0.hdslb.com/bfs/album/a005667d57c15f94f6d7bbcee9999f4300bced69.webp"/>
                                            </div>
                                        </div>
                                        <div className="flex  justify-center">
                                            <button className="btn btn-warning  ">选择图片</button>
                                        </div>
                                        <div className="flex  justify-center">
                                            <select className="select select-secondary w-full max-w-xs">
                                                <option disabled selected>选择一篇文章</option>
                                            </select>
                                        </div>
                                        <div className="flex  justify-center">
                                            <button className="btn btn-success ">上传图片</button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className=" sm:col-span-3 bg-base-100 rounded-lg p-4 shadow ">
                                <div className="text-xl font-bold ">直播间动态封面上传</div>
                                <div className="flex flex-col sm:flex-row w-full mt-4 ">
                                    <div
                                        className=" flex flex-col sm:w-1/3 relative rounded-lg flex-grow overflow-hidden justify-center gap-4 ">
                                        <div className="text-center text-base font-bold">
                                            横版封面
                                        </div>
                                        <div className="grid flex-grow place-items-center">
                                            <div className="rounded-lg relative  overflow-hidden w-72 h-48 ">
                                                <Image fill
                                                       src="https://message.biliimg.com/bfs/im/4bd450bbdce34d5e9fee7182a0b2be446ed0cf53.webp"/>
                                            </div>
                                        </div>
                                        <div className="flex  justify-center gap-4">
                                            <div>
                                                <button className="btn btn-warning  ">选择图片</button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success   ">上传图片</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider divider-horizontal"/>
                                    <div className="divider sm:hidden"/>
                                    <div
                                        className=" flex flex-col sm:w-1/3 relative rounded-lg flex-grow overflow-hidden justify-center gap-4">
                                        <div className="text-center text-base font-bold">
                                            竖版封面
                                        </div>
                                        <div className="grid flex-grow place-items-center">
                                            <div className="rounded-lg relative  overflow-hidden w-48 h-72 ">
                                                <Image fill
                                                       src="https://message.biliimg.com/bfs/im/81c0759d3c2d79b14709d33e863d168d13365fd1.webp"/>
                                            </div>
                                        </div>
                                        <div className="flex  justify-center gap-4">
                                            <div>
                                                <button className="btn btn-warning  ">选择图片</button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success   ">上传图片</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="divider divider-horizontal"/>
                                    <div className="divider sm:hidden"/>
                                    <div
                                        className=" flex flex-col sm:w-1/3 relative rounded-lg flex-grow overflow-hidden justify-center gap-4">
                                        <div className="text-center text-base font-bold">
                                            颜值封面
                                        </div>
                                        <div className="grid flex-grow place-items-center">
                                            <div className="rounded-lg relative  overflow-hidden w-48 h-48 ">
                                                <Image fill
                                                       src="https://message.biliimg.com/bfs/im/4b400e5c6a378ab22e703b8939ad5b47922d10a7.webp"/>
                                            </div>
                                        </div>
                                        <div className="flex  justify-center gap-4">
                                            <div>
                                                <button className="btn btn-warning  ">选择图片</button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success   ">上传图片</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="h-96 mockup-code md:col-span-2 rounded-lg shadow">
                                <pre data-prefix="$"><code>sudo su upload image</code></pre>
                                <pre data-prefix=">" className="text-warning"><code>uploading...</code></pre>
                                <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                            </div>
                            <div className="flex  flex-col bg-base-100 rounded-lg  p-4 shadow">
                                <div className="text-xl font-bold ">自定义头像上传</div>
                                <div
                                    className=" flex  flex-col w-full relative rounded-lg flex-grow overflow-hidden justify-center gap-4 mt-4">

                                    <div className="grid flex-grow place-items-center">
                                        <div className="rounded-lg relative  overflow-hidden w-48 h-48 ">
                                            <Image fill
                                                   src="https://i0.hdslb.com/bfs/album/201a6b9199e4c5fb2f49e6e3a4730899d125ae97.gif"/>
                                        </div>
                                    </div>
                                    <div className="flex  justify-center gap-4">
                                        <div>
                                            <button className="btn btn-warning  ">选择图片</button>
                                        </div>
                                        <div>
                                            <button className="btn btn-success   ">上传图片</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                )}
        />
    )
}