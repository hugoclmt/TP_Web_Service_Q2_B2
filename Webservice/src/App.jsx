import './App.css'
import Gallery from './Components/Gallery.jsx'
import pics from './data.jsx'
import Search from './Components/Search.jsx'
import InputBtn from './Components/Input.jsx'

import {useState,useEffect} from 'react'

function App() { // This is a functional component

  const [showIds, setShowIds] = useState(true) //Hooks pour gerer l'option de l'user -> variable initial, fct pour le changer = useState('')
  

  const [search, setSearch] = useState(''); //Hooks pour gerer la recherche de l'user -> variable initial, fct pour le changer = useState('')
  const [filteredPics, setFilteredPics] = useState(pics); //Hooks pour gerer les photos filtrées -> variable initial, fct pour le changer = useState('')  

  useEffect(() => { //Hook pour filtrer les photos en fonction de la recherche de l'user
    const filtered = search ? pics.filter(pic => pic.author.toLowerCase().includes(search.toLowerCase())) : pics; //Fonction pour filtrer les photos en fonction de la recherche de l'user
    setFilteredPics(filtered); //Fonction pour changer les photos filtrées
  }, [search]) //Hook pour filtrer les photos en fonction de la recherche de l'user


  return (
    <div id='appH'>
      <Search onSearch={setSearch} /> 
      <InputBtn showIds={showIds} setShowIds={setShowIds} />
      <Gallery pics={filteredPics} showIds={showIds} />
    </div> 
  )
}

export default App
