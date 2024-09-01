import css from "./Feedback.module.css";
export default function Feedback({
  counts: { good, neutral, bad },
  totalFeedback,
  stats,
}) {
  return (
    <ul className={css.list}>
      <li>Good feedback: {good}</li>
      <li>Neutral feedback: {neutral}</li>
      <li>Bad feedback: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {stats}%</li>
    </ul>
  );
}
