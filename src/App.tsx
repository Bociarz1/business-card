import './App.css'
import Container from './components/Container/Container'
import Nav from './components/Nav/Nav'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  
  return (
    <div className="app">
      <Nav/>
      <Container/>
    </div>
  )
}

export default App
