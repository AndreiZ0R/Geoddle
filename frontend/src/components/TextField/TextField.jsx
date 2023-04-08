import styles from "./TextField.module.scss"

export default function TextField({label, placeholder, type, required, id, value, onChange}) {
    return <div className={styles.wrapper}>
        <label htmlFor={label}>{label}</label>
        <input onChange={onChange} value={value} id={id} type={type} placeholder={placeholder ?? ""}
               required={required ?? false}/>
    </div>
}