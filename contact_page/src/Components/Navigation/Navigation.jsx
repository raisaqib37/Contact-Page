import styles from "./Navigation.module.css";


function Navigation(){
    return(
        <nav>
            <div className={styles.logo}> 
            <img src="images/logo.png" alt='logo here'/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
export default Navigation;