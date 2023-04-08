import styles from "./AppForm.module.scss"

export default function AppForm({textFields, submitButton, onSubmit}) {
    return <form action="" className={styles.frm} onSubmit={onSubmit}>
        <div>
            {textFields.map(textField => textField)}
        </div>
        {submitButton}
    </form>
}