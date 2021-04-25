import React from 'react';
import {NavLink} from 'react-router-dom'

const MenuItem = (props) => {
    return (
            <li>
            <NavLink to={props.pathname}>{props.children}</NavLink>
            </li>
    );
};

export default MenuItem;