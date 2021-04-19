import styles from "./styles/aboutme.module.scss"
import Flip from 'react-reveal/Flip';

function AboutMe() {
    return (
        <article id="aboutme" className={styles.container}>
            <div className={styles.container__img}>
                <img
                    loading="lazy"
                    src="/images/dwiky_fix1.svg"
                    alt="aboutme-img"
                />
            </div>
            <section className={styles.container__text}>
                <div className={styles.container__text__top}>
                    <div className={styles.container__text__top__title}>
                        <h1>About Me</h1>
                    </div>
                </div>
                <Flip right>
                <p>
                I am someone who has a high enthusiasm for learning, I really like technology and I really want to know how the concept of a technology works, especially in the fields of websites, mobile, and microcontrollers.
                I am very responsible with the work I do and discipline.
                </p>
                </Flip>
            </section>
        </article>
    )
}

export default AboutMe
