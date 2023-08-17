import style from '../styles/SocialLayout.module.css'

export const SocialLayout = ({children}) => {
  return (
    <>
      <main className={style.socialMain}>
        {children}
      </main>
    </>
  )
}
