import styles from "./FilledButton.module.scss";

export default function FilledButton({label, onClick, extraClasses}) {
    return <button onClick={onClick} className={`${styles.btn} ${extraClasses}`}>{label}</button>
}