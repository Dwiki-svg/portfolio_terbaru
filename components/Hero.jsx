import styles from "./styles/hero.module.scss"
import Social from "@/components/Social"

function Hero() {
    return (
        <>
            <article className={styles.hero}>
                <section className={styles.hero__titles}>
                    <div className={styles.hero__titles__moving}>
                        <p>
                            <span>HELLO,</span> INTRODUCE ME DWIKY FIRMANSYAH
                        </p>
                        <h1>I'am Fullstack Developer</h1>
                        <h2>
                            Node.js / React.js / Next.js / Svelte.js /
                            Express.js / Codeigniter / Robotic / Bootstrap / Tailwind / Arduino / Raspberry / PLC (Siemens) / Electronics Development / Tensor Flow / Fuzzy Logic / Machine Learning /
                            MATLAB / Design Mechanical (Autocad, Solidworks) / Mysql / MongoDB
                        </h2>
                        <div className={styles.hero__titles__social}>
                            <Social />
                        </div>
                    </div>
                </section>
                <section className={styles.hero__img}>
                    <img src="/images/dwiky_fix1.svg" alt="dwiky" />
                </section>
            </article>
        </>
    )
}

export default Hero
