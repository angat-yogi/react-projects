import React from 'react';

const Categories = ({categories, filterByCategories}) => {
  // const {categories, filter}=props
  return <>
  <div className='btn-container'>
{
  categories.map((category, index)=>{
    return (
      <button key={index} type="button" className='filter-btn' onClick={()=>filterByCategories(category)}>
        {category}
      </button> 
    )
  })
}
</div>
  </>;
};

export default Categories;
