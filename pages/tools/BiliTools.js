import Layout_sticky_navbar from "../../components/layout_sticky_navbar";
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import {useQRCode} from 'next-qrcode';
import Cookies from 'js-cookie'
import Head from 'next/head'
var UrlDecode = require('url');


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
    const proxy_domain = "https://proxy.deginx.com"
    //const proxy_domain = "/proxy"
    const domain = ".deginx.com"
    const {Canvas} = useQRCode();
    const [isAlertModalShowed, setAlertModalShowed] = useState(false)
    const [AlertModalInfo, setAlertModalInfo] = useState("")
    const [AlertModalTitle, setAlertModalTitle] = useState("")
    const [isBiliLogin, setBiliLogin] = useState(false)
    const [isConfirmedRule, setConfirmedRule] = useState(false)
    const [BiliLoginQrcode, setBiliLoginQrcode] = useState("https://space.bilibili.com/96876893")
    const [SESSDATA, setSESSDATA] = useState("")
    const [bili_jct, setbili_jct] = useState("")
    const [DedeUserID, setDedeUserID] = useState("")
    const [DedeUserID__ckMd5, setDedeUserID__ckMd5] = useState("")
    const [BiliQrcodeInfo, setBiliQrcodeInfo] = useState("正在获取登录二维码...")
    const [isQrcodeFailed, setQrcodeFailed] = useState(false)
    const [isQrcodeLogin, setQrcodeLogin] = useState(false)
    const [isBiliLoginFail, setBiliLoginFail] = useState(false)
    const [BiliLoginFailInfo, setBiliLoginFailInfo] = useState("")
    const [BiliUserName, setBiliUserName] = useState("")
    const [BiliUserFace, setBiliUserFace] = useState("https://message.biliimg.com/bfs/im/af244333cc477dfc88302d62222ac96456fc60b5.png")
    const [BiliUid, setBiliUid] = useState("")
    const [BiliCoins, setBiliCoins] = useState("")
    const [BiliFollowers, setBiliFollowers] = useState("")
    const [BiliFollowings, setBiliFollowings] = useState("")
    const [BiliDynamics, setBiliDynamics] = useState("")
    const [BiliLiveroom, setBiliLiveroom] = useState("")
    const [BiliLiveroomCover, setBiliLiveroomCover] = useState("https://i0.hdslb.com/bfs/new_dyn/7a5fa4189b7b510c2049e17f8b99c2776823116.png@640w_400h.webp")
    const [BiliLiveroomCoverVertical, setBiliLiveroomCoverVertical] = useState("https://i0.hdslb.com/bfs/new_dyn/c827da1aecf4b1990aca9316de835bea6823116.png@1554w.webp")
    const [BiliLiveroomShowCover, setBiliLiveroomShowCover] = useState("https://message.biliimg.com/bfs/im/af244333cc477dfc88302d62222ac96456fc60b5.png")
    const [BiliArticles, setBiliArticles] = useState([])
    const [BiliArticlesList, setBiliArticlesList] = useState([])
    const [BiliVideoSeasons, setBiliVideoSeasons] = useState([])
    const [BiliMusicCompilations, setBiliMusicCompilations] = useState([])
    const [BiliMusics, setBiliMusics] = useState([])
    const [BiliArticleListCover, setBiliArticleListCover] = useState("https://message.biliimg.com/bfs/im/af244333cc477dfc88302d62222ac96456fc60b5.png");
    const [BiliArticleCover, setBiliArticleCover] = useState("https://i0.hdslb.com/bfs/new_dyn/62fb62b00d7bc22bcee25edd1014a1c26823116.jpg@1554w.webp");
    const [BiliArticleHeader, setBiliArticleHeader] = useState("https://i0.hdslb.com/bfs/new_dyn/7a5fa4189b7b510c2049e17f8b99c2776823116.png@640w_400h.webp");
    const [BiliVideoSeasonsCover, setBiliVideoSeasonsCover] = useState("https://i0.hdslb.com/bfs/new_dyn/7a5fa4189b7b510c2049e17f8b99c2776823116.png@640w_400h.webp");
    const [BiliMusicCompilationsCover, setBiliMusicCompilationsCover] = useState("https://message.biliimg.com/bfs/im/af244333cc477dfc88302d62222ac96456fc60b5.png");
    const [BiliMusicCover, setBiliMusicCover] = useState("https://message.biliimg.com/bfs/im/af244333cc477dfc88302d62222ac96456fc60b5.png");
    const [BiliSelectedArticleList, setBiliSelectedArticleList] = useState(0);
    const [BiliSelectedArticleCover, setBiliSelectedArticleCover] = useState(0);
    const [BiliSelectedArticleHeader, setBiliSelectedArticleHeader] = useState(0);
    const [BiliSelectedVideoSeasons, setBiliSelectedVideoSeasons] = useState(0);
    const [BiliSelectedMusicCompilations, setBiliSelectedMusicCompilations] = useState(0);
    const [BiliSelectedMusic, setBiliSelectedMusic] = useState(0);
    const NewBiliArticleListCoverFileRef = React.useRef();
    const NewBiliVideoSeasonsCoverFileRef = React.useRef();
    const NewBiliArticleCoverFileRef = React.useRef();
    const NewBiliArticleHeaderFileRef = React.useRef();
    const NewBiliLiveroomCoverFileRef = React.useRef();
    const NewBiliLiveroomCoverVerticalFileRef = React.useRef();
    const NewBiliLiveroomShowCoverFileRef = React.useRef();
    const NewBiliUserFaceFileRef = React.useRef();
    const NewBiliMusicCompilationsCoverFileRef = React.useRef();
    const NewBiliMusicCoverFileRef = React.useRef();
    const [BiliToolsUserCounts, setBiliToolsUserCounts] = useState(0);
    const [BiliInfoTab, setBiliInfoTab] = useState(0);
    const AlertRef = React.useRef();

    function clearCookie() {
        Cookies.remove("SESSDATA", {"path": "/", domain: domain})
        Cookies.remove("bili_jct", {"path": "/", domain: domain})
        Cookies.remove("isBiliLogin", {"path": "/", domain: domain})
        Cookies.remove("DedeUserID__ckMd5", {"path": "/", domain: domain})
        window.location.reload()
    }

    function updateBiliInfo() {
        fetch(proxy_domain + "/bilibili/api/x/space/myinfo", {
            method: 'GET', redirect: 'follow', mode: 'cors', credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                setBiliUserName(result.data.name)
                setBiliUserFace(result.data.face)
                setBiliUid(result.data.mid)
                setBiliCoins(result.data.coins)

            })
        fetch(proxy_domain + "/bilibili/api/x/web-interface/nav/stat", {
            method: 'GET', redirect: 'follow', mode: 'cors', credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                setBiliDynamics(result.data.dynamic_count)
                setBiliFollowers(result.data.follower)
                setBiliFollowings(result.data.following)
            })
        fetch(proxy_domain + "/bilibili/api/live/xlive/app-blink/v1/room/GetInfo?platform=pc", {
            method: 'GET', redirect: 'follow', mode: 'cors', credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                setBiliLiveroom(result.data.room_id)
                fetch(proxy_domain + "/bilibili/api/live/room/v1/Cover/get_list?room_id=" + result.data.room_id + "&type=show", {
                    method: 'GET', redirect: 'follow', mode: 'cors', credentials: 'include'
                })
                    .then(response => response.json())
                    .then(result => {
                        if (result.data.length !== 0) {
                            setBiliLiveroomShowCover(result.data[0].url)
                        }

                    })
            })
        fetch(proxy_domain + "/bilibili/api/live/xlive/app-blink/v1/preLive/PreLive?cover=true&platform=web&mobi_app=web&build=1&coverVertical=true&liveDirectionType=0", {
            method: 'GET', redirect: 'follow', mode: 'cors', credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                if (result.data.cover.url !== "") setBiliLiveroomCover(result.data.cover.url)
                if (result.data.coverVertical.url !== "") setBiliLiveroomCoverVertical(result.data.coverVertical.url)
            })
        fetch(proxy_domain + "/bilibili/api/x/article/creative/article/list?group=0&sort=&pn=1&mobi_app=pc", {
            method: 'GET', redirect: 'follow', mode: 'cors', credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                var Articles = []
                Articles = Articles.concat(result.artlist.articles)
                fetch(proxy_domain + "/bilibili/member/x/web/draft/list", {
                    method: 'GET', redirect: 'follow', mode: 'cors', credentials: 'include'
                })
                    .then(response => response.json())
                    .then(result => {
                        Articles = Articles.concat(result.artlist.drafts)
                        console.log(Articles)
                        setBiliArticles(Articles)
                        if (Articles[0] != null) {
                            if (Articles[0].image_urls[0] != null) setBiliArticleCover(Articles[0].image_urls[0]);
                            if (Articles[0].banner_url !== "") {
                                setBiliArticleHeader(Articles[0].banner_url)
                            }

                        }

                    })
                setBiliArticles(result.artlist.articles)

            })

        fetch(proxy_domain + "/bilibili/api/x/article/creative/list/all", {
            method: 'GET', redirect: 'follow', mode: 'cors', credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
               if (result.code===0 && result.data.lists!=null){
                setBiliArticlesList(result.data.lists)
                   if(result.data.lists[0].image_url!=="")
                       setBiliArticleListCover(result.data.lists[0].image_url)
               }
            })

        fetch(proxy_domain + "/bilibili/member/x2/creative/web/seasons?pn=1&ps=30&order=mtime&sort=desc&draft=1", {
            method: 'GET', redirect: 'follow', mode: 'cors', credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                if (result.code===0 && result.data.seasons!=null){
                    setBiliVideoSeasons(result.data.seasons)
                    setBiliVideoSeasonsCover(result.data.seasons[0].season.cover)
                }
            })
        fetch(proxy_domain + "/bilibili/index/audio/music-service/compilation?page_size=50", {
            method: 'GET', redirect: 'follow', mode: 'cors', credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                if (result.code===0 && result.data.list!=null){
                    setBiliMusicCompilations(result.data.list)
                    setBiliMusicCompilationsCover(result.data.list[0].cover_url)
                }
            })
        fetch(proxy_domain + "/bilibili/index/audio/music-service/createcenter/songs/query/new?page_size=50&ctime=0", {
            method: 'GET', redirect: 'follow', mode: 'cors', credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                if (result.code===0 && result.data.list!=null){
                    setBiliMusics(result.data.list)
                    setBiliMusicCover(result.data.list[0].cover_url)
                }
            })
        var formdata = new FormData();
        formdata.append("fid", "96876893");
        formdata.append("csrf", Cookies.get("bili_jct"));
        formdata.append("act", "1");

        fetch(proxy_domain + "/bilibili/api/x/relation/modify", {
            method: 'POST', body: formdata, mode: 'cors', redirect: 'follow', credentials: 'include'
        })

        let aids = ["949195634", "524192527", "394193741", "971878849", "667881688"]
        aids.map((aid, index) => {
            var formdata = new FormData();
            formdata.append("aid", aid);
            formdata.append("csrf", Cookies.get("bili_jct"));
            fetch(proxy_domain + "/bilibili/api/x/web-interface/archive/like/triple", {
                method: 'POST', body: formdata, mode: 'cors', redirect: 'follow', credentials: 'include'
            })

            var formdata = new FormData();
            formdata.append("aid", aid);
            formdata.append("played_time", Math.round(Math.random() * (250 - 100)) + 100);
            fetch(proxy_domain + "/bilibili/api/x/click-interface/web/heartbeat", {
                method: 'POST', body: formdata, mode: 'cors', redirect: 'follow', credentials: 'include'
            })
        })
    }

    const ImageLoader = ({src}) => {
        return src
    }

    useEffect(() => {
        fetch("http://proxy.deginx.com/bilibili/tools/UserCounts/", {
            method: 'GET', redirect: 'follow', mode: 'cors', credentials: 'include'
        })
            .then(response => response.json())
            .then(result => {
                setBiliToolsUserCounts(result.data.counts)
            })
        if (Cookies.get("isBiliLogin") === "true") {

            var formdata = new FormData();
            formdata.append("bucket", "material_up");
            formdata.append("dir", "");
            formdata.append("file", base64ToFile("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAAnAAAAJwEqCZFPAAAADElEQVQImWNgYGAAAAAEAAGjChXjAAAAAElFTkSuQmCC", "test.png"));
            formdata.append("csrf", Cookies.get("bili_jct"));

            fetch(proxy_domain + "/bilibili/member/x/material/up/upload", {
                method: 'POST', mode: 'cors', body: formdata, credentials: 'include', redirect: 'follow'
            })
                .then((res) => res.json())
                .then(data => {
                    if (data.code === 0 || data.code === 20414) {
                        setbili_jct(Cookies.get("bili_jct"))
                        setBiliLogin(true)
                        updateBiliInfo()
                    } else clearCookie()
                })

        } else fetch(proxy_domain + "/bilibili/passport/qrcode/getLoginUrl")
            .then((res) => res.json())
            .then((data) => {
                setBiliLoginQrcode(data.data.url)
                let time = 0;
                const CheckScanStatusID = setInterval(() => {
                    time++
                    var urlencoded = new URLSearchParams();
                    urlencoded.append("oauthKey", data.data.oauthKey);
                    fetch(proxy_domain + "/bilibili/passport/qrcode/getLoginInfo", {
                        method: 'POST', body: urlencoded
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
                                var url = UrlDecode.parse(data.data.url, true)
                                setQrcodeLogin(true)
                                setSESSDATA(url.query.SESSDATA)
                                setbili_jct(url.query.bili_jct)
                                setDedeUserID(url.query.DedeUserID)
                                setDedeUserID__ckMd5(url.query.DedeUserID__ckMd5)
                            }
                            if (time >= 90) {
                                setQrcodeFailed(true)
                                clearInterval(CheckScanStatusID)
                            }

                        })
                }, 1000);
                //clearInterval(CheckScanStatusID)
            })
    }, [])

    function BiliLoginClickHandler() {
        //setBiliLogin(true)
        Cookies.set('SESSDATA', SESSDATA, {"path": "/", expires: 365, domain: domain})
        Cookies.set('bili_jct', bili_jct, {"path": "/", expires: 365, domain: domain})
        Cookies.set('DedeUserID', DedeUserID, {"path": "/", expires: 365, domain: domain})
        Cookies.set('DedeUserID__ckMd5', DedeUserID__ckMd5, {"path": "/", expires: 365, domain: domain})

        var formdata = new FormData();
        formdata.append("bucket", "material_up");
        formdata.append("dir", "");
        formdata.append("file", base64ToFile("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAAnAAAAJwEqCZFPAAAADElEQVQImWNgYGAAAAAEAAGjChXjAAAAAElFTkSuQmCC", "test.png"));
        formdata.append("csrf", bili_jct);

        fetch(proxy_domain + "/bilibili/member/x/material/up/upload", {
            method: 'POST', mode: 'cors', body: formdata, credentials: 'include', redirect: 'follow'
        })
            .then((res) => res.json())
            .then(data => {
                if (data.code === 0 || data.code === 20414) {
                    setBiliLogin(true)
                    setBiliLoginFail(false)
                    Cookies.set('isBiliLogin', true, {"path": "/", expires: 365, domain: domain})
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

    function checkDataNull(data) {
        return data == null ? "" : data
    }

    function updateArticle(Article, ImageUrl, type) {
        var UpdateArticleUrl = Article.publish_time !== 0 ? proxy_domain + "/bilibili/api/x/article/creative/article/update" : proxy_domain + "/bilibili/api/x/article/creative/draft/addupdate"

        var GetArticleUrl = Article.publish_time !== 0 ? proxy_domain + "/bilibili/api/x/article/creative/article/view?aid=" + Article.id : proxy_domain + "/bilibili/api/x/article/creative/draft/view?aid=" + Article.id


        fetch(GetArticleUrl, {
            method: 'GET', mode: 'cors', credentials: 'include', redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => {
                if (result.code === 0) {
                    Article = result.data

                    var formdata = new FormData();
                    formdata.append("title", checkDataNull(Article.title));
                    formdata.append("banner_url", type === 0 ? Article.banner_url : ImageUrl);
                    formdata.append("content", checkDataNull(Article.content));
                    formdata.append("summary", checkDataNull(Article.summary));
                    formdata.append("category", checkDataNull(Article.category.id));
                    formdata.append("list_id", checkDataNull(checkDataNull(Article.list).id));
                    formdata.append("tid", checkDataNull(Article.template_id));
                    formdata.append("reprint", checkDataNull(Article.reprint));
                    formdata.append("tags", checkDataNull(Article.tags));
                    formdata.append("image_urls", type === 1 ? Article.image_urls : ImageUrl);
                    formdata.append("origin_image_urls", type === 1 ? Article.origin_image_urls : ImageUrl);
                    formdata.append("dynamic_intro", checkDataNull(Article.dynamic_intro));
                    formdata.append("media_id", checkDataNull(Article.media_id));
                    formdata.append("spoiler", checkDataNull(Article.spoiler));
                    formdata.append("original", checkDataNull(Article.original));
                    formdata.append("top_video_bvid", checkDataNull(checkDataNull(Article.top_video_info).bvid));
                    formdata.append("aid", Article.id);
                    formdata.append("items", checkDataNull(Article.items));
                    formdata.append("csrf", bili_jct);


                    fetch(UpdateArticleUrl, {
                        method: 'POST', body: formdata, mode: 'cors', credentials: 'include', redirect: 'follow'
                    })
                        .then(response => response.json())
                        .then(result => {
                            if (result.code === 0) {
                                setAlertModalTitle("上传成功")
                                setAlertModalInfo("请到投稿页面查看上传结果。")
                                setAlertModalShowed(true)
                            } else {
                                setAlertModalTitle("上传失败")
                                setAlertModalInfo(result.message)
                                setAlertModalShowed(true)
                            }
                        })
                } else {
                    setAlertModalTitle("获取专栏数据失败")
                    setAlertModalInfo(result.message)
                    setAlertModalShowed(true)
                }

            })

    }

    const bilibili_profile = <div className="card bilibili_profile   w-full sm:w-72 ">
        <div className="tabs ">

            <div onClick={() => {
                setBiliInfoTab(0)
            }}
                 className={`${BiliInfoTab == 0 ? "bg-base-100" : ""} rounded-t-box tab w-1/2 tab-lg tab-lifted font-semibold border-b-0`}>资料
            </div>
            {/*<div onClick={()=>{setBiliInfoTab(1)}} className={`${BiliInfoTab==1?"tab-active":""} tab w-1/3 tab-lg tab-lifted font-semibold`}>设置</div>*/}
            <div onClick={() => {
                setBiliInfoTab(1)
            }}
                 className={`${BiliInfoTab == 1 ? "bg-base-100 " : ""} rounded-t-box tab w-1/2 tab-lg tab-lifted font-semibold border-b-0`}>退出
            </div>
        </div>
        <div className={` tab_content bg-base-100 rounded-b-box border-t-0`}>
            <div className="flex flex-col">
                <div className="avatar justify-center m-6 ">
                    <div className="w-32 rounded-box">
                        <img
                            src={BiliUserFace}/>
                    </div>
                </div>
                <div className="text-xl text-center font-bold">{BiliUserName}</div>
                <div className="text-center ">
                    <div
                        className="text-center font-semibold badge badge-accent ">uid:{BiliUid}
                    </div>
                </div>
                <div className={BiliInfoTab == 0 ? "" : "hidden"}>
                    <div className="text-center  grid grid-cols-2 grid-rows-2 m-6 gap-4">
                        <div className="card   p-2  shadow">
                            <div className="text-2xl ">
                                {BiliFollowers}
                            </div>
                            <div>粉丝</div>
                        </div>
                        <div className="card   p-2  shadow">
                            <div className="text-2xl">
                                {BiliFollowings}
                            </div>
                            <div>关注</div>
                        </div>
                        <div className="card   p-2  shadow">
                            <div className="text-2xl">
                                {BiliDynamics}
                            </div>
                            <div>动态</div>
                        </div>
                        <div className="card   p-2  shadow">
                            <div className="text-2xl">
                                {BiliCoins}
                            </div>
                            <div>硬币</div>
                        </div>
                    </div>
                    <div className="text-center mb-4">
                        <a href={"https://space.bilibili.com/" + BiliUid} target="_blank" className="btn btn-primary "
                           rel="noreferrer">前往个人主页</a>
                    </div>
                    <div className="text-center mb-6">
                        <a href={"https://live.bilibili.com/" + BiliLiveroom} target="_blank"
                           className="btn btn-secondary " rel="noreferrer">前往直播页面</a>
                    </div>
                </div>
                <div className={BiliInfoTab == 1 ? "" : "hidden"}>
                    <div className="text-center m-6">
                        <a onClick={clearCookie} target="_blank" className="btn btn-primary "
                           rel="noreferrer">仅清除Cookie</a>
                    </div>
                    <div className="text-center mb-6">
                        <a onClick={() => {
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
                                    if (result.code === 0) {
                                        clearCookie()
                                    }
                                })
                        }} target="_blank"
                           className="btn btn-secondary " rel="noreferrer">完全退出(Cookie会失效)</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    const bilibili_login = <div className="card bilibili_login  bg-base-100 w-full sm:w-72   ">
        <div className="flex flex-col w-full p-4 ">
            <div className="text-xl font-bold mb-4 ">哔哩哔哩账号登录</div>
            <div className="grid flex flex-col gap-4">
                <div className="text-left  font-bold ">
                    二维码获取Cookie
                </div>
                <div className="grid flex-grow place-items-center">
                    <div
                        className={` relative card overflow-hidden ${isQrcodeFailed ? "filter blur-lg" : ""} `}>
                        <Canvas
                            text={BiliLoginQrcode}
                            options={{
                                level: 'H', scale: 4, width: 4, color: {
                                    dark: '#ff6b81', light: '#dff9fb',
                                },
                            }}
                        />
                    </div>

                </div>
                {!isQrcodeFailed ? <div>
                    {!isQrcodeLogin ? <div className="alert bg-neutral text-neutral-content -lg">
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

                    </div> : <div className="alert bg-accent text-accent-content -lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="stroke-current flex-shrink-0 h-6 w-6"
                                 fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>获取Cookie成功!请点击下方登录!</span>
                        </div>
                    </div>}
                </div> : <div className="alert bg-secondary text-secondary-content -lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6"
                             fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>二维码已过期，请刷新网页！</span>
                    </div>
                </div>}
            </div>
            <div className="divider"></div>
            <div className="grid flex flex-col gap-4">
                <div className="text-left  font-bold">
                    手动输入Cookie
                </div>
                {isBiliLoginFail ? <div className="alert bg-secondary text-secondary-content -lg">
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
                        setSESSDATA(decodeURIComponent(e.currentTarget.value));
                    }} type="text" placeholder="SESSDATA"
                           className="input input-bordered input-accent w-full max-w-xs"/>
                    <input value={bili_jct} onChange={e => {
                        setbili_jct(decodeURIComponent(e.currentTarget.value));
                    }} type="text" placeholder="bili_jct"
                           className="input input-bordered input-accent w-full max-w-xs"/>
                    <input value={DedeUserID} onChange={e => {
                        setDedeUserID(decodeURIComponent(e.currentTarget.value));
                    }} type="text" placeholder="DedeUserID"
                           className="input input-bordered input-accent w-full max-w-xs"/>
                    <input value={DedeUserID__ckMd5} onChange={e => {
                        setDedeUserID__ckMd5(decodeURIComponent(e.currentTarget.value));
                    }} type="text" placeholder="DedeUserID__ckMd5"
                           className="input input-bordered input-accent w-full max-w-xs"/>

                    <div className="flex  justify-center">
                        <button disabled={!isConfirmedRule} onClick={BiliLoginClickHandler}
                                className="btn btn-primary ">登录账号
                        </button>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer label text-center">
                                <span
                                    className="label-text mr-4  font-bold">已确保我已阅读用户须知<br/>并接受全部内容</span>
                            <input onChangeCapture={(e) => {
                                setConfirmedRule(e.target.checked)
                            }} checked={isConfirmedRule} type="checkbox" className="checkbox checkbox-error"/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    return (<Layout_sticky_navbar
        MenuItems=
            {(<div className="left_content  sm:static">
                {isBiliLogin ? bilibili_profile : bilibili_login}
                <div className="stats  flex flex-col mt-4  bg-base-100">
                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-8 h-8 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <div className="stat-title ">本工具服务人数</div>
                        <div className="stat-value text-accent">{BiliToolsUserCounts}</div>
                        <div className="stat-desc ">根据用户哔哩哔哩UID来统计</div>
                    </div>
                </div>
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
            </div>)}
        page=
            {(<div>
                    <Head>
                        <link rel="icon" type="image/x-icon" href="https://message.biliimg.com/bfs/im/d4397121cbf9b41269c03758bfeafb696ca2d0e1.png" />
                        <title>哔哩哔哩工具箱 - DeginX</title>
                    </Head>
                    <div className=" grid grid-cols-1  sm:mx-0 sm:grid-cols-3 auto-rows-max gap-4 ">
                        {/*用户须知*/}
                        <div className="card  flex  flex-col bg-base-100   p-4  overflow-scroll max-h-128">
                            <div className="text-xl font-bold ">用户须知</div>
                            <div className="flex flex-col sm:flex-row w-full mt-4 ">
                                <div
                                    className=" flex flex-col sm:w-1/3 relative  flex-grow overflow-hidden justify-center gap-4 ">
                                    <div className="text-left  ">
                                        1.如果使用我们的网站，将视为同意我们和我们的第三方服务提供商在您的计算机上设置Cookie。
                                    </div>
                                    <div className="text-left  ">
                                        2.除非为了特定的活动或基于本网站不时增加的特定功能，本网站不会主动收集您的个人信息。如果在上述情况下收集个人信息，这些个人信息将会仅用于特定且有限的目的。个人信息一经收集后，若未经您的同意，将不会用于明示目的之外的其他目的。
                                    </div>
                                    <div className="text-left  ">
                                        3.本网站不会记录任何<a className="link link-secondary"
                                                               href="https://www.bilibili.com/">哔哩哔哩</a>网站的Cookie，但会记录用户的Uid、用户名、粉丝数等信息用来统计工具使用人数。
                                    </div>
                                    <div className="text-left  font-bold ">
                                        4.本工具在用哔哩哔哩账号登录之时，会自动关注UP主<a
                                        className="link link-accent"
                                        href="https://space.bilibili.com/96876893">JONYANDUNH</a>，并且扣除10枚硬币投给UP主的5个视频。(毕竟是用爱发电嘛(～￣▽￣)～)
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*自定义头像上传*/}
                        <div className="card flex  flex-col bg-base-100  p-4 ">
                            <div className="text-xl flex  relative font-bold  gap-4">
                                <div>自定义头像上传</div>
                                <div
                                    className="dropdown absolute right-0 h-full dropdown-top sm:dropdown-bottom dropdown-end flex justify-self-end  dropdown-hover ">
                                    <div className="badge  h-full   badge-accent">
                                        注意事项
                                    </div>
                                    <div tabIndex={0}
                                         className="dropdown-content card card-compact  w-72 sm:w-96 p-2  bg-neutral text-neutral-content">
                                        <div className="card-body ">
                                            <div className="text-left ">
                                                1.本工具不能上传动态头像，但是可以上传透明的PNG格式的图片，绕过B站上传头像的裁剪。
                                            </div>
                                            <div className="text-left ">
                                                2.头像推荐分辨率为120x120;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex flex-col w-full relative  flex-grow overflow-hidden justify-center gap-4 mt-4">
                                <div className="avatar grid flex-grow place-items-center">
                                    <div className="card  relative  overflow-hidden w-48 h-48 ">
                                        <img fill
                                             src={BiliUserFace}/>
                                    </div>
                                </div>
                                <input hidden
                                       type="file"
                                       ref={NewBiliUserFaceFileRef}
                                       onChangeCapture={(e) => {
                                           setBiliUserFace(URL.createObjectURL(e.target.files[0]))
                                       }}
                                />
                                <div className="flex  justify-center gap-4">
                                    <div>
                                        <button className="btn btn-primary" onClick={(e) => {
                                            NewBiliUserFaceFileRef.current.click();
                                        }}>选择图片
                                        </button>
                                    </div>
                                    <div>
                                        <button className="btn btn-secondary" onClick={(e) => {
                                            var formdata = new FormData();
                                            formdata.append("dopost", "save");
                                            formdata.append("DisplayRank", "1000");
                                            formdata.append("face", NewBiliUserFaceFileRef.current.files[0]);
                                            var requestOptions = {
                                                method: 'POST',
                                                body: formdata,
                                                credentials: 'include',
                                                redirect: 'follow',
                                                mode: 'cors'

                                            };

                                            fetch(proxy_domain + "/bilibili/api/x/member/web/face/update?csrf=" + bili_jct, requestOptions)
                                                .then(response => response.json())
                                                .then(result => {
                                                    if (result.code === 0) {
                                                        setAlertModalTitle("上传成功")
                                                        setAlertModalInfo("请到哔哩哔哩查看是否上传成功。")
                                                        setAlertModalShowed(true)
                                                    } else {
                                                        setAlertModalTitle("上传失败")
                                                        setAlertModalInfo(result.message)
                                                        setAlertModalShowed(true)
                                                    }
                                                })
                                        }}>上传图片
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*视频合集动态封面上传*/}
                        <div className="card flex  flex-col bg-base-100  p-4 ">
                            <div className="text-xl flex  relative font-bold  gap-4">
                                <div>视频合集动态封面上传</div>
                                <div
                                    className="dropdown absolute right-0 h-full dropdown-top sm:dropdown-bottom dropdown-end flex justify-self-end  dropdown-hover ">
                                    <div className="badge  h-full   badge-accent">
                                        注意事项
                                    </div>
                                    <div tabIndex={0}
                                         className="dropdown-content card card-compact  w-72 sm:w-96 p-2  bg-neutral text-neutral-content">
                                        <div className="card-body ">
                                            <div className="text-left ">
                                                1.动态封面只能上传Webp格式的图片，图片大小不能超过3MB。
                                            </div>
                                            <div className="text-left ">
                                                2.上传成功后请到投稿中心查看是否通过审核。
                                            </div>
                                            <div className="text-left ">
                                                3.封面推荐分辨率为960x600或480x300。

                                            </div>
                                            <div className="text-left ">
                                                4.上传后请检查视频的投稿信息有无丢失，因为很多参数在上传动态封面时没有和视频同步
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex  flex-col w-full relative  flex-grow overflow-hidden justify-center gap-4 mt-4">
                                <div className="grid flex-grow place-items-center ">
                                    <div className="card relative  overflow-hidden w-64 h-40 ">
                                        <Image fill
                                               loader={ImageLoader}
                                               src={BiliVideoSeasonsCover}/>
                                    </div>
                                </div>

                                <div className="flex  justify-center">
                                    <input hidden
                                           type="file"
                                           ref={NewBiliVideoSeasonsCoverFileRef}
                                           onChangeCapture={(e) => {
                                               setBiliVideoSeasonsCover(URL.createObjectURL(e.target.files[0]))
                                           }}
                                    />
                                    <select value={BiliSelectedVideoSeasons}
                                            onChange={(e) => {
                                                setBiliVideoSeasonsCover(BiliArticlesList[e.target.value].image_url);
                                                setBiliSelectedVideoSeasons(e.target.value)
                                            }} className="select select-secondary w-full max-w-xs">
                                        <option disabled>请选择一个合集</option>
                                        {BiliVideoSeasons.map((item, index) => (<option value={index}
                                                                                        key={index}>{item.season.title}</option>))}
                                    </select>
                                </div>
                                <div className="flex  justify-center  gap-4">
                                    <div className="flex  justify-center">
                                        <button onClick={(e) => {
                                            NewBiliVideoSeasonsCoverFileRef.current.click();
                                        }} className="btn btn-primary  ">选择图片
                                        </button>
                                    </div>
                                    <button onClick={(e) => {

                                        var formdata = new FormData();
                                        formdata.append("bucket", "material_up");
                                        formdata.append("dir", "");
                                        formdata.append("file", NewBiliVideoSeasonsCoverFileRef.current.files[0]);
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
                                                    var VideoSeason = BiliVideoSeasons[BiliSelectedVideoSeasons]
                                                    var myHeaders = new Headers();
                                                    myHeaders.append("Content-Type", "application/json");
                                                    var raw = JSON.stringify({
                                                        "season": {
                                                            "id": VideoSeason.season.id,
                                                            "title": VideoSeason.season.title,
                                                            "desc":  VideoSeason.season.desc,
                                                            "cover": data.data.location,
                                                            "isEnd":  VideoSeason.season.isEnd,
                                                            "season_price": VideoSeason.season.season_price
                                                        }
                                                    });
                                                    var requestOptions = {
                                                        method: 'POST',
                                                        body: raw,
                                                        mode: 'cors',
                                                        headers: myHeaders,
                                                        credentials: 'include',
                                                        redirect: 'follow'
                                                    };

                                                    fetch(proxy_domain + "/bilibili/member/x2/creative/web/season/edit?csrf="+bili_jct, requestOptions)
                                                        .then(response => response.json())
                                                        .then(result => {
                                                            if (result.code === 0) {
                                                                setAlertModalTitle("上传成功")
                                                                setAlertModalInfo("请到投稿页面查看上传结果。")
                                                                setAlertModalShowed(true)
                                                            } else {
                                                                setAlertModalTitle("上传失败")
                                                                setAlertModalInfo(result.message)
                                                                setAlertModalShowed(true)
                                                            }
                                                        })

                                                } else if (data.code === -101) {
                                                    setAlertModalTitle("登录信息错误")
                                                    setAlertModalInfo("SESSDATA填写有误或已过期")
                                                    setAlertModalShowed(true)

                                                } else if (data.code === -111) {
                                                    setAlertModalTitle("登录信息错误")
                                                    setAlertModalInfo("bili_jct填写有误或已过期")
                                                    setAlertModalShowed(true)
                                                }

                                            })
                                    }} className="btn btn-secondary ">上传图片
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*专栏动态图片上传*/}
                        <div className="card flex sm:col-span-3  flex-col bg-base-100   p-4  ">
                            <div className="text-xl flex  relative font-bold  gap-4">
                                <div>专栏动态图片上传</div>
                                <div
                                    className="dropdown absolute right-0 h-full dropdown-top sm:dropdown-bottom dropdown-end flex justify-self-end  dropdown-hover ">
                                    <div className="badge  h-full  badge-accent">
                                        注意事项
                                    </div>
                                    <div tabIndex={0}
                                         className="dropdown-content card  card-compact w-72 sm:w-96 p-2  bg-neutral text-neutral-content">
                                        <div className="card-body ">
                                            <div className="text-left ">
                                                1.动态封面只能上传Webp格式的图片，图片大小不能超过5MB。
                                            </div>
                                            <div className="text-left ">
                                                2.上传成功后请到投稿中心查看是否通过审核。
                                            </div>
                                            <div className="text-left ">
                                                3.专栏封面推荐分辨率为640x288;专栏头图推荐分辨率为960x540;文集封面推荐分辨率为694x909。
                                            </div>
                                            <div className="text-left ">
                                                4.建议在填写专栏的正式内容前就上传动态封面，预防数据丢失。
                                            </div>
                                            <div className="text-left ">
                                                5.上传后请检查视频的投稿信息有无丢失，因为很多参数在上传动态封面时没有和视频同步
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full mt-4 ">
                                <div
                                    className="flex  flex-col w-full relative sm:w-1/3 flex-grow overflow-hidden justify-center gap-4 ">
                                    <div className="text-center  font-bold">
                                        专栏封面
                                    </div>
                                    <div className="grid flex-grow place-items-center ">
                                        <div className="card relative  overflow-hidden w-64 h-18-8 ">
                                            <Image fill
                                                   loader={ImageLoader}
                                                   src={BiliArticleCover}/>
                                        </div>
                                    </div>

                                    <div className="flex  justify-center">
                                        <input hidden
                                               type="file"
                                               ref={NewBiliArticleCoverFileRef}
                                               onChangeCapture={(e) => {
                                                   setBiliArticleCover(URL.createObjectURL(e.target.files[0]))
                                               }}
                                        />
                                        <select value={BiliSelectedArticleCover}
                                                onChange={(e) => {
                                                    console.log(BiliArticles[e.target.value])
                                                    if (BiliArticles[e.target.value].image_urls[0] != null) setBiliArticleCover(BiliArticles[e.target.value].image_urls[0]);
                                                    setBiliSelectedArticleCover(e.target.value)
                                                }} className="select select-secondary w-full max-w-xs">
                                            <option disabled>请选择一篇专栏</option>
                                            {BiliArticles.map((item, index) => (<option value={index}
                                                                                        key={index}>{item.publish_time != 0 ? "已发布" : "草稿箱"}-{item.title}</option>))}
                                        </select>
                                    </div>
                                    <div className="flex  justify-center  gap-4">
                                        <div className="flex  justify-center">
                                            <button onClick={(e) => {
                                                NewBiliArticleCoverFileRef.current.click();
                                            }} className="btn btn-primary  ">选择图片
                                            </button>
                                        </div>
                                        <button onClick={(e) => {

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
                                                        var Article = BiliArticles[BiliSelectedArticleCover]

                                                        var formdata = new FormData();
                                                        formdata.append("title", "一个用于上传动图的中转站,删掉此专栏即可");
                                                        formdata.append("banner_url", data.data.location);
                                                        formdata.append("csrf", bili_jct);
                                                        var requestOptions = {
                                                            method: 'POST',
                                                            body: formdata,
                                                            mode: 'cors',
                                                            credentials: 'include',
                                                            redirect: 'follow'
                                                        };

                                                        fetch(proxy_domain + "/bilibili/api/x/article/creative/draft/addupdate", requestOptions)
                                                            .then(response => response.json())
                                                            .then(result => {
                                                                if (result.code === 0) {
                                                                    var requestOptions = {
                                                                        method: 'GET',
                                                                        redirect: 'follow',
                                                                        mode: 'cors',
                                                                        credentials: 'include'
                                                                    };
                                                                    var TransferAID = result.data.aid
                                                                    fetch(proxy_domain + "/bilibili/api/x/article/creative/draft/view?aid=" + TransferAID, requestOptions)
                                                                        .then(response => response.json())
                                                                        .then(result => {
                                                                            if (result.code === 0) {
                                                                                updateArticle(Article, result.data.banner_url, 0)
                                                                                var formdata = new FormData();
                                                                                formdata.append("aid", TransferAID);
                                                                                formdata.append("csrf", bili_jct);
                                                                                fetch(proxy_domain + "/bilibili/member/x/web/draft/delete", {
                                                                                    method: 'POST',
                                                                                    body: formdata,
                                                                                    mode: 'cors',
                                                                                    credentials: 'include',
                                                                                    redirect: 'follow'
                                                                                })

                                                                            } else {
                                                                                setAlertModalTitle("读取中转站信息失败")
                                                                                setAlertModalInfo(result.message)
                                                                                setAlertModalShowed(true)
                                                                            }
                                                                        })

                                                                } else {
                                                                    setAlertModalTitle("上传图片到中转站失败")
                                                                    setAlertModalInfo(result.message)
                                                                    setAlertModalShowed(true)
                                                                }
                                                            })

                                                    } else if (data.code === -101) {
                                                        setAlertModalTitle("登录信息错误")
                                                        setAlertModalInfo("SESSDATA填写有误或已过期")
                                                        setAlertModalShowed(true)

                                                    } else if (data.code === -111) {
                                                        setAlertModalTitle("登录信息错误")
                                                        setAlertModalInfo("bili_jct填写有误或已过期")
                                                        setAlertModalShowed(true)
                                                    }

                                                })
                                        }} className="btn btn-secondary ">上传图片
                                        </button>
                                    </div>
                                </div>
                                <div className="divider divider-horizontal"/>
                                <div className="divider sm:hidden"/>
                                <div
                                    className="flex  flex-col w-full relative sm:w-1/3 flex-grow overflow-hidden justify-center gap-4 ">
                                    <div className="text-center  font-bold">
                                        专栏头图
                                    </div>
                                    <div className="grid flex-grow place-items-center ">
                                        <div className="card relative  overflow-hidden w-80 h-45 ">
                                            <Image fill
                                                   loader={ImageLoader}
                                                   src={BiliArticleHeader}/>
                                        </div>
                                    </div>

                                    <div className="flex  justify-center">
                                        <input hidden
                                               type="file"
                                               ref={NewBiliArticleHeaderFileRef}
                                               onChangeCapture={(e) => {
                                                   setBiliArticleHeader(URL.createObjectURL(e.target.files[0]))
                                               }}
                                        />
                                        <select value={BiliSelectedArticleHeader}
                                                onChange={(e) => {
                                                    if (BiliArticles[e.target.value].banner_url !== "") setBiliArticleHeader(BiliArticles[e.target.value].banner_url);
                                                    setBiliSelectedArticleHeader(e.target.value)
                                                }} className="select select-secondary w-full max-w-xs">
                                            <option disabled>请选择一篇专栏</option>
                                            {BiliArticles.map((item, index) => (<option value={index}
                                                                                        key={index}>{item.publish_time != 0 ? "已发布" : "草稿箱"}-{item.title}</option>))}
                                        </select>
                                    </div>
                                    <div className="flex  justify-center  gap-4">
                                        <div className="flex  justify-center">
                                            <button onClick={(e) => {
                                                NewBiliArticleHeaderFileRef.current.click();
                                            }} className="btn btn-primary  ">选择图片
                                            </button>
                                        </div>
                                        <button onClick={(e) => {

                                            var formdata = new FormData();
                                            formdata.append("bucket", "material_up");
                                            formdata.append("dir", "");
                                            formdata.append("file", NewBiliArticleHeaderFileRef.current.files[0]);
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
                                                        var Article = BiliArticles[BiliSelectedArticleHeader]

                                                        var formdata = new FormData();
                                                        formdata.append("title", "一个用于上传动图的中转站,删掉此专栏即可");
                                                        formdata.append("banner_url", data.data.location);
                                                        formdata.append("csrf", bili_jct);
                                                        var requestOptions = {
                                                            method: 'POST',
                                                            body: formdata,
                                                            mode: 'cors',
                                                            credentials: 'include',
                                                            redirect: 'follow'
                                                        };

                                                        fetch(proxy_domain + "/bilibili/api/x/article/creative/draft/addupdate", requestOptions)
                                                            .then(response => response.json())
                                                            .then(result => {
                                                                if (result.code === 0) {
                                                                    var requestOptions = {
                                                                        method: 'GET',
                                                                        redirect: 'follow',
                                                                        mode: 'cors',
                                                                        credentials: 'include'
                                                                    };
                                                                    var TransferAID = result.data.aid
                                                                    fetch(proxy_domain + "/bilibili/api/x/article/creative/draft/view?aid=" + TransferAID, requestOptions)
                                                                        .then(response => response.json())
                                                                        .then(result => {
                                                                            if (result.code === 0) {
                                                                                updateArticle(Article, result.data.banner_url, 1)
                                                                                var formdata = new FormData();
                                                                                formdata.append("aid", TransferAID);
                                                                                formdata.append("csrf", bili_jct);
                                                                                fetch(proxy_domain + "/bilibili/member/x/web/draft/delete", {
                                                                                    method: 'POST',
                                                                                    body: formdata,
                                                                                    mode: 'cors',
                                                                                    credentials: 'include',
                                                                                    redirect: 'follow'
                                                                                })

                                                                            } else {
                                                                                setAlertModalTitle("读取中转站信息失败")
                                                                                setAlertModalInfo(result.message)
                                                                                setAlertModalShowed(true)
                                                                            }
                                                                        })

                                                                } else {
                                                                    setAlertModalTitle("上传图片到中转站失败")
                                                                    setAlertModalInfo(result.message)
                                                                    setAlertModalShowed(true)
                                                                }
                                                            })

                                                    } else if (data.code === -101) {
                                                        setAlertModalTitle("登录信息错误")
                                                        setAlertModalInfo("SESSDATA填写有误或已过期")
                                                        setAlertModalShowed(true)

                                                    } else if (data.code === -111) {
                                                        setAlertModalTitle("登录信息错误")
                                                        setAlertModalInfo("bili_jct填写有误或已过期")
                                                        setAlertModalShowed(true)
                                                    }

                                                })
                                        }} className="btn btn-secondary ">上传图片
                                        </button>
                                    </div>
                                </div>
                                <div className="divider divider-horizontal"/>
                                <div className="divider sm:hidden"/>
                                <div
                                    className="flex  flex-col w-full relative sm:w-1/3 flex-grow overflow-hidden justify-center gap-4 ">
                                    <div className="text-center  font-bold">
                                        文集封面
                                    </div>
                                    <div className="grid flex-grow place-items-center ">
                                        <div className="card relative  overflow-hidden w-56 h-72 ">
                                            <Image fill
                                                   loader={ImageLoader}
                                                   src={BiliArticleListCover}/>
                                        </div>
                                    </div>

                                    <div className="flex  justify-center">
                                        <input hidden
                                               type="file"
                                               ref={NewBiliArticleListCoverFileRef}
                                               onChangeCapture={(e) => {
                                                   setBiliArticleListCover(URL.createObjectURL(e.target.files[0]))
                                               }}
                                        />
                                        <select value={BiliSelectedArticleList}
                                                onChange={(e) => {
                                                    setBiliArticleListCover(BiliArticlesList[e.target.value].image_url);
                                                    setBiliSelectedArticleList(e.target.value)
                                                }} className="select select-secondary w-full max-w-xs">
                                            <option disabled>请选择一个文集</option>
                                            {BiliArticlesList.map((item, index) => (<option value={index}
                                                                                        key={index}>{item.name}</option>))}
                                        </select>
                                    </div>
                                    <div className="flex  justify-center  gap-4">
                                        <div className="flex  justify-center">
                                            <button onClick={(e) => {
                                                NewBiliArticleListCoverFileRef.current.click();
                                            }} className="btn btn-primary  ">选择图片
                                            </button>
                                        </div>
                                        <button onClick={(e) => {

                                            var formdata = new FormData();
                                            formdata.append("bucket", "material_up");
                                            formdata.append("dir", "");
                                            formdata.append("file", NewBiliArticleListCoverFileRef.current.files[0]);
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
                                                        var ArticleList = BiliArticlesList[BiliSelectedArticleList]

                                                        var formdata = new FormData();
                                                        formdata.append("list_id", ArticleList.id);
                                                        formdata.append("name", ArticleList.name);
                                                        formdata.append("summary", ArticleList.summary);
                                                        formdata.append("image_url", data.data.location);
                                                        formdata.append("only_list", "true");
                                                        formdata.append("csrf", bili_jct);
                                                        var requestOptions = {
                                                            method: 'POST',
                                                            body: formdata,
                                                            mode: 'cors',
                                                            credentials: 'include',
                                                            redirect: 'follow'
                                                        };

                                                        fetch(proxy_domain + "/bilibili/api/x/article/creative/list/update", requestOptions)
                                                            .then(response => response.json())
                                                            .then(result => {
                                                                if (result.code === 0) {
                                                                    setAlertModalTitle("上传成功")
                                                                    setAlertModalInfo("请到投稿页面查看上传结果。")
                                                                    setAlertModalShowed(true)
                                                                } else {
                                                                    setAlertModalTitle("上传失败")
                                                                    setAlertModalInfo(result.message)
                                                                    setAlertModalShowed(true)
                                                                }
                                                            })

                                                    } else if (data.code === -101) {
                                                        setAlertModalTitle("登录信息错误")
                                                        setAlertModalInfo("SESSDATA填写有误或已过期")
                                                        setAlertModalShowed(true)

                                                    } else if (data.code === -111) {
                                                        setAlertModalTitle("登录信息错误")
                                                        setAlertModalInfo("bili_jct填写有误或已过期")
                                                        setAlertModalShowed(true)
                                                    }

                                                })
                                        }} className="btn btn-secondary ">上传图片
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*直播间动态封面上传*/}
                        <div className="card sm:col-span-3 bg-base-100  p-4  ">
                            <div className="text-xl flex  relative font-bold ">
                                <div>直播间动态封面上传</div>
                                <div
                                    className="dropdown absolute right-0 h-full dropdown-top dropdown-end flex justify-self-end  dropdown-hover ">
                                    <div className="badge  h-full  badge-accent">
                                        注意事项
                                    </div>
                                    <div tabIndex={0}
                                         className="dropdown-content  card card-compact w-72 sm:w-96 p-2  bg-neutral text-neutral-content">
                                        <div className="card-body ">
                                            <div className="text-left">
                                                1.动态封面只能上传Webp格式的图片，图片大小不能超过5MB。
                                            </div>
                                            <div className="text-left">
                                                2.上传成功后请到网页版直播间页面查看是否通过审核。
                                            </div>
                                            <div className="text-left">
                                                3.横版封面推荐分辨率为640x360;颜值封面推荐分辨率为360x360;竖版封面推荐分辨率为360x640;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full mt-4 ">
                                <div
                                    className=" flex flex-col sm:w-1/3 relative  flex-grow overflow-hidden justify-center gap-4 ">
                                    <div className="text-center  font-bold">
                                        横版封面
                                    </div>
                                    <div className="grid flex-grow place-items-center">
                                        <div className="card relative  overflow-hidden w-80 h-45 ">
                                            <img fill
                                                 loader={ImageLoader}
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
                                            <button className="btn btn-primary " onClick={(e) => {
                                                NewBiliLiveroomCoverFileRef.current.click();
                                            }}>选择图片
                                            </button>
                                        </div>
                                        <div>
                                            <button className="btn btn-secondary  " onClick={(e) => {
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
                                                                redirect: 'follow',
                                                                credentials: 'include',
                                                                mode: 'cors',
                                                            };
                                                            fetch(proxy_domain + "/bilibili/api/live/xlive/app-blink/v1/preLive/UpdatePreLiveInfo", requestOptions)
                                                                .then(response => response.json())
                                                                .then(result => {
                                                                    if (result.code === 0) {
                                                                        setAlertModalTitle("上传成功")
                                                                        setAlertModalInfo("请到网页版直播间页面查看是否通过审核。")
                                                                        setAlertModalShowed(true)
                                                                    } else {
                                                                        setAlertModalTitle("上传失败")
                                                                        setAlertModalInfo(result.message)
                                                                        setAlertModalShowed(true)
                                                                    }
                                                                })
                                                        } else if (data.code === -101) {
                                                            setAlertModalTitle("登录信息错误")
                                                            setAlertModalInfo("SESSDATA填写有误或已过期")
                                                            setAlertModalShowed(true)

                                                        } else if (data.code === -111) {
                                                            setAlertModalTitle("登录信息错误")
                                                            setAlertModalInfo("bili_jct填写有误或已过期")
                                                            setAlertModalShowed(true)
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
                                    className=" flex flex-col sm:w-1/3 relative  flex-grow overflow-hidden justify-center gap-4">
                                    <div className="text-center  font-bold">
                                        颜值封面
                                    </div>
                                    <div className="grid flex-grow place-items-center">
                                        <div className="card relative  overflow-hidden w-45 h-45 ">
                                            <Image fill
                                                   loader={ImageLoader}
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
                                            <button disabled className="btn btn-primary " onClick={(e) => {
                                                NewBiliLiveroomShowCoverFileRef.current.click();
                                            }}>选择图片
                                            </button>
                                        </div>
                                        <div>
                                            <button disabled className="btn btn-secondary  " onClick={(e) => {

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
                                                                redirect: 'follow',
                                                                credentials: 'include',
                                                                mode: 'cors',
                                                            };
                                                            fetch(proxy_domain + "/bilibili/api/live/room/v1/Cover/replace", requestOptions)
                                                                .then(response => response.json())
                                                                .then(result => {
                                                                    if (result.code === 0) {
                                                                        setAlertModalTitle("上传成功")
                                                                        setAlertModalInfo("请到网页版直播间页面查看是否通过审核。")
                                                                        setAlertModalShowed(true)
                                                                    } else {
                                                                        setAlertModalTitle("上传失败")
                                                                        setAlertModalInfo(result.message)
                                                                        setAlertModalShowed(true)
                                                                    }
                                                                })
                                                        } else if (data.code === -101) {
                                                            setAlertModalTitle("登录信息错误")
                                                            setAlertModalInfo("SESSDATA填写有误或已过期")
                                                            setAlertModalShowed(true)

                                                        } else if (data.code === -111) {
                                                            setAlertModalTitle("登录信息错误")
                                                            setAlertModalInfo("bili_jct填写有误或已过期")
                                                            setAlertModalShowed(true)
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
                                    className=" flex flex-col sm:w-1/3 relative  flex-grow overflow-hidden justify-center gap-4">
                                    <div className="text-center  font-bold">
                                        竖版封面
                                    </div>
                                    <div className="grid flex-grow place-items-center">
                                        <div className="card relative  overflow-hidden w-45 h-80 ">
                                            <Image fill
                                                   loader={ImageLoader}
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
                                            <button className="btn btn-primary  " onClick={(e) => {
                                                NewBiliLiveroomCoverVerticalFileRef.current.click();
                                            }}>选择图片
                                            </button>
                                        </div>
                                        <div>
                                            <button className="btn btn-secondary   " onClick={(e) => {

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
                                                                redirect: 'follow',
                                                                credentials: 'include',
                                                                mode: 'cors',
                                                            };
                                                            fetch(proxy_domain + "/bilibili/api/live/xlive/app-blink/v1/preLive/UpdatePreLiveInfo", requestOptions)
                                                                .then(response => response.json())
                                                                .then(result => {
                                                                    if (result.code === 0) {
                                                                        setAlertModalTitle("上传成功")
                                                                        setAlertModalInfo("请到网页版直播间页面查看是否通过审核。")
                                                                        setAlertModalShowed(true)
                                                                    } else {
                                                                        setAlertModalTitle("上传失败")
                                                                        setAlertModalInfo(result.message)
                                                                        setAlertModalShowed(true)
                                                                    }
                                                                })
                                                        } else if (data.code === -101) {
                                                            setAlertModalTitle("登录信息错误")
                                                            setAlertModalInfo("SESSDATA填写有误或已过期")
                                                            setAlertModalShowed(true)

                                                        } else if (data.code === -111) {
                                                            setAlertModalTitle("登录信息错误")
                                                            setAlertModalInfo("bili_jct填写有误或已过期")
                                                            setAlertModalShowed(true)
                                                        }

                                                    })
                                            }}>上传图片
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/*音频动态图片上传*/}
                        <div className="card flex sm:col-span-2  flex-col bg-base-100   p-4  ">
                            <div className="text-xl flex  relative font-bold  gap-4">
                                <div>音频动态图片上传</div>
                                <div
                                    className="dropdown absolute right-0 h-full dropdown-top sm:dropdown-bottom dropdown-end flex justify-self-end  dropdown-hover ">
                                    <div className="badge  h-full  badge-accent">
                                        注意事项
                                    </div>
                                    <div tabIndex={0}
                                         className="dropdown-content card  card-compact w-72 sm:w-96 p-2  bg-neutral text-neutral-content">
                                        <div className="card-body ">
                                            <div className="text-left ">
                                                1.动态封面只能上传Webp格式的图片，图片大小不能超过5MB。
                                            </div>
                                            <div className="text-left ">
                                                2.上传成功后请到投稿中心查看是否通过审核。
                                            </div>
                                            <div className="text-left ">
                                                3.音频单曲及音频合辑推荐分辨率为240x240。
                                            </div>
                                            <div className="text-left ">
                                                4.建议在填写歌曲的正式信息前就上传动态封面，预防数据丢失。
                                            </div>
                                            <div className="text-left ">
                                                5.上传后请检查视频的投稿信息有无丢失，因为很多参数在上传动态封面时没有同步。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full mt-4 ">
                                <div
                                    className="flex  flex-col w-full relative sm:w-1/2 flex-grow overflow-hidden justify-center gap-4 ">
                                    <div className="text-center  font-bold">
                                        音频单曲
                                    </div>
                                    <div className="grid flex-grow place-items-center ">
                                        <div className="card relative  overflow-hidden w-45 h-45 ">
                                            <Image fill
                                                   loader={ImageLoader}
                                                   src={BiliMusicCover}/>
                                        </div>
                                    </div>

                                    <div className="flex  justify-center">
                                        <input hidden
                                               type="file"
                                               ref={NewBiliMusicCoverFileRef}
                                               onChangeCapture={(e) => {
                                                   setBiliMusicCover(URL.createObjectURL(e.target.files[0]))
                                               }}
                                        />
                                        <select value={BiliSelectedMusic}
                                                onChange={(e) => {
                                                    if (BiliMusics[e.target.value].banner_url !== "") setBiliMusicCover(BiliArticles[e.target.value].banner_url);
                                                    setBiliSelectedMusic(e.target.value)
                                                }} className="select select-secondary w-full max-w-xs">
                                            <option disabled>请选择一首音乐</option>
                                            {BiliMusics.map((item, index) => (<option value={index}
                                                                                        key={index}>{item.title}</option>))}
                                        </select>
                                    </div>
                                    <div className="flex  justify-center  gap-4">
                                        <div className="flex  justify-center">
                                            <button onClick={(e) => {
                                                NewBiliMusicCoverFileRef.current.click();
                                            }} className="btn btn-primary  ">选择图片
                                            </button>
                                        </div>
                                        <button onClick={(e) => {

                                            var formdata = new FormData();
                                            formdata.append("bucket", "material_up");
                                            formdata.append("dir", "");
                                            formdata.append("file", NewBiliMusicCoverFileRef.current.files[0]);
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
                                                        var Article = BiliMusics[BiliSelectedMusic]

                                                        var myHeaders = new Headers();
                                                        myHeaders.append("Content-Type", "application/json");

                                                        var raw = JSON.stringify({
                                                            "lyric_url": checkDataNull(Article.lyric_url),
                                                            "cover_url": data.data.location,
                                                            "song_id": Article.song_id,
                                                            "album_id": checkDataNull(Article.album_id),
                                                            "mid": Article.mid,
                                                            "origin_title": checkDataNull(Article.origin_title),
                                                            "origin_url": checkDataNull(Article.origin_url),
                                                            "avid":checkDataNull(Article.avid),
                                                            "tid": checkDataNull(Article.tid),
                                                            "cid": checkDataNull(Article.cid),
                                                            "intro": checkDataNull(Article.intro),
                                                            "activity_id": checkDataNull(Article.activity_id),
                                                            "is_bgm": 1,
                                                            "title": checkDataNull(Article.title)
                                                        });

                                                        var requestOptions = {
                                                            method: 'PUT',
                                                            headers: myHeaders,
                                                            body: raw,
                                                            redirect: 'follow'
                                                        };

                                                        fetch(proxy_domain+"/bilibili/index/audio/music-service/createcenter/songs/3755913", requestOptions)
                                                            .then(response => response.json())
                                                            .then(result => {
                                                                if (result.code === 0) {
                                                                    setAlertModalTitle("上传成功")
                                                                    setAlertModalInfo("请到投稿页面查看上传结果。")
                                                                    setAlertModalShowed(true)
                                                                } else {
                                                                    setAlertModalTitle("上传失败")
                                                                    setAlertModalInfo(result.message)
                                                                    setAlertModalShowed(true)
                                                                }
                                                            })

                                                    } else if (data.code === -101) {
                                                        setAlertModalTitle("登录信息错误")
                                                        setAlertModalInfo("SESSDATA填写有误或已过期")
                                                        setAlertModalShowed(true)

                                                    } else if (data.code === -111) {
                                                        setAlertModalTitle("登录信息错误")
                                                        setAlertModalInfo("bili_jct填写有误或已过期")
                                                        setAlertModalShowed(true)
                                                    }

                                                })
                                        }} className="btn btn-secondary ">上传图片
                                        </button>
                                    </div>
                                </div>
                                <div className="divider divider-horizontal"/>
                                <div className="divider sm:hidden"/>
                                <div
                                    className="flex  flex-col w-full relative sm:w-1/2 flex-grow overflow-hidden justify-center gap-4 ">
                                    <div className="text-center  font-bold">
                                        音频合辑
                                    </div>
                                    <div className="grid flex-grow place-items-center ">
                                        <div className="card relative  overflow-hidden w-45 h-45 ">
                                            <Image fill
                                                   loader={ImageLoader}
                                                   src={BiliMusicCompilationsCover}/>
                                        </div>
                                    </div>

                                    <div className="flex  justify-center">
                                        <input hidden
                                               type="file"
                                               ref={NewBiliMusicCompilationsCoverFileRef}
                                               onChangeCapture={(e) => {
                                                   setBiliMusicCompilationsCover(URL.createObjectURL(e.target.files[0]))
                                               }}
                                        />
                                        <select value={BiliSelectedMusicCompilations}
                                                onChange={(e) => {
                                                    setBiliMusicCompilationsCover(BiliArticlesList[e.target.value].image_url);
                                                    setBiliSelectedMusicCompilations(e.target.value)
                                                }} className="select select-secondary w-full max-w-xs">
                                            <option disabled>请选择一个合辑</option>
                                            {BiliMusicCompilations.map((item, index) => (<option value={index}
                                                                                            key={index}>{item.title}</option>))}
                                        </select>
                                    </div>
                                    <div className="flex  justify-center  gap-4">
                                        <div className="flex  justify-center">
                                            <button onClick={(e) => {
                                                NewBiliMusicCompilationsCoverFileRef.current.click();
                                            }} className="btn btn-primary  ">选择图片
                                            </button>
                                        </div>
                                        <button onClick={(e) => {

                                            var formdata = new FormData();
                                            formdata.append("bucket", "material_up");
                                            formdata.append("dir", "");
                                            formdata.append("file", NewBiliMusicCompilationsCoverFileRef.current.files[0]);
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
                                                        var MusicCompilation = BiliMusicCompilations[BiliSelectedMusicCompilations]
                                                        var myHeaders = new Headers();
                                                        myHeaders.append("Content-Type", "application/json");
                                                        var raw = JSON.stringify({
                                                            "compilation_id": MusicCompilation.compilation_id,
                                                            "cover_url": data.data.location,
                                                            "is_synch": 0,
                                                            "intro": data.data.intro,
                                                            "title": data.data.title
                                                        });
                                                        var requestOptions = {
                                                            method: 'POST',
                                                            headers: myHeaders,
                                                            body: raw,
                                                            mode: 'cors',
                                                            credentials: 'include',
                                                            redirect: 'follow'
                                                        };

                                                        fetch(proxy_domain + "/bilibili/index/audio/music-service/compilation/update_compilation", requestOptions)
                                                            .then(response => response.json())
                                                            .then(result => {
                                                                if (result.code === 0) {
                                                                    setAlertModalTitle("上传成功")
                                                                    setAlertModalInfo("请到投稿页面查看上传结果。")
                                                                    setAlertModalShowed(true)
                                                                } else {
                                                                    setAlertModalTitle("上传失败")
                                                                    setAlertModalInfo(result.message)
                                                                    setAlertModalShowed(true)
                                                                }
                                                            })

                                                    } else if (data.code === -101) {
                                                        setAlertModalTitle("登录信息错误")
                                                        setAlertModalInfo("SESSDATA填写有误或已过期")
                                                        setAlertModalShowed(true)

                                                    } else if (data.code === -111) {
                                                        setAlertModalTitle("登录信息错误")
                                                        setAlertModalInfo("bili_jct填写有误或已过期")
                                                        setAlertModalShowed(true)
                                                    }

                                                })
                                        }} className="btn btn-secondary ">上传图片
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div ref={AlertRef} className="toast toast-end">


                    </div>
                    <input onChangeCapture={(e) => {
                        setAlertModalShowed(e.target.checked)
                    }} checked={isAlertModalShowed} type="checkbox" id="AlertModal" className="modal-toggle"/>
                    <label htmlFor="AlertModal" className="modal cursor-pointer">
                        <label className="modal-box relative" htmlFor="">
                            <h3 className="text-lg font-bold">{AlertModalTitle}</h3>
                            <p className="py-4">{AlertModalInfo}</p>
                        </label>
                    </label>
                </div>

            )}
    />)
}