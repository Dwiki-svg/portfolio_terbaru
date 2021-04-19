import styles from "@/components/styles/header.module.scss"
import Link from "next/link"
import MenuList from "@/components/MenuList"
import NavMenu from "@/components/NavMenu"

function Header() {
    return (
        <header id="top" className={styles.header}>
            <div className={styles.header__top}>
                <MenuList />
            </div>
            <img src="/images/logoo.svg" alt="logo" />
            <div className={styles.header__menu}>
                <NavMenu />
                {}
            </div>
        </header>
    )
}

export default Header
