import { useEffect, useRef } from "react"

export type HeroProps = {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

function Hero(props: HeroProps): JSX.Element {
    const { className, ...rest } = props
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        videoRef.current?.play()
    }, [])

    return (
        <div
            className={cn(
                "center sm:h-screen overflow-hidden relative",
                className
            )}
            {...rest}
        >
            <video
                className="hidden sm:block w-full"
                loop
                autoPlay
                muted
                ref={videoRef}
            >
                <source src="videos/hero.mp4" type="video/mp4" />
            </video>
            <div className="hero-layer hidden sm:flex flex-col gap-4 items-center justify-center">
                <h4 className="text-white/70">
                    Welcome to <span className="parpeltext italic">Parpel</span>{" "}
                    World.
                </h4>
                <h1 className="max-w-[500px] text-center font-black text-2xl md:text-6xl">
                    THE INTERNET OF <span className="parpeltext">VALUE</span>
                </h1>
                <p className="max-w-[570px] text-center text-gray-400 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti tenetur animi eius perferendis magnam deserunt
                    quidem inventore fuga possimus aspernatur?
                </p>
                <div className="flex gap-2.5 mt-2.5">
                    <button className="bg-purple-800 text-white p-2 px-4 rounded-md">
                        GET WALLET
                    </button>
                    <button className="bg-purple-50 text-purple-600 px-4 p-2 rounded-md">
                        WHITEPAPER
                    </button>
                </div>
            </div>
            {/* mobile */}
            <div className="sm:hidden flex flex-col gap-4 items-center justify-center py-20">
                <h4 className="text-white/70">
                    Welcome to <span className="parpeltext italic">Parpel</span>{" "}
                    World.
                </h4>
                <h1 className="text-center font-black text-5xl px-10 md:text-6xl">
                    THE INTERNET OF <span className="parpeltext">VALUE</span>
                </h1>
                <p className="text-center text-gray-400 px-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti tenetur animi eius perferendis magnam deserunt
                    quidem inventore fuga possimus aspernatur?
                </p>
                <div className="flex gap-2.5 mt-2.5">
                    <button className="bg-purple-800 text-white p-2 px-4 rounded-md">
                        GET WALLET
                    </button>
                    <button className="bg-purple-50 text-purple-600 px-4 p-2 rounded-md">
                        WHITEPAPER
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
