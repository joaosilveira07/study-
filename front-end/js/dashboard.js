const minutesPerDay = [
    0, 25, 40, 0, 90, 60, 0, 35, 50, 0,
    120, 45, 70, 0, 30, 80, 0, 60, 150, 40,
    0, 55, 95, 30, 0, 65, 110, 45, 0, 75
];

function getLevel(minutes) {
    if (minutes === 0) return 0;
    if (minutes < 30) return 1;
    if (minutes < 60) return 2;
    if (minutes < 120) return 3;
    return 4;
}

const heatmap = document.getElementById("heatmap");

minutesPerDay.forEach((minutes, index) => {
    const cell = document.createElement("div");

    cell.classList.add("cell", `level-${getLevel(minutes)}`);
    cell.title = `Day ${index + 1}: ${minutes} min`;

    heatmap.appendChild(cell);
});
