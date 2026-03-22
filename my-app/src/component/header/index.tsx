import React from "react";
import Link from "next/link";

const linkTab = [
    { text: 'About', href: '#' },
    { text: 'Projects', href: '#' },
    { text: 'TimeLine', href: '#' },
    { text: 'Videos', href: '#' },
    { text: 'CV', href: '#' },
]

const Header = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="mx-auto flex max-w-lg items-center justify-between gap-4 px-6 pt-6 lg:pt-20">
            <a href="/">
                <img src="/avatar-2026.avif" alt="Zacchary Puckeridge" loading="lazy" width="100" height="100" className="h-6 w-6"/>
            </a>
            <div className="flex flex-row items-center justify-end gap-4">
                {
                    linkTab.map(obj => {
                        return <Link href={obj.href} key={obj.text}>{obj.text}</Link>
                    })
                }
            </div>
        </div>
    )
}

export default Header;
