import Link from "next/link";
import { useContext } from "react";
import themeContext from "./themeContext";

const Navbar = () => {
    const {toggleTheme, theme} = useContext(themeContext)
    const newThemeName = theme === 'dark' ? 'light' : 'dark'
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25, gap: '5px'}}>
            <div>My Website</div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contacts">Contacts</Link>
                <button onClick={toggleTheme}>
                    Set {newThemeName} theme
                </button>
            </div>
        </div>
    )
}
export default Navbar