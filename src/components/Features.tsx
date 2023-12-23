import csec from "../assets/images/cyber-security.png"
import ga from "../assets/images/google-analytics.png"
import nodes from "../assets/images/nodes.png"
import { motion } from "framer-motion"

export type FeaturesProps = {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

const features = [
    {
        img: csec,
        title: "Natively Secure",
        desc: "You can combine several or even many strategies. Vishai was created to be able to adapt to your wishes.",
    },
    {
        img: ga,
        title: "Fundamental Analysis",
        desc: "AI automatically learns fundamental analysis from various trusted sources, processed and presented via UI/UX making it easy for you to use it.",
    },
    {
        img: nodes,
        title: "Multiple Exchange",
        desc: "You can add multiple Exchange accounts to Parpel.",
    },
]

function Features(props: FeaturesProps): JSX.Element {
    const { className, ...rest } = props
    return (
        <motion.div
            className={cn("flex flex-col gap-y-3", className)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            {...rest}
        >
            <p className="text-center uppercase parpeltext">main features</p>
            <h4 className="text-center text-2xl sm:text-3xl font-extrabold">
                The Parpel Features
            </h4>
            <p className="text-center text-gray-400">
                We Made <span className="parpeltext italic">Parpel</span>{" "}
                Feature Very Careful And Detailed, Making It Easy To Use
            </p>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
                {features.map((feat, i) => (
                    <motion.div
                        key={feat.title}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="flex gap-6 flex-col items-center md:gap-3 bg-purple-950/15 p-5 py-7 rounded-md backdrop-blur-sm justify-center"
                    >
                        <img className="w-12 md:w-16" src={feat.img} />
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-xl text-center">
                                {feat.title}
                            </h4>
                            <p className="text-center text-gray-400 md:text-gray-400/90">
                                {feat.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Features
