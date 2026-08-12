import Sidebar from "../components/foryou/Sidebar"
import Search from "../components/foryou/Search"
import styles from '../styles/for-you/ForYou.module.css'

function RootLayout ({ children }){
    return (<div>
        <Sidebar />
        <div className={styles.wrapper}>
        <Search />
        {children}
        </div>
    </div>
    )
}

export default RootLayout;