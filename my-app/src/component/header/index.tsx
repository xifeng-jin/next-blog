import ZlLink from "./ZlLink";

const linkTab = [
    { text: 'Blog', href: '/blog' },
    { text: 'About', href: '/about' },
    { text: 'Projects', href: '#' },
    { text: 'TimeLine', href: '#' },
    { text: 'Videos', href: '#' },
    { text: 'CV', href: '#' },
]

const Header = () => {
    return (
        <div className="mx-auto flex max-w-lg items-center justify-between gap-4 px-6 pt-6 lg:pt-20">
            <a href="/">
                <img src="/avatar-2026.avif" alt="Zacchary Puckeridge" loading="lazy" width="100" height="100" className="h-6 w-6"/>
            </a>
            <div className="flex flex-row items-center justify-end gap-4">
                {
                    linkTab.map(obj => {
                        return <ZlLink href={obj.href} key={obj.text} text={obj.text}></ZlLink>
                    })
                }
            </div>
        </div>
    )
}

export default Header;
