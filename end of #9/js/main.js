const CHART = document.getElementById("lineChart");
Chart.defaults.scale.ticks.beginAtZero = true;

let barChart = new Chart(CHART, {
  type: 'pie',
  data: {
    labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'],
    datasets: [
      {
        label: 'Points',
        backgroundColor: ['#f1c40f','#e67e22', '#16a085', '#2980b9', '#8e44ad'],
        data: [10, 20, 55, 30, 10]
      }
    ]
  },
  options: {
    cutoutPercentage: 50,
    rotation: Math.PI * 1,
    animation: {
      animateScale: true
    }
  }
});
