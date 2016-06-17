const CHART = document.getElementById("lineChart");
Chart.defaults.scale.ticks.beginAtZero = true;

let barChart = new Chart(CHART, {
  type: 'radar',
  data: {
    labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'],
    datasets: [
      {
        label: 'Points',
        backgroundColor: 'rgba(00, 255, 00, 0.1)',
        borderColor: '#00FF00',
        borderWidth: 2,
        data: [10, 20, 55, 30, 10]
      }, {
        label: 'Points',
        backgroundColor: 'rgba(0, 255, 255, 0.1)',
        borderColor: '#00FFFF',
        borderWidth: 2,
        data: [5, 100, 20, 70, 80]
      }
    ]
  }
});
