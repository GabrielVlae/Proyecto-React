import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const Navbar = () => {

  let [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriasRef = collection(db, "categorias");
    getDocs(categoriasRef)
      .then((res) => {
        setCategories(res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        }));
      })
  }, [])

  return (
    <nav>
        <ul className="navBar">
            <li className="nav-item">
              <NavLink to="/" activeclassname="active" className="nav-link">Inicio</NavLink>
            </li>
            {
              categories.map((category) => {
                  return (
                    <li className="nav-item" key={category.id}>
                      <NavLink key={category.id} to={`/category/${category.id}`} activeclassname="active" className="nav-link">
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
