import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const FileSave = lazy(() => import('./features/fileSave/components/FileSave'));

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path: "file-save",
        element: <Suspense fallback={<div>Loading...</div>}>
          <FileSave />
        </Suspense>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
