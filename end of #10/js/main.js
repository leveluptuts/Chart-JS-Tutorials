const CHART = document.getElementById("lineChart");
Chart.defaults.scale.ticks.beginAtZero = true;

let barChart = new Chart(CHART, {
  type: 'line',
  data: {
    labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'],
    datasets: [
      {
        label: 'Points',
        borderColor:  '#2980b9',
        data: [10, 20, 55, 30, 10]
      }
    ]
  },
  options: {
    scales: {
      yAxes: [{
        type: 'logarithmic',
        ticks: {
          min: 1,
          max: 60
        }
      }]
    }
  }
});
