import Image from "next/image";

export default function Profile_Setting() {
    return (
        <div>
            <h1>Profile</h1><hr />
            <span className="inline-block min-w-[100%] max-w-[70%] rounded-md m-1 border-2 border-white">
                <span className="float-left inline-block"><Image src="/default.png" width={70} height={70} alt="Profile picture" className="rounded-full m-1 border-2 border-white" /></span>
                <span className="p-2"><h1>Name</h1></span>
            </span>
        </div>
    );
}