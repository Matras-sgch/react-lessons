import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = (props)=> {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/Profile' render={() => <Profile postData={props.state.profilePage.postData} avatar={props.state.profilePage.avatar}/>}/>
          <Route path='/Dialogs' render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData}/>}/>
          <Route path='/News' render={() => <News />}/>
          <Route path='/Music' render={() => <Music />}/>
          <Route path='/Settings' render={() => <Settings />}/>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;
