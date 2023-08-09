import { AppRouter } from './router/app.router'
import { BrowserRouter } from 'react-router-dom'
import { AppTheme } from './theme/app.theme'
import { Provider } from 'react-redux'
import { store } from './store/store'

const JournalApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  )
}

export default JournalApp