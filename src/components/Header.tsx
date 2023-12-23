import {
    FloatingPortal,
    autoUpdate,
    flip,
    shift,
    size,
    useDismiss,
    useFloating,
    useInteractions,
    useTransitionStyles,
} from "@floating-ui/react"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { BsX } from "react-icons/bs"

export type HeaderProps = {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

const navs = [
    { text: "Wallet", href: "/wallets" },
    { text: "Explorer", href: "/explorer" },
    { text: "Whitepaper", href: "/whitepaper" },
    { text: "Road Map", href: "/road-map" },
]

function Header(props: HeaderProps): JSX.Element {
    const { className, ...rest } = props
    const [open, setOpen] = useState(false)
    const { floatingStyles, refs, context } = useFloating({
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        placement: "bottom",
        middleware: [
            shift(),
            flip(),
            size({
                apply({ rects, elements }) {
                    elements.floating.style.maxWidth =
                        rects.reference.width + "px"
                },
            }),
        ],
    })

    const dismiss = useDismiss(context)
    const { getFloatingProps, getReferenceProps } = useInteractions([dismiss])
    const { isMounted, styles } = useTransitionStyles(context, {
        duration: 100,
        initial: {
            transform: "translateY(-20px)",
            opacity: 0,
        },
    })

    return (
        <>
            <header
                className={cn(
                    "bg-stone-950 transition-all duration-200",
                    className
                )}
                ref={refs.setReference}
                {...rest}
                {...getReferenceProps()}
            >
                <div className="container-sm mx-auto py-4 px-5 text-white flex justify-between items-center">
                    <a
                        href=""
                        className="font-extrabold text-lg text-purple-600"
                    >
                        <h4>PARPEL</h4>
                    </a>
                    <nav className="hidden sm:block">
                        <ul className="flex">
                            {navs.map((nav) => (
                                <li
                                    key={nav.text}
                                    className="font-medium group"
                                >
                                    <a
                                        className="px-2.5 group-last-of-type:pr-0"
                                        href={nav.href}
                                    >
                                        {nav.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        className="sm:hidden"
                        onClick={() => setOpen((s) => !s)}
                    >
                        {open ? <BsX className="text-xl" /> : <AiOutlineMenu />}
                    </button>
                </div>
            </header>
            {isMounted ? (
                <FloatingPortal>
                    <div
                        className="z-[99] w-full"
                        style={floatingStyles}
                        ref={refs.setFloating}
                        {...getFloatingProps()}
                    >
                        <div
                            className="text-white bg-stone-950 sm:hidden"
                            style={styles}
                        >
                            <ul className="pb-3">
                                {navs.map((nav) => (
                                    <li
                                        className="text-center block"
                                        key={nav.href}
                                    >
                                        <a className="py-3 block" href="">
                                            {nav.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </FloatingPortal>
            ) : null}
        </>
    )
}

export default Header
