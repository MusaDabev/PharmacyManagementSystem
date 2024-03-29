export const donutChartData = {
  options: {
    labels: [
      "Храносмилателна система",
      "Кръв и кръвотворни органи",
      "Сърдечно-съдова система",
      "Дерматологични",
      "Нервна система",
    ],
  },
  series: [44, 55, 41, 17, 15],
  labels: ["A", "B", "C", "D", "E"],
};

export const lineChartData = {
  options: {
    chart: {
      id: "line-chart",
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
      15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    },
  },
  series: [
    {
      name: "series-1",
      data: [1000, 1020, 975, 921, 945, 940, 1000],
    },
  ],
};
