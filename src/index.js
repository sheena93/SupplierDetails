import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SupplierStats from './SupplierStats';
import * as serviceWorker from './serviceWorker';
import Container from "./Container";
import {BasePage} from "./BasePage/BasePage";

ReactDOM.render(
    <React.StrictMode>
        <BasePage>
            <Container>
                <SupplierStats/>
            </Container>
        </BasePage>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
