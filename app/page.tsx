'use client'
import React, { useEffect, useState } from "react";
export default function Home() {

  const [RadioDisabled, SetState] = useState<boolean>(false);
  const [level, setLevel] = useState<string>('');
  const [fetching, isFetching] = useState<boolean>(false);
  const [length, setLength] = useState<number>();
  const [InputValue, setValue] = useState<string>('');
  const [Guessable, isGuessable] = useState<boolean>(false);

  useEffect(() => {
    SetState(false);
  }, []);

  const preventdefault = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const VerifyAlphabet = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Checking alphabets");
    const temp = /^[a-zA-Z]+$/.test(event.target.value);
    isGuessable(temp);
    console.log(temp);
    if (!temp) {
      setValue('');
    }
    else {
      setValue(event.target.value);
    }
  };

  function Level_Selector(level: string) {
    console.log(`Setting up game for ${level} difficulty`)
    SetState(true);
    WordFetcher(level);
    setLevel(level);
  };

  async function WordFetcher(level: string) {
    isFetching(true);
    setLevel('');
    setLength(0);
    try {
      const url = `/api/words?level=${level} `;
      console.log("Fetching data");
      const response = await fetch(url);
      if (!response.ok) {
        console.log("Error fetching data.");
        return 1;
      }
      const data = await response.json();
      console.log("data was fetched");
      setLength(data.length);
    }
    catch (error: unknown) {
      console.log(`Error: ${error} `)
    } finally {
      isFetching(false);
      console.log("Fetching complete");
    }
  };

  const common_input_css = "mr-1";
  const common_label_css = `${RadioDisabled ? 'cursor-not-allowed hidden' : 'cursor-pointer visible'} `;
  const afterRadio = `${RadioDisabled && !fetching ? 'visible' : 'hidden'} `;

  return (
    <div className="border-1 border-gray-500 p-2 rounded-md ml-auto mr-auto m-2 w-[60%]">
      <h1 className="text-center">Hello and welcome to the game of hangman</h1>
      <ul className="">
        <p className={`${RadioDisabled ? 'hidden' : ''} `}>Choose a difficulty</p>
        <li key={"easy"} ><label className={`${common_label_css} ${RadioDisabled ? '' : 'hover:text-yellow-300'} `} htmlFor="easy"><input onChange={() => Level_Selector('easy')} disabled={RadioDisabled} type="radio" name="difficulty" id="easy" value="easy" className={`${common_input_css} `} />Easy</label></li>
        <li key={"medium"} ><label className={`${common_label_css} ${RadioDisabled ? '' : 'hover:text-orange-500'} `} htmlFor="medium"><input onChange={() => Level_Selector('medium')} disabled={RadioDisabled} type="radio" name="difficulty" id="medium" value="medium" className={`${common_input_css} `} />Medium</label></li>
        <li key={"hard"} ><label className={`${common_label_css} ${RadioDisabled ? '' : 'hover:text-red-600'} `} htmlFor="hard"><input onChange={() => Level_Selector('hard')} disabled={RadioDisabled} type="radio" name="difficulty" id="hard" value="hard" className={`${common_input_css} `} />Hard</label></li>
      </ul><br />

      <p className={`${fetching ? 'visible' : 'hidden'} `}>Fetching a random word...</p>

      <h1 className={`${afterRadio} font - bold`}>The word you got on the {level} has {length} character in it.</h1>

      <form onSubmit={preventdefault} className={`mt-1 flex gap-2 ${afterRadio} `}>
        <label htmlFor="guessed_letter">Enter your Letter:</label> <input onChange={VerifyAlphabet} value={InputValue} disabled={!RadioDisabled} required maxLength={1} type="text" name="guess" id="guessed_letter" className="text-xl text-center border-1 border-white outline-none rounded-md min-w-[33px] w-[5%]" />
        <input disabled={!Guessable} onClick={() => console.log("Submitted")} type="submit" value="Check" className={`transition-color duration-300 linear font-bold border-2 border-white pl-1 pr-1 rounded-md '${Guessable ? ' cursor-pointer hover:bg-white hover:text-black' : 'Opacity-50 cursor-not-allowed text-gray-400'}`} />
      </form >
    </div >
  );
}
