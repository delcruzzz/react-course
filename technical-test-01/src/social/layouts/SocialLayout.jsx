import { Navbar } from '../components/Navbar'
import style from '../styles/SocialLayout.module.css'

export const SocialLayout = ({children}) => {
  return (
    <>
      {/* navbar section */}
      <Navbar />

      {/* main section */}
      <main className={style.socialMain}>
        {children}
      </main>
    </>
  )
}
