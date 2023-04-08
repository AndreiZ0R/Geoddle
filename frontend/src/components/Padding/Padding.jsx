import styles from "./Padding.module.scss"

export default function Padding(props) {
    return (
        <div style={{padding: props.padding}} className={styles.padding}>
            {props.children}
        </div>
    );
}