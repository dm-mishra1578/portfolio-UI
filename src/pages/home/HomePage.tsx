import React, { useContext } from 'react'
import PageLayout from '../../components/layouts/PageLayout'
import { GlobalContext } from '../../context/GLobalProvider';

const HomePage = () => {
  const { count, setCount } = useContext(GlobalContext);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
    alert(`Hello, count is: ${count + 1}`);
  };

  return (
    <PageLayout>
    <div>HomePage</div> 
    {/* <div>
      <h1>Count is: {count}</h1>
      <button onClick={increment}>Click</button>
      <h1>This is my home page</h1>
    </div> */}
</PageLayout>
  )
}

export default HomePage