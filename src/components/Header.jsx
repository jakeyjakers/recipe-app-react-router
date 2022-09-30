import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <h2>Devmountain Eatery</h2>
      <nav className='header__links'>
        <Link to='' >
          <button>Home</button>
          </Link>
          <Link to='/newRecipe'>
          <button>Add Recipe</button>
          </Link>
      </nav>
    </header>
  );
};

export default Header;
