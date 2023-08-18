import { AuthLayout } from '../layout/AuthLayout'
import style from '../styles/LoginPage.module.css'

export const LoginPage = () => {
  return (
    <AuthLayout>
      <div className={style.containerLogin}>
        <h4>Iniciar Sesión</h4>
        <form className={style.formContent}>
          <p>email</p>
          <input 
            type='email'
            placeholder='email@example.com'
            name='email'
          />
          <p>password</p>
          <input 
            type='password'
            placeholder='********'
            name='password'
          />
          <div className={style.boxButtons}>
            <button disabled>Ingresar</button>
            <button>Google</button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}
