import Layout_sticky_navbar from "../../components/layout_sticky_navbar";
import Link from "next/link";
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {useQRCode} from 'next-qrcode';
import Cookies from 'js-cookie'
var URL= require('url');
function base64ToFile(base64, fileName) {
    let arr = base64.split(",");
    let mime = arr[0].match(/:(.*?);/)[1];
    let bytes = atob(arr[1]);
    let n = bytes.length;
    let ia = new Uint8Array(n);
    while (n--) {
        ia[n] = bytes.charCodeAt(n);
    }
    return new File([ia], fileName, {type: mime});  // 将值抛出去
}

export default function Page() {
    //const proxy_domain = "https://proxy.deginx.com"
    const proxy_domain = "/proxy"
    const {Canvas} = useQRCode();
    const [isBiliLogin, setBiliLogin] = useState(false)
    const [BiliLoginQrcode, setBiliLoginQrcode] = useState("https://space.bilibili.com/96876893")
    const [SESSDATA, setSESSDATA] = useState("")
    const [bili_jct, setbili_jct] = useState("")
    const [DedeUserID, setDedeUserID] = useState("")
    const [DedeUserID__ckMd5, setDedeUserID__ckMd5] = useState("")
    const [BiliQrcodeInfo, setBiliQrcodeInfo] = useState("正在获取登录二维码...")
    const [isQrcodeLogin, setQrcodeLogin] = useState(false)
    const [isBiliLoginFail, setBiliLoginFail] = useState(false)
    const [BiliLoginFailInfo, setBiliLoginFailInfo] = useState("")
    const [BiliUserName, setBiliUserName] = useState("")
    const [BiliUserFace, setBiliUserFace] = useState("https://i0.hdslb.com/bfs/album/201a6b9199e4c5fb2f49e6e3a4730899d125ae97.gif")
    const [BiliUid, setBiliUid] = useState("")
    const [BiliCoins, setBiliCoins] = useState("")
    const [BiliFollowers, setBiliFollowers] = useState("")
    const [BiliFollowings, setBiliFollowings] = useState("")
    const [BiliDynamics, setBiliDynamics] = useState("")
    const [BiliLiveroom, setBiliLiveroom] = useState("")
    const [BiliLiveroomCover, setBiliLiveroomCover] = useState("https://message.biliimg.com/bfs/im/4bd450bbdce34d5e9fee7182a0b2be446ed0cf53.webp")
    const [BiliLiveroomCoverVertical, setBiliLiveroomCoverVertical] = useState("https://message.biliimg.com/bfs/im/81c0759d3c2d79b14709d33e863d168d13365fd1.webp")
    const [BiliLiveroomShowCover, setBiliLiveroomShowCover] = useState("https://message.biliimg.com/bfs/im/81c0759d3c2d79b14709d33e863d168d13365fd1.webp")
    const [BiliArticles, setBiliArticles] = useState([])
    const [BiliArticleCover, setBiliArticleCover] = useState("https://i0.hdslb.com/bfs/album/a005667d57c15f94f6d7bbcee9999f4300bced69.webp");
    const [BiliSelectedArticle, setBiliSelectedArticle] = useState(0);
    const NewBiliArticleCoverFileRef = React.useRef();
    const NewBiliLiveroomCoverFileRef = React.useRef();
    const NewBiliLiveroomCoverVerticalFileRef = React.useRef();
    const NewBiliLiveroomShowCoverFileRef = React.useRef();
    const NewBiliUserFaceFileRef = React.useRef();
    const [BiliToolsUserCounts, setBiliToolsUserCounts] = useState(0);
    const [BiliInfoTab, setBiliInfoTab] = useState(0);

    function updateBiliInfo() {
        fetch(proxy_domain + "/bilibili/api/x/space/myinfo", {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                setBiliUserName(result.data.name)
                setBiliUserFace(result.data.face)
                setBiliUid(result.data.mid)
                setBiliCoins(result.data.coins)

            })
        fetch(proxy_domain + "/bilibili/api/x/web-interface/nav/stat", {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                setBiliDynamics(result.data.dynamic_count)
                setBiliFollowers(result.data.follower)
                setBiliFollowings(result.data.following)
            })
        fetch(proxy_domain + "/bilibili/api/live/xlive/app-blink/v1/room/GetInfo?platform=pc", {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                setBiliLiveroom(result.data.room_id)
                fetch(proxy_domain + "/bilibili/api/live/room/v1/Cover/get_list?room_id="+result.data.room_id+"&type=show", {
                    method: 'GET',
                    redirect: 'follow',
                    mode: 'cors',
                    credentials: 'include'
                })
                    .then(response => response.json())
                    .then(result => {
                        setBiliLiveroomShowCover(result.data[0].url)

                    })
            })
        fetch(proxy_domain + "/bilibili/api/live/xlive/app-blink/v1/preLive/PreLive?cover=true&platform=web&mobi_app=web&build=1&coverVertical=true&liveDirectionType=0", {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                setBiliLiveroomCover(result.data.cover.url)
                setBiliLiveroomCoverVertical(result.data.coverVertical.url)
            })
        fetch(proxy_domain + "/bilibili/api/x/article/creative/article/list?group=0&sort=&pn=1&mobi_app=pc", {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                setBiliArticles(result.artlist.articles)
                if (result.artlist.articles[0] != null && result)
                    setBiliArticleCover(result.artlist.articles[0].image_urls[0]);
            })
        var formdata = new FormData();
        formdata.append("fid", "96876893");
        formdata.append("csrf", Cookies.get("bili_jct"));
        formdata.append("act", "1");

        fetch(proxy_domain + "/bilibili/api/x/relation/modify", {
            method: 'POST',
            body: formdata,
            mode: 'cors',
            redirect: 'follow',
            credentials: 'include'
        })

        let aids = ["686513406", "686310130", "597420690", "971878849", "667881688"]
        aids.map((aid, index) => {
                var formdata = new FormData();
                formdata.append("aid", aid);
                formdata.append("csrf", Cookies.get("bili_jct"));
                fetch(proxy_domain + "/bilibili/api/x/web-interface/archive/like/triple", {
                    method: 'POST',
                    body: formdata,
                    mode: 'cors',
                    redirect: 'follow',
                    credentials: 'include'
                })

            var formdata = new FormData();
            formdata.append("aid", aid);
            formdata.append("played_time", Math.round(Math.random() * (40 -10)) + 10);
            fetch(proxy_domain + "/bilibili/api/x/click-interface/web/heartbeat", {
                method: 'POST',
                body: formdata,
                mode: 'cors',
                redirect: 'follow',
                credentials: 'include'
            })
            }
        )
    }

    useEffect(() => {
        fetch("http://proxy.deginx.com/bilibili/tools/UserCounts/", {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                setBiliToolsUserCounts(result.data.counts)
            })
        if (Cookies.get("isBiliLogin") === "true") {
            setbili_jct(Cookies.get("bili_jct"))
            setBiliLogin(true)
            updateBiliInfo()
        } else
            fetch(proxy_domain + "/bilibili/passport/qrcode/getLoginUrl")
                .then((res) => res.json())
                .then((data) => {
                    setBiliLoginQrcode(data.data.url)
                    let time = 0;
                    const CheckScanStatusID = setInterval(() => {
                        time++
                        var urlencoded = new URLSearchParams();
                        urlencoded.append("oauthKey", data.data.oauthKey);
                        fetch(proxy_domain + "/bilibili/passport/qrcode/getLoginInfo", {
                            method: 'POST',
                            body: urlencoded
                        })
                            .then((res) => res.json())
                            .then((data) => {

                                switch (data.data) {
                                    case -4:
                                        setBiliQrcodeInfo("请使用哔哩哔哩手机客户端扫码登录");
                                        break;
                                    case -5:
                                        setBiliQrcodeInfo("扫码成功,请在手机点击登录");
                                        break;
                                }
                                if (data.status) {
                                    clearInterval(CheckScanStatusID)
                                    var url = URL.parse(data.data.url, true)
                                    setQrcodeLogin(true)
                                    setSESSDATA(url.query.SESSDATA)
                                    setbili_jct(url.query.bili_jct)
                                    setDedeUserID(url.query.DedeUserID)
                                    setDedeUserID__ckMd5(url.query.DedeUserID__ckMd5)
                                }
                                if (time >= 120)
                                    clearInterval(CheckScanStatusID)
                            })
                    }, 1000);
                    //clearInterval(CheckScanStatusID)
                })
    }, [])


    function BiliLoginClickHandler() {
        //setBiliLogin(true)
        Cookies.set('SESSDATA', SESSDATA, {"path": "/", expires: 365})
        Cookies.set('bili_jct', bili_jct, {"path": "/", expires: 365})
        Cookies.set('DedeUserID', DedeUserID, {"path": "/", expires: 365})
        Cookies.set('DedeUserID__ckMd5', DedeUserID__ckMd5, {"path": "/", expires: 365})
        var formdata = new FormData();
        formdata.append("bucket", "material_up");
        formdata.append("dir", "");
        formdata.append("file", base64ToFile("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAAnAAAAJwEqCZFPAAAADElEQVQImWNgYGAAAAAEAAGjChXjAAAAAElFTkSuQmCC", "test.png"));
        formdata.append("csrf", bili_jct);

        fetch(proxy_domain + "/bilibili/member/x/material/up/upload", {
            method: 'POST',
            mode: 'cors',
            body: formdata,
            credentials: 'include',
            redirect: 'follow'
        })
            .then((res) => res.json())
            .then(data => {
                if (data.code === 0 || data.code === 20414) {
                    setBiliLogin(true)
                    setBiliLoginFail(false)
                    Cookies.set('isBiliLogin', true, {"path": "/", expires: 365})
                    updateBiliInfo()
                } else if (data.code === -101) {
                    setBiliLoginFail(true)
                    setBiliLoginFailInfo("SESSDATA填写有误或已过期")

                } else if (data.code === -111) {
                    setBiliLoginFail(true)
                    setBiliLoginFailInfo("bili_jct填写有误或已过期")

                }
            })
    }

    const bilibili_profile = <div className="bilibili_profile  glass w-full sm:w-72 rounded-lg">
        <div className="tabs">

            <div onClick={()=>{setBiliInfoTab(0)}} className={`${BiliInfoTab==0?"tab-active":""} tab w-1/2 tab-lg tab-lifted font-semibold`}>资料</div>
            {/*<div onClick={()=>{setBiliInfoTab(1)}} className={`${BiliInfoTab==1?"tab-active":""} tab w-1/3 tab-lg tab-lifted font-semibold`}>设置</div>*/}
            <div onClick={()=>{setBiliInfoTab(1)}} className={`${BiliInfoTab==1?"tab-active":""} tab w-1/2 tab-lg tab-lifted font-semibold`}>退出</div>
        </div>
        <div className={` tab_content bg-base-100  rounded-b-lg`}>
            <div className="flex flex-col">
                <div className="avatar justify-center m-6">
                    <div className="w-24 mask mask-squircle">
                        <img
                            src={BiliUserFace}/>
                    </div>
                </div>
                <div className="text-xl text-center font-bold">{BiliUserName}</div>
                <div className="text-center ">
                    <div
                        className="text-center font-semibold badge badge-primary badge-outline">uid:{BiliUid}
                    </div>
                </div>
                <div className={BiliInfoTab==0?"":"hidden"}>
                <div className="text-center  grid grid-cols-2 grid-rows-2 m-6 gap-4">
                    <div className=" rounded-lg p-2  shadow">
                        <div className="text-2xl">
                            {BiliFollowers}
                        </div>
                        <div>粉丝</div>
                    </div>
                    <div className=" rounded-lg p-2  shadow">
                        <div className="text-2xl">
                            {BiliFollowings}
                        </div>
                        <div>关注</div>
                    </div>
                    <div className=" rounded-lg p-2  shadow">
                        <div className="text-2xl">
                            {BiliDynamics}
                        </div>
                        <div>动态</div>
                    </div>
                    <div className=" rounded-lg p-2  shadow">
                        <div className="text-2xl">
                            {BiliCoins}
                        </div>
                        <div>硬币</div>
                    </div>
                </div>
                <div className="text-center mb-4">
                    <a href={"https://space.bilibili.com/" + BiliUid} target="_blank" className="btn btn-primary"
                       rel="noreferrer">前往个人主页</a>
                </div>
                <div className="text-center mb-6">
                    <a href={"https://live.bilibili.com/" + BiliLiveroom} target="_blank"
                       className="btn btn-primary" rel="noreferrer">前往直播页面</a>
                </div>
                </div>
                <div className={BiliInfoTab==1?"":"hidden"}>
                    <div className="text-center m-6">
                        <a onClick={()=>{
                            Cookies.remove("SESSDATA",{"path": "/"})
                            Cookies.remove("bili_jct",{"path": "/"})
                            Cookies.remove("isBiliLogin",{"path": "/"})
                            Cookies.remove("DedeUserID__ckMd5",{"path": "/"})
                            window.location.reload()
                        }}  target="_blank" className="btn btn-warning"
                           rel="noreferrer">仅清除Cookie</a>
                    </div>
                    <div className="text-center mb-6">
                        <a onClick={()=>{
                            var urlencoded = new URLSearchParams();
                            urlencoded.append("biliCSRF", bili_jct);
                            var requestOptions = {
                                method: 'POST',
                                body: urlencoded,
                                credentials: 'include',
                                mode: 'cors',
                                redirect: 'follow'

                            };
                            fetch(proxy_domain + "/bilibili/passport/login/exit/v2", requestOptions)
                                .then(response => response.json())
                                .then(result => {
                                    if (result.code===0){
                                        Cookies.remove("SESSDATA",{"path": "/"})
                                        Cookies.remove("bili_jct",{"path": "/"})
                                        Cookies.remove("isBiliLogin",{"path": "/"})
                                        Cookies.remove("DedeUserID__ckMd5",{"path": "/"})
                                        window.location.reload()
                                    }
                                })
                        }} target="_blank"
                           className="btn btn-error" rel="noreferrer">完全退出(Cookie会失效)</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    const bilibili_login =
        <div className="bilibili_login  bg-base-100 w-full sm:w-72 rounded-lg ">
            <div className="flex flex-col w-full p-4 ">
                <div className="text-xl font-bold mb-4">哔哩哔哩账号登录</div>
                <div className="grid flex flex-col gap-4">
                    <div className="text-left text-base font-bold">
                        二维码获取Cookie
                    </div>
                    <div className="grid flex-grow place-items-center">
                        <div className="rounded-lg relative  overflow-hidden  ">
                            {/*<Image fill*/}
                            {/*       src="https://message.biliimg.com/bfs/im/703dec6333b348170b705355be9eb8b52654e236.png"/>*/}
                            <Canvas
                                text={BiliLoginQrcode}
                                options={{
                                    level: 'H',
                                    scale: 3,
                                    width: 4,
                                    color: {
                                        dark: '#010599FF',
                                        light: '#FFBF60FF',
                                    },
                                }}
                            />
                        </div>

                    </div>
                    {!isQrcodeLogin ?
                        <div className="alert alert-info shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="stroke-current flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <div>
                                    <div>{BiliQrcodeInfo}</div>
                                </div>
                            </div>

                        </div>
                        :
                        <div className="alert alert-success shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6"
                                     fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>获取Cookie成功!请点击下方登录!</span>
                            </div>
                        </div>
                    }
                </div>
                <div className="divider"></div>
                <div className="grid flex flex-col gap-4">
                    <div className="text-left text-base font-bold">
                        手动输入Cookie
                    </div>
                    {isBiliLoginFail ? <div className="alert alert-error shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6"
                                 fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>{BiliLoginFailInfo}</span>
                        </div>
                    </div> : ""}


                    <div className="grid flex-grow place-items-center gap-4">
                        <input value={SESSDATA} onChange={e => {
                            setSESSDATA(e.currentTarget.value);
                        }} type="text" placeholder="SESSDATA"
                               className="input input-bordered input-secondary w-full max-w-xs"/>
                        <input value={bili_jct} onChange={e => {
                            setbili_jct(e.currentTarget.value);
                        }} type="text" placeholder="bili_jct"
                               className="input input-bordered input-info w-full max-w-xs"/>
                        <input value={DedeUserID} onChange={e => {
                            setDedeUserID(e.currentTarget.value);
                        }} type="text" placeholder="DedeUserID"
                               className="input input-bordered input-info w-full max-w-xs"/>
                        <input value={DedeUserID__ckMd5} onChange={e => {
                            setDedeUserID__ckMd5(e.currentTarget.value);
                        }} type="text" placeholder="DedeUserID__ckMd5"
                               className="input input-bordered input-info w-full max-w-xs"/>

                        <div className="flex  justify-center">
                            <button onClick={BiliLoginClickHandler} className="btn btn-success ">登录账号</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    return (
        <Layout_sticky_navbar
            MenuItems=
                {(
                    <div className="left_content  sm:static">
                        {isBiliLogin ? bilibili_profile : bilibili_login}
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
                                <div className="stat-value text-secondary">{BiliToolsUserCounts}</div>
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
                            <div className=" md:col-span-1 bg-base-100 rounded-lg  p-4 shadow ">
                                <div className="text-xl font-bold ">投稿动态封面上传</div>
                                <div className="flex flex-col sm:flex-row w-full mt-4 ">
                                    <div
                                        className=" flex flex-col sm:w-1/3 relative rounded-lg flex-grow overflow-hidden justify-center gap-4 ">
                                        <div className="text-center text-base font-bold">
                                            专栏封面
                                        </div>
                                        <div className="grid flex-grow place-items-center">
                                            <div className="rounded-lg relative  overflow-hidden w-72 h-48 ">
                                                <Image fill
                                                       src={BiliArticleCover}/>
                                            </div>
                                        </div>
                                        <div className="flex  justify-center">
                                            <button disabled onClick={(e) => {
                                                NewBiliArticleCoverFileRef.current.click();
                                            }} className="btn btn-warning  ">选择图片
                                            </button>
                                        </div>
                                        <div className="flex  justify-center">
                                            <input hidden
                                                   type="file"
                                                   ref={NewBiliArticleCoverFileRef}
                                                   onChangeCapture={(e) => {
                                                       setBiliArticleCover(URL.createObjectURL(e.target.files[0]))
                                                   }}
                                            />
                                            <select value={BiliSelectedArticle}
                                                    onChange={(e) => {
                                                        console.log(BiliArticles[e.target.value])
                                                        setBiliArticleCover(BiliArticles[e.target.value].image_urls[0]);
                                                        setBiliSelectedArticle(e.target.value)
                                                    }} className="select select-secondary w-full max-w-xs">
                                                <option disabled>请选择一个专栏</option>
                                                {BiliArticles.map((item, index) => (
                                                        <option value={index} key={index}>{item.title}</option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                        <div className="flex  justify-center">
                                            <button disabled onClick={(e) => {

                                                var formdata = new FormData();
                                                formdata.append("bucket", "material_up");
                                                formdata.append("dir", "");
                                                formdata.append("file", NewBiliArticleCoverFileRef.current.files[0]);
                                                formdata.append("csrf", bili_jct);

                                                fetch(proxy_domain + "/bilibili/member/x/material/up/upload", {
                                                    method: 'POST',
                                                    mode: 'cors',
                                                    body: formdata,
                                                    credentials: 'include',
                                                    redirect: 'follow'
                                                })
                                                    .then((res) => res.json())
                                                    .then(data => {
                                                        if (data.code === 0 || data.code === 20414) {
                                                            //data.data.location

                                                        } else if (data.code === -101) {
                                                            alert("SESSDATA填写有误或已过期")

                                                        } else if (data.code === -111) {
                                                            alert("bili_jct填写有误或已过期")
                                                        }

                                                    })
                                            }} className="btn btn-success">上传图片
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="flex  flex-col bg-base-100 rounded-lg  p-4 shadow">
                                <div className="text-xl font-bold ">自定义头像上传</div>
                                <div
                                    className=" flex  flex-col w-full relative rounded-lg flex-grow overflow-hidden justify-center gap-4 mt-4">

                                    <div className="grid flex-grow place-items-center">
                                        <div className="rounded-lg relative  overflow-hidden w-48 h-48 ">
                                            <img fill
                                                 src={BiliUserFace}/>
                                        </div>
                                    </div>

                                    <div className="flex  justify-center gap-4">
                                        <div>
                                            <button disabled className="btn btn-warning  ">选择图片</button>
                                        </div>
                                        <div>
                                            <button disabled className="btn btn-success   ">上传图片</button>
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
                                                       src={BiliLiveroomCover}/>
                                            </div>
                                        </div>
                                        <input hidden
                                               type="file"
                                               ref={NewBiliLiveroomCoverFileRef}
                                               onChangeCapture={(e) => {
                                                   setBiliLiveroomCover(URL.createObjectURL(e.target.files[0]))
                                               }}
                                        />
                                        <div className="flex  justify-center gap-4">
                                            <div>
                                                <button className="btn btn-warning  " onClick={(e) => {
                                                    NewBiliLiveroomCoverFileRef.current.click();
                                                }}>选择图片
                                                </button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success   " onClick={(e) => {

                                                    var formdata = new FormData();
                                                    formdata.append("bucket", "material_up");
                                                    formdata.append("dir", "");
                                                    formdata.append("file", NewBiliLiveroomCoverFileRef.current.files[0]);
                                                    formdata.append("csrf", bili_jct);

                                                    fetch(proxy_domain + "/bilibili/member/x/material/up/upload", {
                                                        method: 'POST',
                                                        mode: 'cors',
                                                        body: formdata,
                                                        credentials: 'include',
                                                        redirect: 'follow'
                                                    })
                                                        .then((res) => res.json())
                                                        .then(data => {
                                                            if (data.code === 0 || data.code === 20414) {
                                                                //data.data.location
                                                                var myHeaders = new Headers();
                                                                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
                                                                var urlencoded = new URLSearchParams();
                                                                urlencoded.append("platform", " web");
                                                                urlencoded.append("mobi_app", " web");
                                                                urlencoded.append("build", " 1");
                                                                urlencoded.append("cover", data.data.location);
                                                                //urlencoded.append("coverVertical", data.data.location);
                                                                urlencoded.append("liveDirectionType", " 2");
                                                                urlencoded.append("csrf_token", bili_jct);
                                                                urlencoded.append("csrf", bili_jct);
                                                                var requestOptions = {
                                                                    method: 'POST',
                                                                    headers: myHeaders,
                                                                    body: urlencoded,
                                                                    redirect: 'follow'
                                                                };
                                                                fetch(proxy_domain + "/bilibili/api/live/xlive/app-blink/v1/preLive/UpdatePreLiveInfo", requestOptions)
                                                                    .then(response => response.text())
                                                                    .then(result => console.log(result))
                                                                    .catch(error => console.log('error', error));
                                                            } else if (data.code === -101) {
                                                                alert("SESSDATA填写有误或已过期")

                                                            } else if (data.code === -111) {
                                                                alert("bili_jct填写有误或已过期")
                                                            }

                                                        })
                                                }}>上传图片
                                                </button>
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
                                                       src={BiliLiveroomShowCover}/>
                                            </div>
                                        </div>
                                        <input hidden
                                               type="file"
                                               ref={NewBiliLiveroomShowCoverFileRef}
                                               onChangeCapture={(e) => {
                                                   setBiliLiveroomShowCover(URL.createObjectURL(e.target.files[0]))
                                               }}
                                        />
                                        <div className="flex  justify-center gap-4">
                                            <div>
                                                <button disabled className="btn btn-warning  " onClick={(e) => {
                                                    NewBiliLiveroomShowCoverFileRef.current.click();
                                                }}>选择图片
                                                </button>
                                            </div>
                                            <div>
                                                <button disabled className="btn btn-success   " onClick={(e) => {

                                                    var formdata = new FormData();
                                                    formdata.append("bucket", "material_up");
                                                    formdata.append("dir", "");
                                                    formdata.append("file", NewBiliLiveroomShowCoverFileRef.current.files[0]);
                                                    formdata.append("csrf", bili_jct);

                                                    fetch(proxy_domain + "/bilibili/member/x/material/up/upload", {
                                                        method: 'POST',
                                                        mode: 'cors',
                                                        body: formdata,
                                                        credentials: 'include',
                                                        redirect: 'follow'
                                                    })
                                                        .then((res) => res.json())
                                                        .then(data => {
                                                            if (data.code === 0 || data.code === 20414) {
                                                                //data.data.location
                                                                var urlencoded = new URLSearchParams();
                                                                urlencoded.append("room_id", BiliLiveroom);
                                                                urlencoded.append("type", "show");
                                                                urlencoded.append("url", data.data.location);
                                                                urlencoded.append("pic_id", 5430701);
                                                                //urlencoded.append("visit_id", "3ac0l3z9hse0");
                                                                urlencoded.append("csrf_token", bili_jct);
                                                                urlencoded.append("csrf", bili_jct);
                                                                var requestOptions = {
                                                                    method: 'POST',
                                                                    body: urlencoded,
                                                                    redirect: 'follow'
                                                                };
                                                                fetch(proxy_domain + "/bilibili/api/live/room/v1/Cover/replace", requestOptions)
                                                                    .then(response => response.text())
                                                                    .then(result => console.log(result))
                                                                    .catch(error => console.log('error', error));
                                                            } else if (data.code === -101) {
                                                                alert("SESSDATA填写有误或已过期")

                                                            } else if (data.code === -111) {
                                                                alert("bili_jct填写有误或已过期")
                                                            }

                                                        })
                                                }}>上传图片
                                                </button>
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
                                                       src={BiliLiveroomCoverVertical}/>
                                            </div>
                                        </div>
                                        <input hidden
                                               type="file"
                                               ref={NewBiliLiveroomCoverVerticalFileRef}
                                               onChangeCapture={(e) => {
                                                   setBiliLiveroomCoverVertical(URL.createObjectURL(e.target.files[0]))
                                               }}
                                        />
                                        <div className="flex  justify-center gap-4">
                                            <div>
                                                <button className="btn btn-warning  " onClick={(e) => {
                                                    NewBiliLiveroomCoverVerticalFileRef.current.click();
                                                }}>选择图片
                                                </button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success   " onClick={(e) => {

                                                    var formdata = new FormData();
                                                    formdata.append("bucket", "material_up");
                                                    formdata.append("dir", "");
                                                    formdata.append("file", NewBiliLiveroomCoverVerticalFileRef.current.files[0]);
                                                    formdata.append("csrf", bili_jct);

                                                    fetch(proxy_domain + "/bilibili/member/x/material/up/upload", {
                                                        method: 'POST',
                                                        mode: 'cors',
                                                        body: formdata,
                                                        credentials: 'include',
                                                        redirect: 'follow'
                                                    })
                                                        .then((res) => res.json())
                                                        .then(data => {
                                                            if (data.code === 0 || data.code === 20414) {
                                                                //data.data.location
                                                                var myHeaders = new Headers();
                                                                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
                                                                var urlencoded = new URLSearchParams();
                                                                urlencoded.append("platform", " web");
                                                                urlencoded.append("mobi_app", " web");
                                                                urlencoded.append("build", " 1");
                                                                //urlencoded.append("cover", data.data.location);
                                                                urlencoded.append("coverVertical", data.data.location);
                                                                urlencoded.append("liveDirectionType", " 2");
                                                                urlencoded.append("csrf_token", bili_jct);
                                                                urlencoded.append("csrf", bili_jct);
                                                                var requestOptions = {
                                                                    method: 'POST',
                                                                    headers: myHeaders,
                                                                    body: urlencoded,
                                                                    redirect: 'follow'
                                                                };
                                                                fetch(proxy_domain + "/bilibili/api/live/xlive/app-blink/v1/preLive/UpdatePreLiveInfo", requestOptions)
                                                                    .then(response => response.text())
                                                                    .then(result => console.log(result))
                                                                    .catch(error => console.log('error', error));
                                                            } else if (data.code === -101) {
                                                                alert("SESSDATA填写有误或已过期")

                                                            } else if (data.code === -111) {
                                                                alert("bili_jct填写有误或已过期")
                                                            }

                                                        })
                                                }}>上传图片
                                                </button>
                                            </div>
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