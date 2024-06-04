import React from 'react'
import { NavLink } from 'react-router-dom'
import categories from "../../data/categorias.json";

export const Navbar = () => {
  return (
    <nav>
        <ul className="navBar">
            <li>
              <NavLink to="/" activeclassname="active">Inicio</NavLink>
            </li>
            {
              categories.map((category) => {
                  return (
                    <li key={category.id}>
                      <NavLink to={`/category/${category.id}`} activeclassname="active">
                        {category.nombre}
                      </NavLink>
                    </li>
                  )
              })
            }
        </ul>
    </nav>
  )
}
