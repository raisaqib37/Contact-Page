import styles from './buttons.module.css';

function Button(props){
        return(
            <button className={ props.outline ? styles.secondary_btn : styles.primary_btn }>{props.icon}{props.text}</button>
        )
}
export default Button;