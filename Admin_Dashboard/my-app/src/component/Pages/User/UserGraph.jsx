import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

const UserGraph = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Generate mock data for monthly user signups
    const mockUserCounts = generateMockUserCounts();

    // Generate labels for the last 12 months
    const currentDate = new Date();
    const months = [];
    for (let i = 0; i < 12; i++) {
      const month = currentDate.getMonth() - i;
      const year = currentDate.getFullYear();
      months.unshift(new Date(year, month, 1));
    }

    setChartData({
      labels: months,
      datasets: [
        {
          label: "Number of Users entered monthly",
          data: mockUserCounts,
          borderColor: "rgb(255, 83, 3)",
          borderWidth: 2,
          fill: false,
          tension: 0.35,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
        },
      ],
    });
  }, []);

  // Function to generate mock user counts
  const generateMockUserCounts = () => {
    const mockData = [];
    for (let i = 0; i < 12; i++) {
      mockData.push(Math.floor(Math.random() * 50) + 10); // Random user counts between 10 and 60
    }
    return mockData;
  };

  return (
    <>
      <div className="cardA rounded bg-white border shadow p-4" style={{ maxWidth: '500px', width: '90vw' }}>
        <h2 className="text-bold font-monospace text-center">User Chart</h2>
        {chartData.labels && chartData.labels.length > 0 ? (
          <Line
            key={JSON.stringify(chartData.labels)}
            data={chartData}
            options={{
              scales: {
                x: {
                  type: "time",
                  time: {
                    unit: "month",
                  },
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Number of Users",
                  },
                  ticks: {
                    stepSize: 2,
                  },
                },
              },
              plugins: {
                legend: {
                  display: true,
                  position: "top",
                },
              },
              elements: {
                point: {
                  radius: 3,
                  borderWidth: 2,
                  backgroundColor: "lavender",
                  borderColor: "rgba(75,192,192,1)",
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointStyle: "circle",
                },
              },
            }}
          />
        ) : (
          <p>No data available for the chart.</p>
        )}
      </div>
    </>
  );
};

export default UserGraph;
