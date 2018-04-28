import React from 'react'
import ChartistGraph from 'react-chartist'
import Chartist from 'chartist'

class ChartistsItems extends React.Component {
  render() {

    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };

    var type = 'Bar'

    const options = {
      fullWidth: true,
      showArea: false,
      chartPadding: {
        right: 30,
        left: 0,
      },
      plugins: [
        Chartist.plugins.tooltip({
          seriesName: false,
        }),
      ],
    }

    return (
      <div>
        <ChartistGraph data={data} type={type} options={options}/>
      </div>
    )
  }
}

export default ChartistsItems
