import { useEffect, useState } from "react";
import   axios  from 'axios'
import OrderView from "./components/OrderView";

const App = () => {
  const [orders,setOrders]= useState([])
  useEffect(() => {
    const url = 'https://backend-5t9o41z4n-nurmohammad83.vercel.app/orders'
    // Fetch orders from the server
    axios
      .get(url)
      .then((response) => {
        setOrders(response.data);
      
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center font-bold mt-4">Anti Blue Ray Glasses </h1>
      <OrderView orders={orders}/>
    </div>

  );
};

export default App;
