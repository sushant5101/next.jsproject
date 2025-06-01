export default function Help() {

    return (
        <>
            <h1 className="text-5xl text-center m-3">How can we help you ?</h1>
            <div>
                <form className="flex grid justify-center text-center ml-auto mr-auto m-7 w-[50%]">

                    <label htmlFor="problem">Describe your issue: </label>
                    <textarea name="problem" rows={5} placeholder="Your issue..........." id="problem" maxLength={1000} required className="max-h-[70%] border-2 rounded-md pl-1 pr-1 outline-none resize-none"></textarea>
                    <label htmlFor="email" >Your email address: </label>
                    <input type="email" name="email" id="email" autoComplete="off" required placeholder="Example123@gmail.com" className="outline-none rounded-md pl-1 pr-1 border-2" />
                    <input type="submit" value="Send" className="hover:text-black hover:bg-yellow-400 hover:cursor-pointer transition-color duration-500 ease-in font-bold border-1 pl-1 pr-1 border-white rounded-md bg-black text-yellow-400 max-w-[50%] mt-2 mb-2 translate-y[-50%] translate-x-[50%]" />

                </form>
            </div>
        </>
    );
}