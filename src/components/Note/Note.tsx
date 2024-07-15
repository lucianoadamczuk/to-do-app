import styles from "./Note.module.css";
interface Props {}
export default function Note({}: Props) {
  return (
    <article className={styles.Note}>
      <div className={styles.core}>
        <div>
          <h3>Note Title</h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nulla
            quibusdam totam, deserunt officiis, quae doloribus a nam cupiditate
            perferendis dignissimos quaerat odio reprehenderit optio debitis
            praesentium earum ipsam amet.
          </p>
        </div>
      </div>
      {/* dates */}
      <div className={styles.datesContainer}>
        <h6>Date of creation</h6>
        <h6>Date of finalization</h6>
      </div>
    </article>
  );
}
