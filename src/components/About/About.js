import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const About = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h3>about section </h3>
            <small>{user?.userEmail}</small>
        </div>
    );
};

export default About;