import css from "./Options.module.css";

export default function Options({ onClick, totalFeedback, resetFeedback }) {
  return (
    <>
      <ul className={css.options}>
        <li>
          <button onClick={() => onClick("good")} type="button">
            Good
          </button>
        </li>
        <li>
          <button onClick={() => onClick("neutral")} type="button">
            Neutral
          </button>
        </li>
        <li>
          <button onClick={() => onClick("bad")} type="button">
            Bad
          </button>
        </li>
        {totalFeedback != 0 && (
          <li>
            <button onClick={resetFeedback}>Reset</button>
          </li>
        )}
      </ul>
    </>
  );
}
