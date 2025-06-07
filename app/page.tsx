'use client'
import React, { useEffect, useState } from "react";
export default function Home() {

  const [usedCharacter, SetUsedCharacter] = useState<string[]>([]);
  const [RemainingGuess, setRemainingGuess] = useState<number>(0);
  const [RadioDisabled, SetState] = useState<boolean>(false);
  const [Guessable, isGuessable] = useState<boolean>(false);
  // const [isIncorrect, incorrect] = useState<boolean>(false);
  const [fetching, isFetching] = useState<boolean>(false);
  const [isCorrect, correct] = useState<boolean>(false);
  const [InCorrect, SetInCorrect] = useState<number>(0);
  const [InputValue, setValue] = useState<string>('');
  const [Correct, SetCorrect] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const [level, setLevel] = useState<string>('');
  const [Word, SetWord] = useState<string>('');
  const [dash, setDash] = useState<string>('');


  useEffect(() => {
    SetState(false);
  }, []);

  const preventdefault = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Game_Manager();
  }

  const GameInitializer = (length: number) => {
    const temp: string[] = [''];
    for (let i = 0; i < length; i++) {
      temp[i] = "_";
    }
    setDash(temp.join(" "));
  }

  const VerifyAlphabet = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = /^[a-zA-Z]+$/.test(event.target.value);
    isGuessable(temp);
    if (!temp) {
      setValue('');
    }
    else {
      setValue(event.target.value);
    }
  };

  async function WordFetcher(Level: string) {
    SetState(true);
    isFetching(true);
    setLevel('');
    setLength(0);

    try {
      const url = `/api/words?level=${Level} `;
      console.log("Fetching data");
      const response = await fetch(url);
      if (!response.ok) {
        console.log("Error fetching data.");
        return 1;
      }
      const data = await response.json();
      console.log("data was fetched");
      setLength(data.length);
      setLevel(data.level)
      SetWord(data.word);
      setRemainingGuess(data.guess);
      GameInitializer(data.length);
    }
    catch (error: unknown) {
      console.log(`Error: ${error} `)
    } finally {
      isFetching(false);
      console.log("Fetching complete");
    }
  };

  const Used_Character_adder = (character: string) => {
    console.log('Adding a character.');
    const tempArray = [...usedCharacter];

    if (usedCharacter.includes(`${character}`)) {

      console.log("Already included");

    }
    else if (!usedCharacter.includes(character)) {

      console.log("character added");
      tempArray.push(character);

    }

    SetUsedCharacter(tempArray);
  }

  const character_DisPlayer = (index: number, character: string) => {

    const TempArray = [...dash.split(' ')];

    for (let i = 0; i < length; i++) {
      if (i === index) {
        TempArray[i] = character;
      }
    }
    setDash(TempArray.join(" "));
    console.log(isCorrect);
    console.log(InCorrect);
  };

  const State_Checker = () => {

  }

  const Game_Manager = () => {

    isGuessable(false);
    correct(false);

    SetInCorrect(0);
    const character = InputValue.toLowerCase();

    for (let i = 0; i < length; i++) {
      if (character == Word[i] && !usedCharacter.includes(character)) {
        SetCorrect(Correct + 1);
        character_DisPlayer(i, character);
      } else if (character != Word[i] && !usedCharacter.includes(character)) {
        SetInCorrect(prevCount => {
          const newCount = prevCount + 1;
          console.log('Incorrect ', newCount);
          return newCount;
        });
      }
    }
    // if (InCorrect > 0) {
    //   incorrect(true);
    // }
    setValue('');
    Used_Character_adder(character);

    // // checking for win 

    // if (Correct == length) {
    //   console.log("You found all the letter");
    // } else if (InCorrect > 0) {
    //   console.log("guess: ", RemainingGuess - 1);
    // }
  }

  const common_input_css = "mr-1";
  const common_label_css = `${RadioDisabled ? 'cursor-not-allowed hidden' : 'cursor-pointer visible'} `;
  const afterRadio = `${RadioDisabled && !fetching ? 'visible' : 'hidden'} `;

  return (
    <div className="border-1 border-gray-500 p-2 rounded-md ml-auto mr-auto m-2 w-[60%]">
      <h1 className="text-center">Hello and welcome to the game of hangman</h1>
      <ul className="">
        <p className={`${RadioDisabled ? 'hidden' : ''} `}>Choose a difficulty</p>
        <li key={"easy"} ><label className={`${common_label_css} ${RadioDisabled ? '' : 'hover:text-yellow-300'} `} htmlFor="easy"><input onChange={() => WordFetcher("easy")} disabled={RadioDisabled} type="radio" name="difficulty" id="easy" value="easy" className={`${common_input_css} `} />Easy</label></li>
        <li key={"medium"} ><label className={`${common_label_css} ${RadioDisabled ? '' : 'hover:text-orange-500'} `} htmlFor="medium"><input onChange={() => WordFetcher('medium')} disabled={RadioDisabled} type="radio" name="difficulty" id="medium" value="medium" className={`${common_input_css} `} />Medium</label></li>
        <li key={"hard"} ><label className={`${common_label_css} ${RadioDisabled ? '' : 'hover:text-red-600'} `} htmlFor="hard"><input onChange={() => WordFetcher('hard')} disabled={RadioDisabled} type="radio" name="difficulty" id="hard" value="hard" className={`${common_input_css} `} />Hard</label></li>
      </ul>

      <p className={`${fetching ? 'visible' : 'hidden'} `}>Fetching a random word...</p>

      <h1 className={`${afterRadio} font-bold`}>The word you got on the {level} difficulty has {length} characters in it.</h1><br />
      <h2 className={`${afterRadio}`}>Remaining Guesses : {RemainingGuess}</h2>
      <h1 className={`${afterRadio}`}>{dash}</h1>

      <form onSubmit={preventdefault} className={`mt-1 flex gap-2 ${afterRadio} `}>
        <label htmlFor="guessed_letter">Enter your Letter:</label> <input autoComplete="off" onChange={VerifyAlphabet} value={InputValue} disabled={!RadioDisabled} required maxLength={1} type="text" name="guess" id="guessed_letter" className="text-xl text-center border-1 border-white outline-none rounded-md min-w-[33px] w-[5%]" />
        <input disabled={!Guessable} onClick={() => { if (InputValue) Game_Manager() }} type="submit" value="Check" className={`transition-color duration-300 linear font-bold border-2 border-white pl-1 pr-1 rounded-md '${Guessable ? ' cursor-pointer hover:bg-white hover:text-black' : 'Opacity-50 cursor-not-allowed text-gray-400'}`} />
      </form >

    </div >
  );
}
