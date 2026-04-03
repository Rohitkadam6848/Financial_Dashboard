export const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Income",
      data: [28000, 31000, 33200, 27000, 35000, 30000, 32000, 38000],
      backgroundColor: "rgba(99, 202, 183, 0.85)",
      borderRadius: 6,
      barThickness: 10,
    },
    {
      label: "Expense",
      data: [12000, 15000, 10000, 18000, 14000, 11000, 16000, 13000],
      backgroundColor: "rgba(255, 178, 102, 0.85)",
      borderRadius: 6,
      barThickness: 10,
    },
  ],
};

export const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Credit Score",
      data: [720, 735, 740, 750, 760, 800, 830, 850],
      borderColor: "#6366f1",
      backgroundColor: "rgba(99, 102, 241, 0.08)",
      tension: 0.4,
      fill: true,
      pointBackgroundColor: "#6366f1",
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};
