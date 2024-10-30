import { useOutlet } from 'react-router'
import './App.css'
import { Layout } from './shared/components/Layout'
import { Home } from './features/home/components/Home';

const App: React.FC = () => {

  const outlet = useOutlet();

  return (
    <Layout>
      {outlet || <Home />}
    </Layout>
  )
}

export default App