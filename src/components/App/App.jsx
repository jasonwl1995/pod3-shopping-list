import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
//const useEffect = React.useEffect;
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

    const addItem = (evt) => {
      evt.preventDefault(evt);
      axios({
        method: 'POST',
        url: "/list",
        data: {
          name: shoppingItem,
          quantity: shoppingItemQuantity,
          unit: shoppingItemUnit,
        }
      }).then((response) => {
        console.log(".then axios post", response)
        fetchList();
      }).catch((error) => {
        console.log('Post Failed: ', error)
      });
    }
//where else does postData run?
  //   function postData(){
  //   axios({
  //     method: 'POST',
  //     url: "/list",
  //     data: {
  //       name: shoppingItem,
  //       quantity: shoppingItemQuantity,
  //       unit: shoppingItemUnit,
  //     }
  //   }).then((response) => {
  //     console.log(".then axios post")
  //   }).catch((error) => {
  //     console.log(error)
  //   })

  // }



    return (
        <div className="App">
            <Header />
            <main>
                <p>Add an item</p>
            </main>
            
            <form onSubmit={addItem}>
              <div>Item: 
                <input
                  value={shoppingItem}
                  type="text"
                  placeholder="Item Name"
                  onChange={evt => setShoppingItem(evt.target.value)}
                />
                </div>
            
                <span>Quantity: </span>
                <input 
                  value={shoppingItemQuantity}
                  type="number"
                  placeholder="Quantity"
                  onChange={evt => setShoppingItemQuantity(evt.target.value)}
                />
                
                <span> Unit: </span>
                <input 
                  value={shoppingItemUnit}
                  type="text"
                  placeholder="Unit"
                  onChange={evt => setShoppingItemUnit(evt.target.value)}
                />
                
                <button type="submit">Save</button>
            </form>
            <h2>Shopping List</h2>


            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>th element</th>
                </tr>
              </thead>
                  <tbody>
                    {shoppingList.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        <td>not sure what goes here</td>
                        <button type="button">Buy</button>
                        <button type="button">Remove</button>
                      </tr>
                    ))}
                  </tbody>
              </table>
        </div>
    );
}

export default App;
