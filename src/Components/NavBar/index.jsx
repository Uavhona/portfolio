import styles from "./styles.module.css";

function NavBar(){
    return(
        <nav className={styles.nav_container}>
            <div className={styles.nav_left}>
                <a href="#home">Home</a>
            </div>
            <div className={styles.nav_right}>
                <a href="#about" className={styles.nav_link}>
                    <span>01.</span>About
                </a>
                <a href="#reason" className={styles.nav_link}>
                    <span>02.</span>Reason
                </a>

                <button className={styles.nav_resume_btn}>Resume</button>

            </div>
        </nav>
    )
}

export default NavBar;