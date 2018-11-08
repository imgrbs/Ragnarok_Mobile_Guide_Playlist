import 'bootstrap/dist/css/bootstrap.min.css';
import './inject.css'
import * as serviceWorker from './serviceWorker';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const Root = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister();
