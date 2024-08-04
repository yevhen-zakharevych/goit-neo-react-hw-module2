import { useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

function App() {
  const initialState = JSON.parse(localStorage.getItem("feedback"));
  const getInitialState = () => {
    if (initialState) {
      return initialState;
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  };

  const [state, setState] = useState(getInitialState());
  const totalFeedback = state.good + state.neutral + state.bad;
  const positiveFeedback = Math.round((state.good / totalFeedback) * 100);

  const updateFeedback = (key) => {
    const newState = {
      ...state,
      [key]: state[key] + 1,
    };
    setState(newState);
    localStorage.setItem("feedback", JSON.stringify(newState));
  };

  const resetFeedback = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        handler={updateFeedback}
        totalFeedback={totalFeedback}
        resetHandler={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          state={state}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

export default App;
