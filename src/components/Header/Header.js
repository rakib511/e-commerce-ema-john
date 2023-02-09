import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch((error) => console.log(error));
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? <button onClick={handleLogOut}>signOut</button>
                        :
                        <>
                            <Link to="/login">login</Link>
                            <Link to="/registration">registration</Link>
                        </>
                }
                <small className='text-success'>{user?.email}</small>

            </div>
        </nav>
    );
};

export default Header;