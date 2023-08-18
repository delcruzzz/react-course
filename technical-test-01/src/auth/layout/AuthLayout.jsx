import style from '../styles/AuthLayout.module.css'

export const AuthLayout = ({children}) => {
  return (
    <>
      <main className={style.authMain}>
        {children}
      </main>
    </>
  )
}
