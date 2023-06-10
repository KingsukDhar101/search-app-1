import React, { useState, useEffect, useLayoutEffect } from 'react';

export default function SearchComponent() {
  const [users, setUsers] = useState([]);
  const [searchedUser, setSearchedUser] = useState(users);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (value) {
      let filterredUser = users?.filter((userItem, index) => {
        if (
          userItem?.firstName?.toLowerCase()?.startsWith(value?.toLowerCase())
        ) {
          return userItem;
        }
      });
      if (filterredUser?.length > 0) {
        setSearchedUser(filterredUser);
      }
    } else {
      setSearchedUser(users);
    }
  };
  useLayoutEffect(() => {
    (async () => {
      const res = await fetch('https://dummyjson.com/users');
      // console.log(await res.json());
      let data = await res.json();
      let users = data?.users;
      // console.log(users);
      if (users?.length > 0) {
        setUsers(users);
        setSearchedUser(users);
      }
    })();
  }, []);

  return (
    <div className="search_container">
      <h3>Search App</h3>
      <div className="search_wrapper">
        <input
          type="text"
          placeholder="search"
          name="user_search"
          onChange={handleChange}
        />
        <div className="user_list">
          {/* {JSON.stringify(users)} */}
          {searchedUser?.length > 0 &&
            searchedUser.map((user, index) => (
              <div className="user_card">
                <div className="user_name">{user?.firstName}</div>
                {/* <div className="user_name">email</div> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
