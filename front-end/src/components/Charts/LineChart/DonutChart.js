import Chart from 'react-apexcharts'

function DonutChart() {

    const state = {
      options: {
        labels: ["Храносмилателна система", "Кръв и кръвотворни органи", "Сърдечно-съдова система", "Дерматологични", "Пикочно-полова система", "Антиинфекциозни", "Имуноподопмагащи", "Нервна система"],
       },
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }

    return (
      <div className="donut">
        <Chart options={state.options} series={state.series} type="donut" width="500" />
      </div>
    );
}

export default DonutChart;