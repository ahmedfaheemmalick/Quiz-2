import { resultPropType } from '../../Types'
import styles from './ResultCard.module.css'

const ResultCard: React.FC<resultPropType> = ({ quiz, score, startAgain }) => {
    return (
        <div className={styles.card}>
            <h1 className={styles.result}>Result</h1>
            <div className={styles.score}>
                <h2>Total :</h2>
                <h2>{quiz.length}</h2>
            </div>
            <div className={styles.score}>
                <h2>Your Score :</h2>
                <h2>{score}</h2>
            </div>
            <div className={styles.score}>
                <h2>Percentage :</h2>
                <h2>{(score / quiz.length) * 100}%</h2>
            </div>
            <button className={styles.btn} type='submit' onClick={startAgain}>Start Again</button>
        </div>
    )
}

export default ResultCard
