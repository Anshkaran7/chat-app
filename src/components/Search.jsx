import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user...' />
        <div className='userChat'>
          <img src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className='userChatInfo'>
            <span>Ansh</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Search
