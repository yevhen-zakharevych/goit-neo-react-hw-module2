import css from "./Feedback.module.css";

function Feedback({
  totalFeedback,
  positiveFeedback,
  state: { good, neutral, bad },
}) {
  return (
    <div className={css.stats}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
}

export default Feedback;
