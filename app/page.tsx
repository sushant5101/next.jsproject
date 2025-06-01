import Script from "next/script";

export default function Home() {
  const common_input_css = "mr-1";
  const common_label_css = "hover:cursor-pointer";
  return (
    <div className="border-1 border-gray-500 p-2 rounded-md ml-auto mr-auto m-2 w-[60%]">
      <h1 className="text-center">Hello and welcome to the game of hangman</h1>
      <ul className="">
        <p>Choose a difficulty</p>
        <li ><label className={`${common_label_css} hover:text-yellow-300`} htmlFor="easy"><input type="radio" name="difficulty" id="easy" value="easy" className={`${common_input_css}`} />Easy</label></li>
        <li ><label className={`${common_label_css} hover:text-orange-500`} htmlFor="medium"><input type="radio" name="difficulty" id="medium" value="medium" className={`${common_input_css}`} />Medium</label></li>
        <li ><label className={`${common_label_css} hover:text-red-600`} htmlFor="hard"><input type="radio" name="difficulty" id="hard" value="hard" className={`${common_input_css}`} />Hard</label></li>
      </ul><br />

      <form className="flex gap-2">
        <label htmlFor="guessed_letter">Enter your Letter:</label> <input maxLength={1} type="text" name="guess" id="guessed_letter" className="text-xl text-center border-1 border-white outline-none rounded-md min-w-[33px] w-[5%]" />
        <input type="submit" value="Check" className="hover:bg-white hover:text-black transition-color duration-300 linear font-bold border-2 border-white pl-1 pr-1 rounded-md cursor-pointer" />
      </form>
      <Script>
        
      </Script>
    </div>
  );
}
