document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myChart").getContext("2d");

  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Label 1",
          data: [12000, 11000, 9000, 15000, 13000, 20000, 17000],
          borderColor: "blue",
          backgroundColor: "rgba(0, 0, 255, 0.1)",
          tension: 0.4,
          fill: true,
          borderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
        {
          label: "Label 2",
          data: [5000, 7000, 6000, 10000, 8000, 9000, 11000],
          borderColor: "orange",
          backgroundColor: "rgba(255, 165, 0, 0.2)",
          tension: 0.4,
          fill: true,
          borderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, // We're using our custom legend
        },
        tooltip: {
          mode: "index",
          intersect: false,
          backgroundColor: "rgba(0,0,0,0.8)",
          bodyFont: {
            size: 14,
          },
          titleFont: {
            size: 16,
            weight: "bold",
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(0,0,0,0.05)",
          },
          ticks: {
            callback: function (value) {
              return value / 1000 + "k";
            },
            font: {
              size: 12,
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 12,
            },
          },
        },
      },
      animation: {
        duration: 1000,
        easing: "easeInOutQuart",
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
    },
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    myChart.resize();
  });
});
