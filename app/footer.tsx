'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
    const common_css = "inline-block";
    const common_links_css = "hover:text-blue-400 hover:underline";
    const common_links = "/unavailable";
    const pathname = usePathname();

    if (pathname == "/unavailable") {
        return null;
    }
    return (
        <div className="text-gray-400  p-2 border-t-2 border-gray-400">
            <h1 className="text-yellow-400 inline-block"><Image src="/important.svg" width={20} height={20} alt="imp" className="float-left mr-1 ml-1 m-0.5" /> The page is still in development and not in its full form.</h1>
            <ul className=" flex justify-center p-2">
                <li title="Under maintenances">
                    <h6 className={`${common_css} float-left`}>
                        Socials:
                    </h6>
                    <div className={`${common_css}`}>
                        <Link href="#" className={`${common_links_css}`}>
                            <p>
                                <Image src="/fb.png" alt="fb" width={20} height={20} className="inline m-1" />
                                Facebook
                            </p>
                        </Link>
                        <Link href="#" className={`${common_links_css}`}>
                            <p>
                                <Image src="/insta.png" alt="fb" width={20} height={20} className="inline m-1" />
                                Instagram
                            </p>
                        </Link>
                    </div>
                </li>
            </ul>
            <h2>Code available in github <a target="blank" href="https://github.com/sushant5101/next.jsproject"><b className={`${common_links_css}`}>Github</b></a> </h2>
            <h6>&#169; 2025 Next.js Practice Project. All Rights Reserved.</h6>
            <h6 title="Not available right now">|<Link href={`${common_links}`} className={`${common_links_css}`}> Privacy Policy </Link>|<Link href={`${common_links}`} className={`${common_links_css}`}> Terms of Service </Link>|</h6>
        </div >
    );
}