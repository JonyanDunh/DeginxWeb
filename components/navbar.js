import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {useState, useEffect} from 'react'
import { themeChange } from 'theme-change'
export default function Navbar({}) {
    const router = useRouter()
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])
    return (
        <>

            <div className="navbar rounded-box bg-base-100 my-4 ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">DeginX</a>
                </div>
                <div className="flex-none">
                    <Link href="/">
                        <button
                            className={`btn  btn-ghost hidden sm:block  ${"/" == router.pathname ? "btn-active" : ""}`}>主页
                        </button>
                    </Link>
                    <Link href="/tools?ItemType=all">
                        <button
                            className={`btn  btn-ghost sm:block  ${"/tools" == router.pathname ? "btn-active" : ""}`}>工具
                        </button>
                    </Link>
                    <button className="btn btn-ghost hidden ">插件</button>
                    <button className="btn btn-ghost hidden ">开放平台</button>
                    <button className="btn btn-ghost hidden  ">文档</button>
                    <button className="btn btn-ghost hidden ">关于</button>
                    <div title="Change Theme" className="dropdown dropdown-end ">
                        <div tabIndex="0" className="btn gap-1 normal-case btn-ghost">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                            </svg>
                            <span className="hidden md:inline">主题</span>
                            <svg width="12px" height="12px"
                                 className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                            </svg>
                        </div>
                        <div
                            className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
                            <div className="grid grid-cols-1 gap-3 p-3" tabIndex="0">
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline"
                                    data-set-theme="light" data-act-class="outline">
                                    <div data-theme="light"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">light</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="dark" data-act-class="outline">
                                    <div data-theme="dark"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">dark</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="cupcake" data-act-class="outline">
                                    <div data-theme="cupcake"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">cupcake</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="bumblebee" data-act-class="outline">
                                    <div data-theme="bumblebee"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">bumblebee</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="emerald" data-act-class="outline">
                                    <div data-theme="emerald"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">emerald</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="corporate" data-act-class="outline">
                                    <div data-theme="corporate"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">corporate</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="synthwave" data-act-class="outline">
                                    <div data-theme="synthwave"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">synthwave</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="retro" data-act-class="outline">
                                    <div data-theme="retro"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">retro</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="cyberpunk" data-act-class="outline">
                                    <div data-theme="cyberpunk"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">cyberpunk</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="valentine" data-act-class="outline">
                                    <div data-theme="valentine"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">valentine</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="halloween" data-act-class="outline">
                                    <div data-theme="halloween"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">halloween</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="garden" data-act-class="outline">
                                    <div data-theme="garden"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">garden</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="forest" data-act-class="outline">
                                    <div data-theme="forest"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">forest</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="aqua" data-act-class="outline">
                                    <div data-theme="aqua"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">aqua</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="lofi" data-act-class="outline">
                                    <div data-theme="lofi"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">lofi</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="pastel" data-act-class="outline">
                                    <div data-theme="pastel"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">pastel</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="fantasy" data-act-class="outline">
                                    <div data-theme="fantasy"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">fantasy</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="wireframe" data-act-class="outline">
                                    <div data-theme="wireframe"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">wireframe</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="black" data-act-class="outline">
                                    <div data-theme="black"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">black</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="luxury" data-act-class="outline">
                                    <div data-theme="luxury"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">luxury</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="dracula" data-act-class="outline">
                                    <div data-theme="dracula"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">dracula</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="cmyk" data-act-class="outline">
                                    <div data-theme="cmyk"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">cmyk</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="autumn" data-act-class="outline">
                                    <div data-theme="autumn"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">autumn</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="business" data-act-class="outline">
                                    <div data-theme="business"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">business</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="acid" data-act-class="outline">
                                    <div data-theme="acid"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">acid</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="lemonade" data-act-class="outline">
                                    <div data-theme="lemonade"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">lemonade</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="night" data-act-class="outline">
                                    <div data-theme="night"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">night</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="coffee" data-act-class="outline">
                                    <div data-theme="coffee"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">coffee</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                    data-set-theme="winter" data-act-class="outline">
                                    <div data-theme="winter"
                                         className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                        <div className="grid grid-cols-5 grid-rows-3">
                                            <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                                <div className="flex-grow text-sm font-bold">winter</div>
                                                <div className="flex flex-shrink-0 flex-wrap gap-1">
                                                    <div className="bg-primary w-2 rounded"></div>
                                                    <div className="bg-secondary w-2 rounded"></div>
                                                    <div className="bg-accent w-2 rounded"></div>
                                                    <div className="bg-neutral w-2 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i2.hdslb.com/bfs/face/dfc20ec4a6e62d1604d55be06ce4ff6977a6e8dc.png"/>
                            </div>
                        </label>
                        <ul tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}