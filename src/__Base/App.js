import React from 'react';
import { Provider } from "react-redux";
import store from "../Context/store"
import '../Styles/App.css';
import AppRouter from '../Routes/AppRouter';
import { isLoggedIn } from '../Context/Middleware';

isLoggedIn(store)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

export default App;
