
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';
import Nav from './Components/Nav';

function App() {


  const loadedcoffees = useLoaderData();
  const [coffees,setCoffees] = useState(loadedcoffees);

  return (
    <div className='m-20'>
      <h1 className='text-5xl text-center font-extrabold text-amber-800'>Espresso Emporium</h1>
      <h4 
      className='text-5xl text-center font-mono text-amber-800'
      >Coffee List</h4>

      <Nav></Nav>

      <div className='grid md:grid-cols-2 gap-6 lg:m-6'>
      {
        coffees.map(coffee => <CoffeeCard
          key={coffees._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></CoffeeCard>)
      }
      </div>


    </div>
  )
}

export default App

