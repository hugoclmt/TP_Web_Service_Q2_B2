import './App.css'
import Gallery from './Components/Gallery.jsx'
import pics from './data.jsx'

function App() { // This is a functional component
  return (
    <div id='appH'>
      <Gallery pics={pics} />
    </div> 
  )
}

export default App
