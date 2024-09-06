import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useState, useEffect } from "react";

export default function App() {
  const [counts, setCounts] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("feedback"));
    if (savedData !== null) {
      return savedData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(counts));
  }, [counts]);
  function updateFeedback(feedbackType) {
    setCounts({ ...counts, [feedbackType]: counts[feedbackType] + 1 });
  }
  function resetFeedback() {
    setCounts({ good: 0, neutral: 0, bad: 0 });
  }
  let totalFeedback = counts.good + counts.neutral + counts.bad;
  const stats = ((counts.good / totalFeedback) * 100).toFixed();
  return (
    <>
      <Description />
      <Options
        onClick={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback == 0 ? (
        <Notification />
      ) : (
        <Feedback counts={counts} totalFeedback={totalFeedback} stats={stats} />
      )}
    </>
  );
}
