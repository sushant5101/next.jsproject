import Image from "next/image";
import Script from "next/script";

export default function Home() {
  const common_input_css = "mr-1";
  const common_label_css = "hover:cursor-pointer";
  return (
    <div className="border-2 border-white p-1 rounded-md ml-auto mr-auto m-2 w-[60%]">
      <h1 className="text-center">Hello and welcome to the game of hangman</h1>
      <ul className="ml-2">
        <p>Choose a difficulty</p>
        <li><label className={`${common_label_css}`} htmlFor="easy"><input type="radio" name="difficulty" id="easy" value="easy" className={`${common_input_css}`} />Easy</label></li>
        <li><label className={`${common_label_css}`} htmlFor="medium"><input type="radio" name="difficulty" id="medium" value="medium" className={`${common_input_css}`} />Medium</label></li>
        <li><label className={`${common_label_css}`} htmlFor="hard"><input type="radio" name="difficulty" id="hard" value="hard" className={`${common_input_css}`} />Hard</label></li>
      </ul>
      <Script src="/script.ts" strategy="afterInteractive" />
    </div>
  );
}
