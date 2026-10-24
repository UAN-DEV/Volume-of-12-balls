"use strict";

function getTotalVolumes(data) {
  const [countBall, outDiametr, wall] = data;
  let totalVolumes = 0;
  let innerDiametr = outDiametr - 2 * wall;

  for (let i = 0; i < countBall; i++) {
    totalVolumes += (Math.PI * (innerDiametr + 2 * i * wall) ** 3) / 6;
  }
  totalVolumes = (totalVolumes * 1e-6).toFixed(3);
  return totalVolumes;
}

while (true) {
  const innData = prompt(`Enter, separated by commas: 
      number of spheres,
      their outer diameter of the smallest sphere (sm), 
      and the wall thickness  (sm)`)
    .split(" ")
    .filter((item) => Number(item.trim()));

  if (innData.length === 3) {
    alert(`totalVolume : ${getTotalVolumes(innData)} m³.`);
    break;
  } else {
    alert("Your enter incorrect data");
  }
}
