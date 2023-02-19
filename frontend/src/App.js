import './css/Entry.scss';
import { useState } from 'react';
import EntryPage from "./home/Entry";
import Chat from "./chat/Chat";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import axios from "axios";
//
const socket = io.connect('http://localhost:4000');
const baseURL = 'http://localhost:3001'
const App = () => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [language, setLanguage] = useState('')
    return(
        <Router>
            <div className='App'>
                <Routes>
                    <Route
                        path=''
                        element={
                            <EntryPage
                                username={username}
                                setUsername={setUsername}
                                room={room}
                                setRoom={setRoom}
                                language={language}
                                setLanguage={setLanguage}
                                socket={socket}
                                url={baseURL}
                            />
                        }
                    />
                    {/* Add this */}
                    <Route
                        path='/chat'
                        element={<Chat username={username} room={room} url={baseURL} language={language}/>}
                    />
                </Routes>
            </div>
        </Router>
    );
}
export default App;
