import Chart from "react-apexcharts";
import { donutChartData } from "../../../assets/dataset/dataset";

function DonutChart() {
  return (
    <div className="donut">
      <Chart
        options={donutChartData.options}
        series={donutChartData.series}
        type="donut"
        width="500"
      />
    </div>
  );
}

export default DonutChart;
