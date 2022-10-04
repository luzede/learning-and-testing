import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './index.css'

const useNotes = (url) => {
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    axios.get(url).then((res) => {
      setNotes(res.data)
    })
  }, [url])
  
  return notes
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const [values, setValues] = useState([])

  const url = BACKEND_URL
  const notes = useNotes(url)

  const handleClick = () => {
    setCounter(counter + 1)
    setValues(values.concat(counter))
  }

  return (
    <div className='container'>
      Hello Webpack {counter} clicks
      <button onClick={handleClick}>
        press
      </button>
      <div>{notes.length} notes on server {url}</div>
    </div>
  )
}
export default App