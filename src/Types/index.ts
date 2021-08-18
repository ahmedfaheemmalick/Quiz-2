export enum Difficulty {
    Easy = 'easy',
    Medium = 'medium',
    Difficult = 'Difficult',
}

export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type Question = {
    question: string
    answer: string
    option: string[]
}

export type inputPropType = {
    difficulty: Difficulty
    setDifficulty: (difficulty: Difficulty) => void
    amount: number
    setAmount: (amount: number) => void
    handleInputSubmit: (
        e: React.FormEvent<EventTarget>,
        totalQuestion: number,
        difficulty: string
    ) => void
}

export type questionPropType = {
    question: string
    answer: string
    option: string[]
    totalQuestion: number
    currentQuestion: number
    handleSubmit: (
        e: React.FormEvent<EventTarget>,
        answer: string,
    ) => void
}

export type resultPropType = {
    quiz: Question[]
    score: number
    startAgain: () => void
}