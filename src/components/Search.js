import React, { useState } from 'react';
import data from "../product.json";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");     // STEP : 2
    
    const handleInputChange = (e) => {    // STEP : 3
        setSearchQuery(e.target.value);
    };    
  
    function searchByName(query) {      // STEP : 4
        const searchTerm = query.toLowerCase();
        const filteredData = data.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm) || item.subcategory.toLowerCase().includes(searchTerm);
        });
        return filteredData;
    }

    const searchResults = searchByName(searchQuery);  // STEP : 5
    // searchResults.sort((a, b) => parseInt(a.discount) - parseInt(b.discount));

    function Ase(){
        searchResults.sort((a, b) => parseInt(a.discount) - parseInt(b.discount));
        console.log(searchResults);
    }
    function Dse(){
        searchResults.sort((a, b) => parseInt(b.discount) - parseInt(a.discount));
        console.log(searchResults);
    }
    console.log(searchResults);

    return (
        <>
            <input type="text" value={searchQuery} onChange={handleInputChange}/>  { /* STEP : 1 */ }
            <button onClick={Ase}>Ase</button>
            <button onClick={Dse}>Dse</button>
        </>
    );
};

export default Search;
