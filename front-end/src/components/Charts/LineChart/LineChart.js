import Chart from "react-apexcharts";
import { lineChartData } from "../../../assets/dataset/dataset";

function LineChart() {
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={lineChartData.options}
            series={lineChartData.series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

export default LineChart;
