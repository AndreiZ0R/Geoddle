import {useState} from "react";
import variables from "../../styles/variables.scss";
import styles from "./OutlinedButton.module.scss"

export default function OutlinedButton({label, onClick, extraClasses, labelColor, backgroundColor}) {
    const states = {hover: true, notHover: false};
    const [hover, setHover] = useState(states.notHover);

    const normalStyle = {
        backgroundColor: backgroundColor,
        color: labelColor,
        border: `2px solid ${labelColor}`,
        borderRadius: variables.defaultBorderRadius,
        padding: '5px 15px'
    };

    const hoverStyle = {
        backgroundColor: labelColor,
        color: backgroundColor,
        border: `2px solid ${backgroundColor}`,
        borderRadius: variables.defaultBorderRadius,
        padding: '5px 15px'
    };

    const toggleState = () => {
        setHover(!hover);
    }

    return <button className={extraClasses} style={hover === states.hover ? hoverStyle : normalStyle}
                   onMouseEnter={toggleState}
                   onMouseLeave={toggleState}
                   onClick={onClick}>
        {label}
    </button>
}