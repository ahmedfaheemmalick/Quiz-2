import React from "react";
import { Difficulty, inputPropType } from "../../Types";
import { Select, InputLabel, FormControl, MenuItem } from "@material-ui/core";
import styles from "./InputCard.module.css";


const InputCard: React.FC<inputPropType> = ({ difficulty, setDifficulty, amount, setAmount, handleInputSubmit }) => {

  const questions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  return (
    <div>
      <form
        onSubmit={(e: React.FormEvent<EventTarget>) =>
          handleInputSubmit(e, amount, difficulty)
        }
      >
        <div className={styles.card}>
          <div className={styles.configuration}>
            <FormControl className={styles.form_control} variant="outlined" fullWidth>
              <InputLabel
                className={styles.input_label}
                id="demo-simple-select-outlined-label"
              >
                No of Questions
              </InputLabel>
              <Select
                className={styles.input_label}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={amount}
                defaultValue={amount}
                required
                onChange={(event) => setAmount(Number(event.target.value))}
                label="No of Questions"
              >
                {questions.map((question: number, ind: number) => (
                  <MenuItem key={ind} value={question}>{question}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={styles.configuration}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel
                className={styles.input_label}
                id="demo-simple-select-outlined-label"
              >
                Difficulty Level
              </InputLabel>
              <Select
                className={styles.input_label}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={difficulty}
                defaultValue={difficulty}
                required
                onChange={(event) => setDifficulty(event.target.value as Difficulty)}
                label="Difficulty Level"
              >
                <MenuItem value={Difficulty.Easy}>Easy</MenuItem>
                <MenuItem value={Difficulty.Medium}>Medium</MenuItem>
                <MenuItem value={Difficulty.Difficult}>Difficult</MenuItem>
              </Select>
            </FormControl>
          </div>
          <button className={styles.btn} type='submit'>Start Quiz</button>
        </div>
      </form>
    </div>
  );
};

export default InputCard;
