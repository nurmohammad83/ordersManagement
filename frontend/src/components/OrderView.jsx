import { useState } from 'react';

const OrderView = ({orders}) => {
  const [selectedTab, setSelectedTab] = useState('All Orders');
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 3;

  // Filter orders based on selected tab
  const filteredOrders = selectedTab === 'All Orders' ? orders : orders.filter(order => order.deliveryType === selectedTab);

  // Calculate pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Change tab
  const handleTabChange = tab => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  // Change page
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center">
        <button
          className={`px-4 py-2 rounded-tl-lg rounded-bl-lg ${
            selectedTab === 'All Orders' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => handleTabChange('All Orders')}
        >
          All Orders
        </button>
        <button
          className={`px-4 py-2 ${
            selectedTab === 'Regular' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => handleTabChange('Regular')}
        >
          Regular Delivery
        </button>
        <button
          className={`px-4 py-2 rounded-tr-lg rounded-br-lg ${
            selectedTab === 'Express' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => handleTabChange('Express')}
        >
          Express Delivery
        </button>
      </div>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="py-2">Order ID</th>
            <th className="py-2">Customer Name</th>
            <th className="py-2">Delivery Type</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map(order => (
            <tr className='text-center' key={order.id}>
              <td className="py-2">{order.id}</td>
              <td className="py-2">{order.customerName}</td>
              <td className="py-2">{order.deliveryType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredOrders.length > ordersPerPage && (
        <div className="flex justify-center gap-2 mt-4">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-600"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-600"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastOrder >= filteredOrders.length}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderView;
