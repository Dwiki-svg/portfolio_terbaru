import Link from "next/link"

function NavMenu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="#aboutme">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="#skills">
                        <a>Skills</a>
                    </Link>
                </li>
                <li>
                    <Link href="#projects">
                        <a>Project</a>
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu
