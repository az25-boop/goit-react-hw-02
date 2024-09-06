import s from "./Description.module.css";

export default function Description() {
  return (
    <>
      <h1 className={s.title}>Sip Happens Cafe</h1>
      <p className={s.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}
