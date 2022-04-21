import { useEffect, useState } from 'react';
import { FormControl, Input } from '@mui/material';
import Message from './Message';
import './App.css';
import { colRef } from './firebase';
import { addDoc, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {
  const [input, setInput] = useState('')
  const [msg, setMsg] = useState([])
  const [userName, setUserName] = useState('')

  useEffect(() => {
    let q = query(colRef, orderBy('createdAt', 'desc'))

    onSnapshot(q, snapshot => {
      setMsg(snapshot.docs.map(doc => ({ id: doc.id, m: doc.data() })))
    })
  }, [])

  useEffect(() => {

    setUserName(prompt('enter your name'))
  }, [])

  const sendMsg = (e) => {
    e.preventDefault()
    addDoc(colRef, { username: userName, message: input, createdAt: serverTimestamp() })
    setInput('')
  }

  return (
    <div className="App">
      <div className='header'>
        <img className='msg-logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c526.png" alt="messenger logo" />
        <h1>Messenger</h1>
      </div>
      <form onSubmit={e => e.preventDefault()} className='form-field'>
        <FormControl className='form-inside'>
          <Input className='ip' placeholder='Message' type="text" value={input} onChange={e => setInput(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
          <IconButton className='but' type='submit' sx={{ ml: 2 }} onClick={sendMsg} disabled={!input} variant="contained">
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove className='msg-show'>
        {msg.map(({ id, m }) => <Message key={id} username={userName} message={m} />)}
      </FlipMove>
    </div>
  );
}

export default App;
