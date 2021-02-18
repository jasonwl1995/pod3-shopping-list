import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
<<<<<<< HEAD
// const useEffect = React.useEffect;
=======
//const useEffect = React.useEffect;
>>>>>>> 20c834fa0008885ce4529352a467b8d42606a8aa
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    const [shoppingList, setShoppingList] = useState([]);//empty array to start
    const [shoppingItem, setShoppingItem] = useState('');
    const [shoppingItemQuantity, setShoppingItemQuantity] = useState(0); // as a number
    const [shoppingItemUnit, setShoppingItemUnit] = useState('');



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

    function postData(){
    axios({
      method: 'POST',
      url: "/list",
      data: {
        name: shoppingItem,
        quantity: shoppingItemQuantity,
        unit: shoppingItemUnit,
      }
    }).then((response) => {
      console.log(".then axios post")
    }).catch((error) => {
      console.log(error)
    })

  }



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
