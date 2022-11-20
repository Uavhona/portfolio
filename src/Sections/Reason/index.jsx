import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function Reason(){
    return(
        <section id="reason">
             <Heading index="02" heading="Why at SovTech?"></Heading>
             <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.desc}>
                     I want to be a developer at SovTech because it's an award winning, end-to-end custom software development 
                     company which design,builds,deploy, and maintains mobile and web applications, Therefor i stand a good chance 
                     of gaining more software deveopment experience while learning from the best I.T professionals. 
                    </p>
                </div>
                <div className={styles.right}>
                    <img src="./images/htmlpic.svg" alt="profile" className={styles.profile_img}></img>
                    <div className={styles.img_border}> </div>
                </div>
            </div>
        </section>
       
        
    );
}

export default Reason;