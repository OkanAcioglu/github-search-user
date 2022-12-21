// Include Dependencies
// Include react
import React from 'react'

//! belows is default export, we can name whatever we want...
// Include the react-fusioncharts component --> //! first library
import ReactFC from 'react-fusioncharts'

// Include the fusioncharts library --> //! second library
import FusionCharts from 'fusioncharts'

// Include the chart type --> //! chart that we are going to render
import Chart from 'fusioncharts/fusioncharts.charts'

// Include the theme as fusion --> //! chart theme
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Adding the chart and theme as dependency to the core fusioncharts
//! fcRoot --> is a method...
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

// Creating the DOM element to pass the react-fusioncharts component
const ChartComponent = ({ data }) => {
  // Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: 'column2d', // The chart type --> //! This is where we change chart type...
    width: '400', // Width of the chart --> //! will be made responsive
    height: '400', // Height of the chart --> //! will be made responsive
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Countries With Most Oil Reserves [2017-18]',
        //Set the chart subcaption
        subCaption: 'In MMbbl = One Million barrels',
        //Set the x-axis name
        xAxisName: 'Country',
        //Set the y-axis name
        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        //Set the theme for your chart
        theme: 'fusion',
      },
      // Chart Data
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
