// features/user/User.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from './userSlice';

export function User() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={() => dispatch(setName('John'))}>Set Name</button>
      <button onClick={() => dispatch(setAge(30))}>Set Age</button>
    </div>
  );
}