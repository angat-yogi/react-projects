import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [dishes, setDishes]=useState(items);
  // console.log(dishes)
  const allcategories = ['all', ...new Set(items.map(item=>item.category))]
  // console.log(allcategories)
  const [categories, setCategories]=useState(allcategories)

  // const [categories, setCategories]=[...new Set(items.map(item)=>{item.category})];

  const filterByCategories = (category)=>{
    if(category==='all'){
      setDishes(items);
      return;
    }
    else{
      const newDishes = items.filter((item)=>item.category===category)
      setDishes(newDishes);
      return;
    }
    };
  
  return <main>
    <section className='menu section'>
  <div className='title'>
    <h2>our menu</h2>
    <div className='underline'></div>
  </div>
  {/* <div className='btn-container'> */}
  {/* <button type='button' className='filter-btn' onClick={()=>filterByCategories('all')}>all</button>
<button type='button' className='filter-btn' onClick={()=>filterByCategories('breakfast')}>breakfast</button>
<button type='button' className='filter-btn' onClick={()=>filterByCategories('lunch')}>lunch</button>
<button type='button' className='filter-btn' onClick={()=>filterByCategories('shakes')}>shakes</button>
  </div>
  <div className='section-center'>

  {
    dishes.map((dish)=>{
      return <Menu key={dish.id} {...dish}/>
    })
  }
  </div> */}
  <Categories categories={categories} filterByCategories={filterByCategories}/>
 { dishes.map(
    ((dish)=> 
    {
      return <Menu key={dish.id} {...dish}/>
    }
    )
  )
 }
  {/* <Menu dishes={dishes}/> */}
  {/* <Menu items={dishes} /> */}

    </section>
  </main>
}

export default App;
