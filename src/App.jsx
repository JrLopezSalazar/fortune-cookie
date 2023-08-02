import './App.css'
import phrases from './db/phrases.json'
import { useState } from 'react'
import { getRandom } from'./utils/random'
import PhraseBox from './components/PhraseBox'




const listBg = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  

  const [phraseData, setPhraseData] = useState(getRandom(phrases))
  const [currentBg, setCurrentBg] = useState(getRandom(listBg))

  const handleChangePhrase = () => {
      setPhraseData(getRandom(phrases))
      setCurrentBg(getRandom(listBg))
  }



  return (
    <>
      <main className={`App ${currentBg}`}>
        <PhraseBox 
        handleChangePhrase={handleChangePhrase}
        phraseData={phraseData} 
        />

      </main>
      
    </>
  )
}

export default App
