import { useState } from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { questionPropType } from '../../Types'
import styles from './QuestionCard.module.css';

const QuestionCard: React.FC<questionPropType> = ({ question, answer, option, totalQuestion, currentQuestion, handleSubmit }) => {

    const [selectedAns, setSelectedAns] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAns(e.target.value)
    }

    return (
        <div className={styles.card}>
            <div className={styles.questionNo}>Question: {++currentQuestion} / {totalQuestion}</div>
            <div className={styles.question} dangerouslySetInnerHTML={{ __html: question }} />
            <form className={styles.options} onSubmit={(e: React.FormEvent<EventTarget>) => handleSubmit(e, selectedAns)}>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="option" name="option" value={selectedAns} onChange={handleChange}>
                        {option.map((opt: string, ind: number) => {
                            return (
                                <div key={ind}>
                                    <FormControlLabel value={opt} control={<Radio style={{ color: 'rgba(0, 0, 0, .8)' }} required={true} />} label={opt} />
                                </div>
                            )
                        })}
                    </RadioGroup>
                </FormControl>
                <button className={styles.btn} type='submit'>Next Question</button>
            </form>
        </div>
    )
}

export default QuestionCard
