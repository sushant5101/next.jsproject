'use client'
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navigation = () => {

    const pathname = usePathname();
    const links_common_css = "p-2 m-2 border-2 rounded-md border-blue-400";
    const active_link = "font-bold border-red-800";
    const passive_link = "text-blue-300";
    if (pathname == "/unavailable") {
        return null;
    }
    return (
        <nav className="pb-4 p-3 mt-3 border-b-4 border-blue-400">
            <Link href="/" className="float-left">
                <Image src="/logo.png" alt="logo" height={40} width={40} className="rounded-full" />
            </Link>
            <Link href="/" className={`${pathname === "/" ? active_link : passive_link} ${links_common_css}`}>Home</Link>
            <Link href="/about" className={`${pathname === "/about" ? active_link : passive_link} ${links_common_css}`}>About</Link>
            <Link href="/setting" className={`${pathname.startsWith("/setting") ? active_link : passive_link} ${links_common_css}`}>Settings</Link>
            <Link href="/help" className={`${pathname === "/help" ? active_link : passive_link} ${links_common_css}`}>Help</Link>
        </nav>
    );

}