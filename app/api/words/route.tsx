import { NextRequest } from "next/server";

const easy: string[] = ["house", "home"]
const medium: string[] = ["bicycle", "library"]
const hard: string[] = ["ostentatious", "nebulous"]

export async function GET(request: NextRequest) {

    const url = new URL(request.url);

    const level = url.searchParams.get('level');

    let WordToChooseFrom: string[] = [];

    switch (level) {
        case 'easy':
            WordToChooseFrom = easy;
            break;
        case 'medium':
            WordToChooseFrom = medium;
            break;
        case 'hard':
            WordToChooseFrom = hard;
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
    }

    return new Response(JSON.stringify(response),
        {
            status: 200,
            headers: {

                'Content-Type': 'application/json',
            },
        });

}