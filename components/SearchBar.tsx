"use client"
import React from 'react'

const SearchBar = () => {
    const handleSeacrh = () => {

    }


  return (
   <form className='searchbar' onSubmit={handleSearch}>
    <div className='searchbar__items'>
        <SearchManufacturer  />
    </div>

   </form>
  )
}

export default SearchBar