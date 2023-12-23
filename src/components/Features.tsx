import csec from "../assets/images/cyber-security.png"
import ga from "../assets/images/google-analytics.png"
import nodes from "../assets/images/nodes.png"

export type FeaturesProps = {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

function Features(props: FeaturesProps): JSX.Element {
    const { className, ...rest } = props
    return (
        <div className={cn("flex flex-col gap-y-3", className)} {...rest}>
            <p className="text-center uppercase parpeltext">main features</p>
            <h4 className="text-center text-2xl sm:text-3xl font-extrabold">
                The Parpel Features
            </h4>
            <p className="text-center text-gray-400">
                We Made <span className="parpeltext italic">Parpel</span>{" "}
                Feature Very Careful And Detailed, Making It Easy To Use
            </p>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
                <div className="flex gap-6 flex-col items-center md:gap-3 bg-purple-950/15 p-5 py-7 rounded-md backdrop-blur-sm justify-center">
                    <img className="w-12 md:w-16" src={csec} />
                    <div className="flex flex-col gap-2">
                        <h4 className="font-bold text-xl text-center">
                            Natively Secure
                        </h4>
                        <p className="text-center text-gray-400 md:text-gray-400/90">
                            You can combine several or even many strategies.
                            Vishai was created to be able to adapt to your
                            wishes.
                        </p>
                    </div>
                </div>
                <div className="flex gap-6 flex-col items-center md:gap-3 bg-purple-950/15 p-5 py-7 rounded-md backdrop-blur-sm justify-center">
                    <img className="w-12 md:w-16" src={ga} />
                    <div className="flex flex-col gap-2">
                        <h4 className="font-bold text-xl text-center">
                            Fundamental Analysis
                        </h4>
                        <p className="text-center text-gray-400 md:text-gray-400/90">
                            AI automatically learns fundamental analysis from
                            various trusted sources, processed and presented via
                            UI/UX making it easy for you to use it.
                        </p>
                    </div>
                </div>
                <div className="flex gap-6 flex-col items-center md:gap-3 bg-purple-950/15 p-5 py-7 rounded-md backdrop-blur-sm justify-center">
                    <img className="w-12 md:w-16" src={nodes} />
                    <div className="flex flex-col gap-2">
                        <h4 className="font-bold text-xl text-center">
                            Multiple Exchange
                        </h4>
                        <p className="text-center text-gray-400 md:text-gray-400/90">
                            You can add multiple Exchange accounts to{" "}
                            <span className="parpeltext">Parpel</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
