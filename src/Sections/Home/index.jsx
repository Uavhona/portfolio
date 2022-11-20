import styles from "./styles.module.css";

function Home(){
    return(
        <section className={styles.home_section} id="home">
            <p className={styles.greet}>Hi there, My name is</p>
            <hl className={styles.heading_1}>Uavhona Ramanugu</hl>
            <h1 className={styles.heading_2}> A developer</h1>
            <p className={styles.desc}>
                who constantly seeks out innovative solutions to everyday problems and want to learn 
                new methods to approach technical situations and implement solutions that will positively impact the world.
            </p>
            <a href="#reason">
                <button className={styles.btn}>Check my motive!</button>
            </a>

        </section>
    )
}

export default Home;