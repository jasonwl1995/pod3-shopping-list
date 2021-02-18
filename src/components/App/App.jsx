import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
//const useEffect = React.useEffect;
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    const [shoppingList, setShoppingList] = useState([]);
    useEffect(() => {
      // This is our `onReady` function

      // We want to fetch items, on load
        fetchList();
    }, []); 
    const fetchList = () => {
    

        axios.get('/list')
            .then(response => {
                console.log('got a response!', response.data);

                // Update our local state, with data from the server
                setShoppingList(response.data);
            })
            .catch(err => {
                console.log('ruh-roh....', err);
            });
    };



    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
