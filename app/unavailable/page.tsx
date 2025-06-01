import Link from "next/link";
import Image from "next/image";

export default function Under_Design() {
    return (
        <div className="flex p-1 min-h-screen">
            <div className="font-bold text-3xl fixed right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%] text-center">

                <h2 className="text-blue-500">Page under design</h2>
                <Link href="/" className="hover:bg-gradient-to-r from-pink-600 to-transparent hover:border-black transition-color duration-500 linear  flex border-2 border-white p-2 m-2 rounded-md"><Image className="p-1" src="/home.png" alt="Home" width={40} height={40} /> Return Home!</Link>
                
            </div>

            <div className="h-[50%] w-[30%] flex justify-between m-auto">
                <Image src="/roller.svg" alt="scale image" width={100} height={100} className=" rotate-30 animate-[roller_4s_linear_infinite_alternate]" />
                <Image src="/design.svg" alt="scale image" width={70} height={70} className="float-right animate-[design_5s_linear_infinite_alternate]" />
            </div>
        </div>
    );
}