import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Card = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalWishlists, setTotalWishlists] = useState(0);
  const [totalCarts, setTotalCarts] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const mockTotalUsers = 100;
    const mockTotalProducts = 200;
    const mockTotalWishlists = 50;
    const mockTotalCarts = 80;

    setTotalUsers(mockTotalUsers);
    setTotalProducts(mockTotalProducts);
    setTotalWishlists(mockTotalWishlists);
    setTotalCarts(mockTotalCarts);

    const intervalId = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'doughnut',
        key: { animationKey },
        data: {
          labels: ['Users', 'Products', 'Wishlists', 'Carts'],
          datasets: [{
            data: [totalUsers, totalProducts, totalWishlists, totalCarts],
            backgroundColor: [
              'rgba(5, 132, 237, 0.895)',
              'rgb(255, 221, 3)',
              'rgba(255, 4, 88, 0.895)',
              'rgb(255, 121, 3)',
            ],
          }],
        },
        options: {
          cutout: '49%',
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
            tooltip: { enabled: true },
          },
          animation: {
            animateRotate: true,
            animateScale: true,
          },
        },
      });
      return () => myChart.destroy();
    }
  }, [totalUsers, totalProducts, totalWishlists, totalCarts, animationKey]); 


  return (
    <div className="container">
      <div className="cardA rounded bg-white border d-flex flex-column shadow p-2 pb-0 mb-0" style={{ maxWidth: '500px', width: '90vw' }}>
        <h2 className='m-2 text-bold font-monospace text-center'>Progress Status</h2>
        <div style={{ display: 'flex', width: '100%' }}>
          <div className='ms-5 ps-4 pb-0 mb-0' style={{ flex: 1, width: '100%', height:'320px' }}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
