import React from 'react'

import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Chart from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'pie3d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Languages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '45%',
        //paletteColors: '#f0db4f', //! we can provide a color but we dont know how many language on the chart so write here at least 10 color if you provide colors like that
      },
      // Chart Data
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
