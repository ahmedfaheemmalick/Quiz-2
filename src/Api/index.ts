import { Difficulty, Quiz } from '../Types'

const baseUrl = `https://opentdb.com/api.php?`

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);

const fetchData = async (amount: number, difficulty: Difficulty) => {
    const data = await fetch(`${baseUrl}amount=${amount}&difficulty=${difficulty}&type=multiple`)
    const { results } = await data.json();
    return results.map((question: Quiz) => ({
        question: question.question,
        answer: question.correct_answer,
        option: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}

export default fetchData