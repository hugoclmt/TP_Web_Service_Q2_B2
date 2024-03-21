import './App.css'
import Gallery from './Components/Gallery.jsx'
import pics from './data.jsx'
import Search from './Components/Search.jsx'
import {useState,useEffect} from 'react'




function App() { // This is a functional component

  const [search, setSearch] = useState('');
  const [filteredPics, setFilteredPics] = useState(pics);

  useEffect(() => {
    const filtered = search ? pics.filter(pic => pic.author.toLowerCase().includes(search.toLowerCase())) : pics;
    setFilteredPics(filtered);

  }, [search])





  return (
    <div id='appH'>
      <Search onSearch={setSearch} />
      <Gallery pics={filteredPics} />
    </div> 
  )
}

export default App
