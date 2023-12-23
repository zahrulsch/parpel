import { lazy, Suspense, useRef } from "react"
import Roadmap from "./components/Roadmap"
import Header from "./components/Header"

const ChainLottie = lazy(() => import("./components/ChainLottie"))
const Features = lazy(() => import("./components/Features"))
const Hero = lazy(() => import("./components/Hero"))
const Wallets = lazy(() => import("./components/Wallets"))

function App() {
    const elementRef = useRef(null)

    return (
        <div
            ref={elementRef}
            className="w-full h-screen bg-stone-950 overflow-y-auto overflow-x-hidden text-white main"
        >
            <div className="flex flex-col bg-black/85 sm:bg-black/90 relative">
                <Header className="sticky z-10 top-0 left-0 right-0" />
                <Suspense fallback={null}>
                    <Hero />
                </Suspense>
                <div className="-mt-5">
                    <div className="flex container-sm px-6 flex-col gap-3 md:flex-row md:py-10 items-center">
                        <Suspense fallback={null}>
                            <ChainLottie />
                        </Suspense>
                        <div className="mt-8 flex flex-col gap-3 items-start">
                            <h4 className="text-2xl sm:text-3xl font-extrabold">
                                Lorem Ipsum,{" "}
                                <span className="parpeltext">Dolor</span> Sit
                                Amet Consectetur Adipisicing Elit.
                            </h4>
                            <span className="text-gray-400">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Aspernatur accusamus adipisci
                                reiciendis rem cum, nam repudiandae. Temporibus
                                accusamus ut omnis provident libero sequi rerum
                                dolor eius excepturi, nostrum, vero odio.
                            </span>
                            <button className="bg-purple-950 text-white p-2 px-4 rounded-md mt-1">
                                Action More
                            </button>
                        </div>
                    </div>
                    <Roadmap />
                    <div className="bg-stone-950 md:bg-inherit py-8 mt-5 backdrop-blur-sm">
                        <Suspense fallback={null}>
                            <Features className="container-sm px-6" />
                        </Suspense>
                    </div>
                    <div className="bg-purple-950/40 md:bg-inherit py-8 backdrop-blur-sm">
                        <Suspense fallback={null}>
                            <Wallets className="container-sm px-4 md:px-6" />
                        </Suspense>
                    </div>
                    <div className="py-10"></div>
                </div>
            </div>
        </div>
    )
}

export default App
