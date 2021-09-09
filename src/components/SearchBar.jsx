import React, { useState } from "react";
import "./SearchBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
  <div class="d-flex justify-content-center">
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <div className="Barra">
      <input class="form-control me-2" type="search" placeholder="City..." aria-label="Search" value={city}
        onChange={e => setCity(e.target.value)}/>
      <button class="btn btn-outline-primary" type="submit">Search</button>
      </div>
      
      {/* <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}   //Without bootstrap
      />
      <input type="submit" value="Agregar" /> */}
    </form>
  </div>
  );
}

