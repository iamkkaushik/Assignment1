import React from 'react';
// import { Select, MenuItem } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const MetricsSelector = ({setSelectedMetric}) => {
  const handleMetricChange = (event) => {
    // Handle metric change
    setSelectedMetric(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel>Select Metric</InputLabel>
      <Select onChange={handleMetricChange} defaultValue="bmi">
        <MenuItem value="bmi">BMI</MenuItem>
        <MenuItem value="bloodPressure">Blood Pressure</MenuItem>
        <MenuItem value="heartRate">Heart Rate</MenuItem>
        <MenuItem value="temperatureanalysis">Temperature Analysis</MenuItem>
        <MenuItem value="agedistribution">Age</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MetricsSelector;
