import Link from "next/link";
import Image from "next/image";

export default function Under_Design() {
    return (
        <div className="flex p-1 min-h-screen">
            <div className="font-bold text-3xl fixed right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%]">

                <h2 className="text-blue-500">Page under design</h2>
                <Link href="/" className="m-auto hover:bg-gradient-to-r from-pink-600 to-transparent min-w-[149px] max-w-[160px] text-center transition-color duration-500 linear border-2 border-white flex p-1 m-2 rounded-md"><Image className="p-1" src="/home.png" alt="Home" width={40} height={40} /> Return</Link>
                
            </div>

            <div className="h-[50%] w-[30%] flex justify-between m-auto">
                <Image src="/roller.svg" alt="scale image" width={100} height={100} className=" rotate-30 animate-[roller_4s_linear_infinite_alternate]" />
                <Image src="/design.svg" alt="scale image" width={70} height={70} className="float-right animate-[design_5s_linear_infinite_alternate]" />
            </div>
        </div>
    );
}