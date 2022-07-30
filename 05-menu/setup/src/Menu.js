import React from 'react';

const Menu = ({img, alt, title, price, desc}) => {
  return (
    <article className='menu-item'>
      <img src={img} alt={alt} className="photo"/>
      <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <h4 className="price"> ${price}</h4>
        </header>
        <p className='item-info'>{desc}</p>
      </div>
    </article>);
};


export default Menu;
