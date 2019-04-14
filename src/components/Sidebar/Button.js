import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({route, name, icon}) => {
  return (
    <Link to ={route}>
      <div className="sidebar__btn clearfix">
        <div className="sidebar__btn-icon">
          <img src={require(`../../assets/icons/${icon}`)} width="28" height="28" alt="" />
        </div>
        <div className="sidebar__btn-name">
          {name}
        </div>
      </div>
    </Link>
  )
}
