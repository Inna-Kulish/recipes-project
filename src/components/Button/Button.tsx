import styles from "./Button.module.scss";

interface ButtonProps {
    name: string;
}

const Button = ({name}: ButtonProps) => {
    return (
        <button className={styles.btn}>{name}</button>
    )
}

export default Button;