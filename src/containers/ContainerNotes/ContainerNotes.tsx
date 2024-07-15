import styles from "./ContainerNotes.module.css";
import { Note } from "../../components";

interface Props {}
export default function ContainerNotes({}: Props) {
  return (
    <section className={styles.ContainerNotes}>
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </section>
  );
}
