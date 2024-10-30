import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const ImageUpload = lazy(() => import('./features/fileSave/components/ImageUpload'));
const MultipleImageUpload = lazy(() => import('./features/fileSave/components/MultipleImageUpload'));

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path: "images",
        element: <Suspense fallback={<div>Loading...</div>}>
          <ImageUpload />
        </Suspense>
      },
      {
        path: "image-upload",
        element: <Suspense fallback={<div>Loading...</div>}>
          <ImageUpload />
        </Suspense>
      },
      {
        path: "multiple-image-upload",
        element: <Suspense fallback={<div>Loading...</div>}>
          <MultipleImageUpload />
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
