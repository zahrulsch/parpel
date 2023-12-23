import { useLottie } from "lottie-react"
import vr from "../assets/lottie/vr.json"
import { useEffect } from "react"

export type ChainLottieProps = {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

function ChainLottie(): JSX.Element {
    const { View, setSpeed } = useLottie({
        animationData: vr,
        loop: true,
        className: "w-full",
    })

    useEffect(() => {
        setSpeed(2)
    }, [setSpeed])

    return View
}

export default ChainLottie
