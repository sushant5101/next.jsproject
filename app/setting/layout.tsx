'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingLayout({ children }: { children: React.ReactNode }) {
    const setting_list_css = "hover:bg-gray-500 m-1 p-1 rounded-md block";
    const img_common_css = "inline overflow-hidden"
    const pathname = usePathname();
    const hr_common_css = "w-[50%] mt-3";
    const active_link = "bg-gray-900";
    return (
        <div className="m-4 p-2">

            <h3 className="font-medium text-xl">Settings</h3>

            <div className="bg-gray-900 p-3 rounded-md">
                <h6 className="text-gray-400">General</h6><hr />
                <div className="flex">
                    <div className="bg-gray-500/50 mt-1 rounded-md p-1 w-1/5 max-w-[259px] min-w-[140px]">
                        <ul>
                            <Link href="/setting/profile" className={`${pathname.endsWith('profile') ? active_link : null} ${setting_list_css}`}><Image className={`${img_common_css}`} src="/profile.png" alt="profile" width={20} height={20} /> Profile</Link>
                            <Link href="/setting/account" className={`${pathname.endsWith('account') ? active_link : null} ${setting_list_css}`}><Image className={`${img_common_css}`} src="/account.png" alt="acc" width={20} height={20} /> Account</Link>
                            <Link href="/setting/display" className={`${pathname.endsWith('display') ? active_link : null} ${setting_list_css}`}><Image className={`${img_common_css}`} src="/appearance.png" alt="Appearance" width={20} height={20} />Appearance / Display</Link>
                            <Link href="/setting/notification" className={`${pathname.endsWith('notification') ? active_link : null} ${setting_list_css}`}><Image className={`${img_common_css}`} src="/notification.png" alt="Notification" width={20} height={20} />Notification</Link>
                        </ul>
                    </div>
                    <div className="bg-gray-500 rounded-md m-1 w-full p-1 float-right">
                        {children}
                    </div>
                </div>
            </div>

            <div className="text-red-500 font-bold flex"> <hr className={`${hr_common_css}`} /><h2>Danger_Zone</h2><hr className={`${hr_common_css}`} /></div>

            <div className="bg-red-800/40 p-3 mt-1 rounded-md">
                <h6 className="text-gray-400">Advance</h6><hr />
                <div className="bg-gray-700/30 p-2 rounded-md mt-1">
                    <Link className="hover:bg-red-900 w-full inline-block p-2 rounded-md" href="">
                        <h6>Delete account</h6>
                    </Link>
                </div>
            </div>

        </div>
    );
}