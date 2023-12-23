import windows from "../assets/images/windows.png"
import linux from "../assets/images/linux.png"
import android from "../assets/images/android.png"

export type WalletsProps = {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

function Wallets(props: WalletsProps): JSX.Element {
    const { className, ...rest } = props
    return (
        <div className={cn("flex flex-col gap-y-3", className)} {...rest}>
            <p className="text-center uppercase parpeltext">
                Available Wallets
            </p>
            <h4 className="text-center text-3xl font-extrabold">Wallet Apps</h4>
            <p className="text-center text-gray-400">
                <span className="parpeltext">Parpel</span> Wallet Application Is
                Available In Several Platforms
            </p>
            <div className="flex justify-center flex-wrap mt-3">
                <div className="w-1/2 md:w-1/3 p-1.5 md:p-2.5">
                    <div className="wallet-panel">
                        <img src={windows} className="w-10 md:w-16" alt="" />
                        <p className="font-semibold text-center uppercase text-gray-300">
                            Window 8 & 10
                        </p>
                        <button className="bg-purple-950 text-white p-2 px-4 rounded-md">
                            Download
                        </button>
                    </div>
                </div>
                <div className="w-1/2 md:w-1/3 p-1.5 md:p-2.5">
                    <div className="wallet-panel">
                        <img src={linux} className="w-10 md:w-16" alt="" />
                        <p className="font-semibold text-center uppercase text-gray-300">
                            Linux
                        </p>
                        <button className="bg-purple-950 text-white p-2 px-4 rounded-md">
                            Download
                        </button>
                    </div>
                </div>
                <div className="w-1/2 md:w-1/3 p-1.5 md:p-2.5">
                    <div className="wallet-panel">
                        <img src={android} className="w-10 md:w-16" alt="" />
                        <p className="font-semibold text-center uppercase text-gray-300">
                            Android
                        </p>
                        <button className="bg-purple-950 text-white p-2 px-4 rounded-md">
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallets
