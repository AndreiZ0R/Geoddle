import styles from "./TextField.module.scss"

export default function TextField({label, placeholder, type, required, id, value, onChange, isTextArea}) {
    return <div className={styles.wrapper}>
        <label htmlFor={label}>{label}</label>
        {isTextArea ?
            <textarea name={label} id={id} cols="30" rows="10" placeholder={placeholder ?? ""} onChange={onChange}
                      value={value} required={required ?? false}/> :
            <input onChange={onChange} value={value} id={id} type={type} placeholder={placeholder ?? ""}
                   required={required ?? false}/>}
    </div>
}