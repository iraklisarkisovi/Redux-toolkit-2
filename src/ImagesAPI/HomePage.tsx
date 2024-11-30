import React, { useEffect } from 'react'
import { fetchUsers } from '../Components/Redux/actions';
import { useAppDispatch, useAppSelector } from '../Components/Hooks/ReduxHook';
import { decrement, increment } from '../Components/Redux/Main.slice';

const HomePage:React.FC = () => {
    const {count, error, isloading, users} = useAppSelector(state=> state.counter);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(fetchUsers())
    }, [dispatch])
  
  
    if(isloading) return <h1>loading...</h1>
  
  return (
    <div> 
        <br />
        <hr />
        <br />
        <h1>hello!</h1>
        {users.map(({id, name, email}) => (


        <div key={id}>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <br/>
        </div>
        ))}
        {error && <h1>{error}</h1>}
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
  </div>
  )
}

export default HomePage
