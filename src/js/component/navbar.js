import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          width={90}
          title="Ir a Inicio"
          src="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png"
          alt=""
        />
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites ({store.favorites.length})
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            {store.favorites && store.favorites.length > 0 ? (
              store.favorites.map((item) => (
                <li>
                  <a className="dropdown-item" href="#">
                    {item}
                  </a>
                </li>
              ))
            ) : (
              <li>
                <a className="dropdown-item" href="#">
                  No Favorites
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
