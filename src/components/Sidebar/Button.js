import React from 'react';
import { NavLink } from 'react-router-dom';

export const Button = ({exact, route, name, icon}) => {
  return (
    <NavLink exact={exact} to ={route} className="sidebar__btn" activeClassName="sidebar__btn-active">
      <div className="sidebar__btn-content-wrapper clearfix">
        <div className="sidebar__btn-icon">
          <img src={require(`../../assets/icons/${icon}`)} width="28" height="28" alt="" />
        </div>
        <div className="sidebar__btn-name">
          {name}
        </div>
      </div>
    </NavLink>
  )
}
