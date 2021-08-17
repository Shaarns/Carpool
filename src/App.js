import React from 'react';
import HomeView from './components/home/HomeView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';
import './App.css';
import Login from './components/forms/Login';
import SignUp from './components/forms/SignUp';
import EnterOtp from './components/forms/EnterOtp';
import AvailableRides from './components/rides/AvailableRides';
import Chat from './components/chat/Chat';
import UserProfile from './components/user-profile/UserProfile';
import Header from './components/home/header/Header';
import Loader from './components/loader/Loader';
import ErrorPage from './components/error-page/ErrorPage';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/'>
              <HomeView />
            </Route>
            <Route path='/loader'>
              <Loader />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/signup'>
              <SignUp />
            </Route>
            <Route exact path='/enterotp'>
              <EnterOtp />
            </Route>
            <Route exact path='/availablerides'>
              <AvailableRides />
            </Route>
            <Route exact path='/chat'>
              <Chat />
            </Route>
            <Route exact path='/profile'>
              <UserProfile />
            </Route>
            <Route path='*'>
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
