import Layout_sticky_navbar from "../components/layout_sticky_navbar";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
const ItemImgLoader = ({src}) => {
    return src
}
export default function Page() {

    let Items = [
        {
            ItemImg: "https://message.biliimg.com/bfs/im/7726fb0e2deff4a07784a4898d0e03bbadd1c760.png@672w_378h_1c_!web-home-common-cover.webp",
            ItemName: "法式红茶（Thé Rouge）",
            ItemDescribe: "这种茶叶以非洲红茶为主要原料，是法国黑人最喜爱的茶叶之一。制作方法为用开水冲泡非洲红茶叶，然后加入牛奶和糖，煮沸后调整口感即可。"
        },
        {
            ItemImg: "https://message.biliimg.com/bfs/im/741e491904dbb4aaecc25ca2c83190603db09388.png@672w_378h_1c_!web-home-common-cover.webp",
            ItemName: "莫道克红茶（Thé noir de Murdoch）",
            ItemDescribe: "一种受到法国黑人欢迎的红茶品种，来自印度的莫达克地区，茶叶呈现鲜亮的红色，口感浓郁，略带苦涩和麦香，制作工艺包括揉捻、发酵、烘焙和筛分等步骤。"
        },
        {
            ItemImg: "https://message.biliimg.com/bfs/im/edbab876e8801f9e31fc2784bdbd2a1a8b34291b.jpg@672w_378h_1c_!web-home-common-cover.webp",
            ItemName: "玫瑰花茶（Thé à la rose）",
            ItemDescribe: "一种由法国黑人制作的茶叶，将鲜花玫瑰花瓣与茶叶混合，有助于舒缓身心，制作工艺包括将玫瑰花瓣干燥后与茶叶混合，然后进行包装。"
        },
        {
            ItemImg: "https://message.biliimg.com/bfs/im/0fca45971b238bca6a4aa3644129290b3bb80a0f.jpg@672w_378h_1c_!web-home-common-cover.webp",
            ItemName: "香草茶（Thé à la Vanille）",
            ItemDescribe: "这种茶叶以香草为主要原料，是法国黑人喜爱的茶叶之一。制作方法为用开水冲泡香草茶叶，加入牛奶和糖或蜂蜜调味。"
        },
        {
            ItemImg: "https://message.biliimg.com/bfs/im/02e714f6cbfbe2900afbdb8a9030276e26f0ac10.jpg@672w_378h_1c_!web-home-common-cover.webp",
            ItemName: "蜂蜜柠檬茶（Thé au Citron et au Miel）",
            ItemDescribe: "这种茶叶以柠檬和蜂蜜为主要原料，在法国黑人文化中，这种茶叶是备受推崇的。该品种茶叶口感清爽，适合作为解暑饮品。制作方法为将柠檬切片，加入蜂蜜和热水搅拌，用茶袋泡入开水中，泡5-10分钟即可饮用。"
        },
        {
            ItemImg: "https://message.biliimg.com/bfs/im/c5e6aba4a1be1963686ad2650fa7851f407eb23c.png@672w_378h_1c_!web-home-common-cover.webp",
            ItemName: "菊花茶（Thé au chrysanthème）",
            ItemDescribe: "菊花茶是将绿茶和菊花混合而成的茶叶，法国黑人所钟爱的茶叶品种之一就是这款，具有清新的口感和淡淡的菊花香味。它是法国南部地区非常受欢迎的饮料。"
        },
        {
            ItemImg: "https://message.biliimg.com/bfs/im/7d282e939fb5505e22dd5c8682fdfb6dd2d20b90.jpg@672w_378h_1c_!web-home-common-cover.webp",
            ItemName: "薄荷茶（Thé à la Menthe）",
            ItemDescribe: "这种茶叶以薄荷为主要原料，这种茶叶在法国黑人文化中拥有很高的地位。这款茶口感清凉，适合作为清口解暑饮品。制作方法为将薄荷叶放入茶杯中，加入开水，泡制5-10分钟即可饮用。"
        },
        {
            ItemImg: "https://message.biliimg.com/bfs/im/cc5abd665f69ef9b402b46b3c842694357e0ebe4.jpg@672w_378h_1c_!web-home-common-cover.webp",
            ItemName: "香橙皮红茶（Thé noir à la peau d'orange）",
            ItemDescribe: "这是一种混合了红茶和香橙皮的茶叶，在法国黑人社区中，这种茶叶深受欢迎。。它具有柑橘和茶的香味，可以作为下午茶来享用，有一种清新的口感。"
        },
        {
            ItemImg: "https://message.biliimg.com/bfs/im/008cf84dd00ef78d295eeb29c682f37fe201446e.jpg@672w_378h_1c_!web-home-common-cover.webp",
            ItemName: "伯爵茶（Thé Earl Grey）",
            ItemDescribe: "伯爵茶是一种混合了佛手柑皮和柠檬皮的红茶，这种茶叶被认为是法国黑人喜欢的茶叶之一，通常在下午茶时享用。伯爵茶在19世纪非常流行，据说是英国首相格雷伯爵（Earl Grey）命名的。"
        },
        {
            ItemImg: "https://message.biliimg.com/bfs/im/30849bc62832bda9ea567e09b180422adeec16e0.jpg@672w_378h_1c_!web-home-common-cover.webp",
            ItemName: "芒果乌龙茶（Thé Oolong à la mangue）",
            ItemDescribe: "这种茶叶是一种混合了乌龙茶和芒果的茶，法国黑人喜欢的茶叶品种之一就是这个。它通常具有芒果的甜味和乌龙茶的清新口感。"
        },
        {
            ItemImg: "https://message.biliimg.com/bfs/im/b056183195172eaf15bb64b2f5a5b388c03c06a8.png@672w_378h_1c_!web-home-common-cover.webp",
            ItemName: "柠檬绿茶（Thé Vert au citron）",
            ItemDescribe: "这种茶叶是一种混合了绿茶和柠檬皮的茶，法国黑人中非常流行的一种茶叶就是这个。它具有清新的口感和柠檬的酸味。"
        },
        {
            ItemImg: "https://message.biliimg.com/bfs/im/2c0d7be1440d09e78a5cfb25d552b243cdacf2a4.jpg@672w_378h_1c_!web-home-common-cover.webp",
            ItemName: "茉莉香龙井（Thé vert au jasmin de Longjing）",
            ItemDescribe: "这种茶叶是将茉莉花和中国龙井绿茶混合而成，法国黑人喜爱的茶叶中，这个品种非常受欢迎，具有清新的口感和强烈的茉莉香气。它是中国最受欢迎的茶叶之一，也在法国逐渐流行起来。"
        }
    ]
    const [isAlertModalShowed, setAlertModalShowed] = useState(false)
    const [Account, setAccount] = useState("")
    const [Password, setPassword] = useState("")
    const [InviteCode, setInviteCode] = useState("")
    return (
        <>
            <div className="flex justify-start h-full flex-wrap gap-4">
                {Items.map((tool) => (
                        <div key="tool.ItemName"
                             className="card  flex-shrink flex-grow w-36 sm:w-72 sm:flex-grow-0 bg-base-100  ">
                            <figure>
                                <div className=" relative  overflow-hidden aspect-w-16 aspect-h-10 w-full">
                                    <Image fill
                                           loader={ItemImgLoader}
                                           src={tool.ItemImg}
                                    />
                                </div>
                            </figure>
                            <div className="card-body p-4 sm:p-8 ">
                                <div className="sm:text-xl font-bold text-center line-clamp-2">{tool.ItemName}</div>
                                <div className="line-clamp-4 sm:text-center">{tool.ItemDescribe}</div>
                                <div className="card-actions justify-center ">
                                    <button onClick={()=>{setAlertModalShowed(true)}} className="btn btn-secondary ">立即抢购
                                    </button>
                                </div>
                            </div>
                        </div>

                    )
                )
                }
            </div>
            <input onChange={(e) => {
                setAlertModalShowed(e.target.checked)
            }} checked={isAlertModalShowed} type="checkbox" id="AlertModal" className="modal-toggle"/>
            <label htmlFor="AlertModal" className="modal cursor-pointer text-center">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">购买法国茶叶需要登录哟~</h3>
                    <p className="py-4 flex flex-wrap gap-4 justify-center">
                        <input type="text" value={Account} onChange={e => {
                            setAccount(decodeURIComponent(e.currentTarget.value));
                        }} placeholder="账号" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="password" value={Password} onChange={e => {
                            setPassword(decodeURIComponent(e.currentTarget.value));
                        }} placeholder="密码" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" value={InviteCode} onChange={e => {
                            setInviteCode(decodeURIComponent(e.currentTarget.value));
                        }} placeholder="邀请码（没有邀请码还想喝法国茶？）" className="input input-bordered input-accent w-full max-w-xs" />
                    </p>
                    <button onClick={()=>{
                        alert("账号："+Account+"密码："+Password+"邀请码："+InviteCode)
                    }} className="btn btn-accent">登录法国茶叶协会</button>
                </label>
            </label>
        </>
    )
}

Page.getLayout = function getLayout(page) {

    return (
        <Layout_sticky_navbar page={page} MenuItems={
            <>
                <div className="left_content  sm:static sm:w-72">
                <div className="card  bg-base-100 shadow-xl">
                    <figure>
                        <div className=" relative  overflow-hidden aspect-w-16 aspect-h-10 w-full">
                            <Image fill
                                   loader={ItemImgLoader}
                                   src={"https://message.biliimg.com/bfs/im/171a9763762e2cf2ad6ab8a6d6e3a597985ee354.jpg"}
                            />
                        </div>
                    </figure>
                    <div className="card-body">
                        <div className="sm:text-xl font-bold text-center line-clamp-2">法国茶叶</div>
                        <div className="line-clamp-6 sm:text-center">法国黑人茶叶文化的历史可以追溯到19世纪初期的法国殖民地时期。当时，法国在非洲拥有多个殖民地，其中包括当今的马里、塞内加尔、科特迪瓦等国家。在这些殖民地，当地居民和奴隶开始种植茶叶，为法国提供了大量的茶叶产量。

                            随着茶叶在法国的普及，法国黑人茶文化逐渐形成。在法国的一些城市，例如巴黎和马赛，出现了许多非洲裔茶商店，这些店铺的主人都是非洲人，他们将自己的文化带到了法国，成为了法国茶文化的一部分。

                            在这些茶商店里，人们可以品尝到非洲地区特有的茶叶，例如薄荷茶、苏丹红茶等。这些茶叶以其独特的口味和浓郁的香气吸引了众多消费者。除了茶叶，这些茶商店还提供了一些非洲传统美食和手工艺品，让人们更好地了解和欣赏非洲文化。

                            随着时间的推移，法国黑人茶文化逐渐走向了多元化和国际化。如今，在法国的许多城市，人们可以享受到来自世界各地的茶叶和文化，这其中也包括非洲茶文化的精髓。</div>

                    </div>
                </div>
                <a href="https://github.com/JonyanDunh/DeginxWeb" target="_blank"
                   rel="noreferrer"
                   className=" card mt-4 bg-base-100 p-4 flex flex-row">
                    <div className="avatar ">
                        <div className="w-24 rounded-box">
                            <img
                                src="https://i0.hdslb.com/bfs/live/show_cover/2251b19b90aac7e10ce04d8cd1be9279925db993.jpg"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <p className="ml-3">
                                <span className="text-primary font-semibold">JonyanDunh/</span>
                                <br></br>
                                <span className="text-secondary font-semibold">DeginxWeb</span>
                            </p>
                        </div>
                        <div className="flex flex-row">
                            <p className="ml-3 text-xs">
                                About
                                The official website of DEGINX rebuilds with React...
                            </p>
                        </div>
                    </div>

                </a>
                    <div className="card bg-base-100  mt-4 p-4 ">
                        <div className=" text-lg font-bold ">打赏支持作者 :)</div>
                        <div
                            className="text-sm  italic ">您的支持是对我最大的鼓励！UP主将继续努力发掘更多有意思的东西给大家~
                        </div>
                        <div className="grid grid-cols-2 pt-4 gap-4">
                            <div>
                                <div className="avatar justify-center">
                                    <div className="card">
                                        <img
                                            src="https://message.biliimg.com/bfs/im/5c22fa147a19971554e1bff9f7108958030dceab.png"/>
                                    </div>
                                </div>
                                <div className="text-center font-semibold ">微信</div>
                            </div>
                            <div>
                                <div className="avatar justify-center">
                                    <div className="card">
                                        <img
                                            src="https://message.biliimg.com/bfs/im/703dec6333b348170b705355be9eb8b52654e236.png"/>
                                    </div>
                                </div>
                                <div className="text-center font-semibold ">支付宝</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }/>
    )
}