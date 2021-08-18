import { useState, useEffect } from 'react';
import InputCard from './Components/InputCard/InputCard';
import QuestionCard from './Components/QuestionCard/QuestionCard';
import ResultCard from './Components/ResultCard/ResultCard';
// import notificationConfig from './firebase'
import { Difficulty, Question } from './Types';
import fetchData from './Api';
import styles from './App.module.css';

const App = () => {

  // notificationConfig()

  const [quiz, setQuiz] = useState<Question[]>([])
  const [amount, setAmount] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.Easy)
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)

  const [showInputCard, setShowInputCard] = useState<boolean>(true)
  const [showQuestionCard, setShowQuestionCard] = useState<boolean>(false)
  const [showResult, setShowResult] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const data: Question[] = await fetchData(amount, difficulty);
      setQuiz(data)
    })()
  }, [amount, difficulty]);

  const handleInputSubmit = (e: React.FormEvent<EventTarget>) => {
    setShowInputCard(false)
    setShowQuestionCard(true)
    e.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion: Question = quiz[step];

    if (userAns === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (step !== quiz.length - 1) {
      setStep(step + 1);
    }
    else {
      setShowQuestionCard(false)
      setShowResult(true);
    }
  }

  const startAgain = () => {
    window.location.reload();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quiz App</h1>
      {showInputCard &&
        <InputCard
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          amount={amount}
          setAmount={setAmount}
          handleInputSubmit={handleInputSubmit}
        />}
      {showQuestionCard &&
        <QuestionCard
          question={quiz[step].question}
          answer={quiz[step].answer}
          option={quiz[step].option}
          totalQuestion={quiz.length}
          currentQuestion={step}
          handleSubmit={handleSubmit}
        />}
      {showResult &&
        <ResultCard
          quiz={quiz}
          score={score}
          startAgain={startAgain}
        />}
    </div>
  );
};

export default App;