
"use client"
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

type ZlLinkProps = LinkProps & {
    text: string;
}

export default function ZlLink({ href, text}: ZlLinkProps) {
    const pathname = usePathname();
    console.log('pathname: ', pathname)
    return (
        <Link 
            href={href} 
            onClick={(e) => {
                if (typeof href === 'string' && pathname === href) {
                    e.preventDefault(); // 阻止跳转
                    return;
                }
            }}
        >{text}</Link>
    )
}
