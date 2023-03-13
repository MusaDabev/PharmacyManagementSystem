import Chart from "react-apexcharts";

function LineChart() {

    const state = {
      options: {
        chart: {
          id: "line-chart"
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        }
      },
      series: [
        {
          name: "series-1",
          data: [793, 750, 802, 1043, 945, 873, 1134]
        }
      ]
    };

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
}

export default LineChart;