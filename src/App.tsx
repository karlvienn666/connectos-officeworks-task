import { useOutlet } from 'react-router'
import './App.css'
import { Layout } from './shared/components/Layout'

const App: React.FC = () => {

  const outlet = useOutlet();

  return (
    <Layout>
      {outlet || <p>Hi and welcome to File Saving Activity! Navigate to File Saving for the Main Program</p>}
    </Layout>
  )
}

export default App