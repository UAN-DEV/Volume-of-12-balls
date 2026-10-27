"use strict";

/**
 * Calculates the total volume of nested spheres.
 *
 * @param {[number, number, number]} data - An array of parameters: [number_of_spheres, outer_diameter, wall_thickness]
 * @param {number} data[0] - countBall: The number of spheres.
 * @param {number} data[1] - outDiameter: The outer diameter of the smallest sphere.
 * @param {number} data[2] - wall: The wall thickness of the smallest sphere.
 * @returns {number} The total volume of all spheres in m³, rounded to 3 decimal places.
 */
function getTotalVolumes(data) {
  const [COUNT_BALL, OUT_DIAMETER, WALL] = data;
  let innerDiametr = OUT_DIAMETER - 2 * WALL;
  let totalVolumes = 0;

  for (let i = 0; i < COUNT_BALL; i++) {
    totalVolumes += (Math.PI * (innerDiametr + 2 * i * WALL) ** 3) / 6;
  }
  totalVolumes = (totalVolumes * 1e-6).toFixed(3);
  return totalVolumes;
}

while (true) {
  const INN_DATA = prompt(
    `Enter, separated by spaces: 
      number of spheres,
      their outer diameter of the smallest sphere (sm), 
      and the wall thickness  (sm)`,
    "for ex.: 12 50 1",
  )
    .split(" ")
    .filter((item) => Number(item.trim()));

  if (INN_DATA.length === 3) {
    alert(`totalVolume : ${getTotalVolumes(INN_DATA)} m³.`);
    break;
  }
  if (
    confirm(`Your enter incorrect data.
Do you want to repeat the input?`)
  ) {
    continue;
  } else {
    break;
  }
}
