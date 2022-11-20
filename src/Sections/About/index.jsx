import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About(){
    return (
        <section id="about">
            <Heading index="01" heading="About Me"></Heading>
            <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.desc}>
                     I am Uavhona Ramanugu, A post graduate who has a background in Information Technology majoring in  software development
                     from Tshwane university of Technology. I also have Java SE 8 programmer certificate from oracle.
                     I fulfilled my work integrated learning at Motionsense HD where i learnt how to create mobile applications and websites 
                     using different programming languages. I have good communication skills , I am confident and work well under manageble pressure.
                    </p>
                </div>
                <div className={styles.right}>
                    <img src="./images/bonilogo.png" alt="profile" className={styles.profile_img}></img>
                    <div className={styles.img_border}> </div>
                </div>
            </div>
        </section>
    );
}

export default About;
