import React, { useState } from 'react';
import MetricsSelector from './MetricsSelector';
import HealthCharts from './HealthCharts';
import { Container } from '@material-ui/core';

const healthData = {
  patients: [
    {
      "id": 1,
      "name": "John Doe",
      "age": 35,
      "gender": "Male",
      "bmi": 24.7,
      "bloodPressure": {
        "systolic": 120,
        "diastolic": 80
      },
      "heartRate": 72,
      "temperature": 98.6
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 28,
      "gender": "Female",
      "bmi": 29.1,
      "bloodPressure": {
        "systolic": 130,
        "diastolic": 85
      },
      "heartRate": 65,
      "temperature": 99.2
    },
    {

      "id": 3,

      "name": "Michael Johnson",

      "age": 45,

      "gender": "Male",

      "bmi": 22.5,

      "bloodPressure": {

        "systolic": 118,

        "diastolic": 76

      },

      "heartRate": 80,

      "temperature": 98.8

    },

    {

      "id": 4,

      "name": "Emily Adams",

      "age": 29,

      "gender": "Female",

      "bmi": 20.3,

      "bloodPressure": {

        "systolic": 110,

        "diastolic": 70

      },

      "heartRate": 75,

      "temperature": 98.4

    },

    {

      "id": 5,

      "name": "Robert Lee",

      "age": 52,

      "gender": "Male",

      "bmi": 26.9,

      "bloodPressure": {

        "systolic": 125,

        "diastolic": 84

      },

      "heartRate": 68,

      "temperature": 98.9

    },

    {

      "id": 6,

      "name": "Sophia Martinez",

      "age": 22,

      "gender": "Female",

      "bmi": 27.8,

      "bloodPressure": {

        "systolic": 122,

        "diastolic": 78

      },

      "heartRate": 70,

      "temperature": 98.2

    },

    {

      "id": 7,

      "name": "William Brown",

      "age": 37,

      "gender": "Male",

      "bmi": 31.2,

      "bloodPressure": {

        "systolic": 135,

        "diastolic": 88

      },

      "heartRate": 64,

      "temperature": 98.7

    },

    {

      "id": 8,

      "name": "Olivia Wilson",

      "age": 31,

      "gender": "Female",

      "bmi": 23.5,

      "bloodPressure": {

        "systolic": 116,

        "diastolic": 72

      },

      "heartRate": 78,

      "temperature": 99.1

    },

    {

      "id": 9,

      "name": "David Anderson",

      "age": 47,

      "gender": "Male",

      "bmi": 25.6,

      "bloodPressure": {

        "systolic": 121,

        "diastolic": 79

      },

      "heartRate": 74,

      "temperature": 98.3

    },

    {

      "id": 10,

      "name": "Ava Miller",

      "age": 26,

      "gender": "Female",

      "bmi": 21.9,

      "bloodPressure": {

        "systolic": 112,

        "diastolic": 71

      },

      "heartRate": 71,

      "temperature": 98.5

    }
  ]
};

const Dashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState('bmi');

  return (
    <Container>
       <MetricsSelector setSelectedMetric={setSelectedMetric} />
      <HealthCharts data={healthData} selectedMetric={selectedMetric} />
     </Container>
  );
};
export default Dashboard;

// // export default Dashboard;
// import React, { useState } from 'react';
// import { FormControl, InputLabel, MenuItem, Grid, Typography } from '@mui/material';
// import { Select } from '@material-ui/core';
// import HealthCharts from './HealthCharts';

// const HealthDashboard = ({ data }) => {
//   const [selectedMetric, setSelectedMetric] = useState('bmi');
//   const [sortBy, setSortBy] = useState('name');
//   const [sortOrder, setSortOrder] = useState('asc');

//   const handleMetricChange = (event) => {
//     setSelectedMetric(event.target.value);
//   };

//   const handleSortChange = (event) => {
//     setSortBy(event.target.value);
//   };

//   const handleOrderChange = (event) => {
//     setSortOrder(event.target.value);
//   };

//   const sortedPatients = data.patients.sort((a, b) => {
//     const comparison = sortOrder === 'asc' ? 1 : -1;
//     return comparison * (a[sortBy] - b[sortBy]);
//   });

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         {/* <Typography variant="h5" gutterBottom>Select Metric:</Typography> */}
//         <FormControl fullWidth>
//           <InputLabel id="metric-select-label">Metric</InputLabel>
//           <Select
//             labelId="metric-select-label"
//             id="metric-select"
//             value={selectedMetric}
//             label="Metric"
//             onChange={handleMetricChange}
//           >
//             <MenuItem value="bmi">BMI</MenuItem>
//             <MenuItem value="bloodPressure">Blood Pressure</MenuItem>
//             <MenuItem value="heartRate">Heart Rate</MenuItem>
//             <MenuItem value="temperature">Temperature</MenuItem>
//             <MenuItem value="age">Age</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={12}>
//         {/* <Typography variant="h5" gutterBottom>Sort By:</Typography> */}
//         <FormControl fullWidth>
//           <InputLabel id="sort-select-label">Sort By</InputLabel>
//           <Select
//             labelId="sort-select-label"
//             id="sort-select"
//             value={sortBy}
//             label="Sort By"
//             onChange={handleSortChange}
//           >
//             <MenuItem value="name">Name</MenuItem>
//             <MenuItem value="age">Age</MenuItem>
//             <MenuItem value="bmi">BMI</MenuItem>
//             <MenuItem value="heartRate">Heart Rate</MenuItem>
//             <MenuItem value="temperature">Temperature</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl fullWidth>
//           <InputLabel id="order-select-label">Order</InputLabel>
//           <Select
//             labelId="order-select-label"
//             id="order-select"
//             value={sortOrder}
//             label="Order"
//             onChange={handleOrderChange}
//           >
//             <MenuItem value="asc">Ascending</MenuItem>
//             <MenuItem value="desc">Descending</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={12}>
//         <HealthCharts data={sortedPatients} selectedMetric={selectedMetric} />
//       </Grid>
//     </Grid>
//   );
// };

// export default HealthDashboard;



// import React, { useState } from 'react';
// import HealthCharts from './HealthCharts';

// const healthData = {
//   patients: [
//     {
//       "id": 1,
//       "name": "John Doe",
//       "age": 35,
//       "gender": "Male",
//       "bmi": 24.7,
//       "bloodPressure": {
//         "systolic": 120,
//         "diastolic": 80
//       },
//       "heartRate": 72,
//       "temperature": 98.6
//     },
//     {
//       "id": 2,
//       "name": "Jane Smith",
//       "age": 28,
//       "gender": "Female",
//       "bmi": 29.1,
//       "bloodPressure": {
//         "systolic": 130,
//         "diastolic": 85
//       },
//       "heartRate": 65,
//       "temperature": 99.2
//     },
//     {

//       "id": 3,

//       "name": "Michael Johnson",

//       "age": 45,

//       "gender": "Male",

//       "bmi": 22.5,

//       "bloodPressure": {

//         "systolic": 118,

//         "diastolic": 76

//       },

//       "heartRate": 80,

//       "temperature": 98.8

//     },

//     {

//       "id": 4,

//       "name": "Emily Adams",

//       "age": 29,

//       "gender": "Female",

//       "bmi": 20.3,

//       "bloodPressure": {

//         "systolic": 110,

//         "diastolic": 70

//       },

//       "heartRate": 75,

//       "temperature": 98.4

//     },

//     {

//       "id": 5,

//       "name": "Robert Lee",

//       "age": 52,

//       "gender": "Male",

//       "bmi": 26.9,

//       "bloodPressure": {

//         "systolic": 125,

//         "diastolic": 84

//       },

//       "heartRate": 68,

//       "temperature": 98.9

//     },

//     {

//       "id": 6,

//       "name": "Sophia Martinez",

//       "age": 22,

//       "gender": "Female",

//       "bmi": 27.8,

//       "bloodPressure": {

//         "systolic": 122,

//         "diastolic": 78

//       },

//       "heartRate": 70,

//       "temperature": 98.2

//     },

//     {

//       "id": 7,

//       "name": "William Brown",

//       "age": 37,

//       "gender": "Male",

//       "bmi": 31.2,

//       "bloodPressure": {

//         "systolic": 135,

//         "diastolic": 88

//       },

//       "heartRate": 64,

//       "temperature": 98.7

//     },

//     {

//       "id": 8,

//       "name": "Olivia Wilson",

//       "age": 31,

//       "gender": "Female",

//       "bmi": 23.5,

//       "bloodPressure": {

//         "systolic": 116,

//         "diastolic": 72

//       },

//       "heartRate": 78,

//       "temperature": 99.1

//     },

//     {

//       "id": 9,

//       "name": "David Anderson",

//       "age": 47,

//       "gender": "Male",

//       "bmi": 25.6,

//       "bloodPressure": {

//         "systolic": 121,

//         "diastolic": 79

//       },

//       "heartRate": 74,

//       "temperature": 98.3

//     },

//     {

//       "id": 10,

//       "name": "Ava Miller",

//       "age": 26,

//       "gender": "Female",

//       "bmi": 21.9,

//       "bloodPressure": {

//         "systolic": 112,

//         "diastolic": 71

//       },

//       "heartRate": 71,

//       "temperature": 98.5

//     }
//   ]
// };

// const HealthDashboard = ({ data }) => {
//   const [selectedMetric, setSelectedMetric] = useState('bmi');
//   const [sortBy, setSortBy] = useState('name');
//   const [sortOrder, setSortOrder] = useState('asc');

//   const handleMetricChange = (event) => {
//     setSelectedMetric(event.target.value);
//   };

//   const handleSortChange = (event) => {
//     setSortBy(event.target.value);
//   };

//   const handleOrderChange = (event) => {
//     setSortOrder(event.target.value);
//   };

//   const sortedPatients = data.patients.sort((a, b) => {
//     const comparison = sortOrder === 'asc' ? 1 : -1;
//     return comparison * (a[sortBy] - b[sortBy]);
//   });

//   return (
//     <div>
//       <div>
//         <label>Select Metric:</label>
//         <select value={selectedMetric} onChange={handleMetricChange}>
//           <option value="bmi">BMI</option>
//           <option value="bloodPressure">Blood Pressure</option>
//           <option value="heartRate">Heart Rate</option>
//           <option value="temperature">Temperature</option>
//           <option value="age">Age</option>
//         </select>
//       </div>
//       <div>
//         <label>Sort By:</label>
//         <select value={sortBy} onChange={handleSortChange}>
//           <option value="name">Name</option>
//           <option value="age">Age</option>
//           <option value="bmi">BMI</option>
//           <option value="heartRate">Heart Rate</option>
//           <option value="temperature">Temperature</option>
//         </select>
//         <select value={sortOrder} onChange={handleOrderChange}>
//           <option value="asc">Ascending</option>
//           <option value="desc">Descending</option>
//         </select>
//       </div>
//       <HealthCharts data={sortedPatients} selectedMetric={selectedMetric} />
//     </div>
//   );
// };

// export default HealthDashboard;

