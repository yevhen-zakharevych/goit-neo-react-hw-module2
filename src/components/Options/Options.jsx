import css from "./Options.module.css";

function Options({ handler, totalFeedback, resetHandler }) {
  return (
    <div className={css.actions}>
      <button onClick={() => handler("good")}>Good</button>
      <button onClick={() => handler("neutral")}>Neutral</button>
      <button onClick={() => handler("bad")}>Bad</button>
      {!!totalFeedback && <button onClick={resetHandler}>Reset</button>}
    </div>
  );
}

export default Options;
