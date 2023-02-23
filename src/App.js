import { createContext, useState } from 'react';
import ParentComponent from './ParentComponent';


const UserStorage = createContext()

// console.log(UserContext)


function App() {
  const [state, setstate] = useState('hello')

  return (
    <div className="App">
      <UserStorage.Provider value={state} >
        <h1>{state}</h1>
        <ParentComponent />
      </UserStorage.Provider>


    </div>
  );
}

export { UserStorage };

export default App;
