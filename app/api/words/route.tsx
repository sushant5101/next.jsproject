import { NextRequest } from "next/server";

const easy: string[] = ["house", "home"]
const medium: string[] = ["bicycle", "library"]
const hard: string[] = ["ostentatious", "nebulous"]

export async function GET(request: NextRequest) {

    const url = new URL(request.url);

    const level = url.searchParams.get('level');

    let WordToChooseFrom: string[] = [];
    let guess: number = 0;

    switch (level) {
        case 'easy':
            WordToChooseFrom = easy;
            guess = 10;
            break;
        case 'medium':
            WordToChooseFrom = medium;
            guess = 7;
            break;
        case 'hard':
            WordToChooseFrom = hard;
            guess = 5;
            break;
        default:
            return new Response(JSON.stringify({ error: `${level} is not recognize as a internal parameter!` }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    }
    const randomIndex = Math.floor(Math.random() * WordToChooseFrom.length);
    const randomWord = WordToChooseFrom[randomIndex];
    const response = {
        word: randomWord,
        length: randomWord.length,
        level: level,
        guess: guess,
    }

    return new Response(JSON.stringify(response),
        {
            status: 200,
            headers: {

                'Content-Type': 'application/json',
            },
        });

}