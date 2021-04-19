import styles from "./styles/footer.module.scss"
import NavMenu from "@/components/NavMenu"
import Social from "@/components/Social"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__menu}>
                <NavMenu />
            </div>
            <Social />
            <span>
            
                React + Next.js.
            </span>
        </footer>
    )
}

export default Footer
