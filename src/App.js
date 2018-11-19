import React, { Fragment } from "react";
import Main from "./pages/Main";
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle from './styles/global';

const App = () => (
    <Provider store={store}>
        <Fragment>
            <GlobalStyle />
            <Main />
        </Fragment>
    </Provider>
)

export default App;
