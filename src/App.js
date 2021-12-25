import React, { useRef, useState }  from 'react';
import './App.css';
import { About } from './component/About';
import { Header } from './component/Header';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon, MDBInputGroup,
  MDBInputGroupElement, MDBRipple, MDBCardImage  } from 'mdb-react-ui-kit';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

firebase.initializeApp({
  apiKey: "AIzaSyAf-e_XlIx9VKun65OG8DX12WBlg8P_49g",
  authDomain: "superchat-74e7a.firebaseapp.com",
  projectId: "superchat-74e7a",
  storageBucket: "superchat-74e7a.appspot.com",
  messagingSenderId: "775873096803",
  appId: "1:775873096803:web:83155b3853a1905f35dc56",
  measurementId: "G-ETDRT0TVKY"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {

  const [user] =useAuthState(auth);

  return (
    <>
      <Router>
        <Header auth = {auth}></Header>
        <Routes>
          <Route exact path="/" element={
            <>
              <section>
                {user ? <ChatRoom></ChatRoom> : <SignIn></SignIn>}
              </section> 
            </>
            }>
          </Route>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/signout" element={<SignOut/>}/>
        </Routes>
        {/* <SignOut /> */}
      </Router>
      
    </>
  );
}



function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (

    <div className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
      <MDBCard className='z-depth-5 m-3 font' style={{ maxWidth: '50rem'}}>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay' style={{backgroundColor: '#2E2E2E'}}>
        <MDBCardImage style={{maxWidth: '7rem', borderRadius: '50%'}} className='img-fluid shadow-2-strong m-2' fluid position='top' />
          <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Start Chatting💬</MDBCardTitle>
          <MDBCardText className='mt-5 mb-5' style={{color: 'black'}}>
            This is the end-to-end encrypted chatting app specially designed for you. Why wait? Sign in and EXPLORE! ✨
          </MDBCardText>
          <MDBBtn rounded className="sign-in" onClick={signInWithGoogle} style={{backgroundColor: '#2E2E2E'}}>Sign In with  <MDBIcon fab icon="google"/></MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
  
    const { uid, photoURL } = auth.currentUser;
  
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
  
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main className='font'>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>
      <MDBInputGroup onSubmit={sendMessage} className='mb-3' size='lg' style={{position: 'fixed',
        bottom: '0',
        width: '100%'}}>
        <MDBInputGroupElement className='font' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" type='text' />
        <MDBBtn type="submit" disabled={!formValue}>🕊️</MDBBtn>
      </MDBInputGroup>
    </form>
  </>)
}




function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}

export default App;
