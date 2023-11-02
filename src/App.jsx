import './App.css'
import FooterBodyInformation from './TagsContainers/FooterApp'
import MainBodyInformation from './TagsContainers/MainApp'
import NavBar from './TagsContainers/NavBar'
function App() {
  return (
      <div className='body_app_container'>
        <NavBar/>
        <MainBodyInformation/>
        <FooterBodyInformation/>
        </div>
  )
}

export default App
