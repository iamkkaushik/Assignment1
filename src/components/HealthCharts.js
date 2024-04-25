// // HealthCharts.js
// import React from 'react';
// import { Line, Bar, Pie } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';
// import {CategoryScale} from 'chart.js'; 
// Chart.register(CategoryScale);

// const HealthCharts = ({ data ,selectedMetric}) => {
//   const bmiData = data.patients.map(patient => patient.bmi);
//   const bloodPressureData = data.patients.map(patient => ({
//     x: patient.id,
//     y: patient.bloodPressure.systolic
//   }));
//   const heartRateData = data.patients.map(patient => patient.heartRate);
//   const ageData = data.patients.map(patient => patient.age);
//   const temperatureData = data.patients.map(patient => patient.temperature);

//   const bmiChartData = {
//     labels: data.patients.map(patient => patient.name),
//     datasets: [
//       {
//         label: 'BMI',
//         data: bmiData,
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1
//       }
//     ]
//   };

//   const bloodPressureChartData = {
//     datasets: [
//       {
//         label: 'Systolic Blood Pressure',
//         data: bloodPressureData,
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1
//       }
//     ]
//   };

//   const heartRateChartData = {
//     labels: data.patients.map(patient => patient.name),
//     datasets: [
//       {
//         label: 'Heart Rate',
//         data: heartRateData,
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1
//       }
//     ]
//   };

//   const ageChartData = {
//     labels: data.patients.map(patient => patient.name),
//     datasets: [
//       {
//         label: 'Age',
//         data: ageData,
//         backgroundColor: 'rgba(255, 206, 86, 0.2)',
//         borderColor: 'rgba(255, 206, 86, 1)',
//         borderWidth: 1
//       }
//     ]
//   };

//   const temperatureChartData = {
//     labels: data.patients.map(patient => patient.name),
//     datasets: [
//       {
//         label: 'Temperature',
//         data: temperatureData,
//         backgroundColor: 'rgba(153, 102, 255, 0.2)',
//         borderColor: 'rgba(153, 102, 255, 1)',
//         borderWidth: 1
//       }
//     ]
//   };

//   return (
//     <div>
//       <h2>BMI Distribution</h2>
//       <Bar data={bmiChartData} />

//       <h2>Blood Pressure Trends</h2>
//       <Line data={bloodPressureChartData} />

//       <h2>Heart Rate Analysis</h2>
//       <Line data={heartRateChartData} />

//       <h2>Age Distribution</h2>
//       <Bar data={ageChartData} />

//       <h2>Temperature Analysis</h2>
//       <Line data={temperatureChartData} />
//     </div>
//   );
// };

// export default HealthCharts;


// HealthCharts.js
import React from 'react';
import { Line, Bar,Pie} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const HealthCharts = ({ data, selectedMetric }) => {
  const labels = data.patients.map(patient => patient.name);
  let chartData;

  switch (selectedMetric) {
    case 'bmi':
      chartData = {
        labels: labels,
        datasets: [{
          label: 'BMI',
          data: data.patients.map(patient => patient.bmi),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      };
      break;
    case 'bloodPressure':
      const systolicData = data.patients.map(patient => patient.bloodPressure.systolic);
      const diastolicData = data.patients.map(patient => patient.bloodPressure.diastolic);
      chartData = {
        labels: labels,
        datasets: [{
          label: 'Systolic',
          data: systolicData,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }, {
          label: 'Diastolic',
          data: diastolicData,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      };
      break;
    case 'heartRate':
      chartData = {
        labels: labels,
        datasets: [{
          label: 'Heart Rate',
          data: data.patients.map(patient => patient.heartRate),
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        }]
      };
      case 'agedistribution':
      chartData = {
        labels: labels,
        datasets: [{
          label: 'Age',
          data: data.patients.map(patient => patient.age),
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        }]
      };
      break;
    case 'temperatureanalysis':
      chartData = {
        labels: labels,
        datasets: [{
          label: 'Temperature',
          data: data.patients.map(patient => patient.temperature),
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      };
     break;
    default:
      break;
  }

  return (
    <div>
      {/* {selectedMetric === ''}
      <Pie data={chartData} /> */}

      {selectedMetric === 'bloodPressure' ?
        <Bar data={chartData} /> :
        <Line data={chartData} />
      }
    </div>
  );
};

export default HealthCharts;
