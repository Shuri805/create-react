import React from 'react';
import data from './data';
const {users, companies, products} = data;
console.log(users);

function App() {
  return (
    <div className="App">
      <h2>Product List({products.length}) </h2>
      <ul>
        {
          products.map(product =>{
            return (
              <li key = {product.id}>
                {product.name}
              </li>
            );
          })
        }
      </ul>
      </div>

      <div>
      <h2>User List</h2>
      <h2>User List({users.length}) </h2>
      <ul>
        {
          users.map(prouserduct =>{
            return (
              <li key = {user.id}>
                {user.name}
              </li>
            );
          })
        }
      </ul>
      </div>

  <div>
      <h2>Company List</h2>
      <h2>Stats</h2>
    </div>
  );
}

export default App;
