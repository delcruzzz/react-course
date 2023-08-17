import { Link } from 'react-router-dom'
import style from '../styles/Navbar.module.css'

export const Navbar = () => {
  return (
    <header className={style.navbarHeader}>
      <div className={style.containerNavbar}>
        <section className={style.brandSection}>
          <Link to='/'>delcruz</Link>
        </section>
        <nav className={style.navigationSection}>
          <Link to='/' className={style.linkNavigation}>home</Link>
          <Link to='/' className={style.linkNavigation}>posts</Link>
        </nav> 
      </div>
    </header>
  )
}
