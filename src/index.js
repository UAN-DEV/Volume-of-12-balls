"use strict";

const COUNT_BALL = 12;
const OUT_DIAMETER = 50; // sm
const WALL = 1; // sm
let totalVolume = 0; // m³

let innerDiametr = OUT_DIAMETER - 2 * WALL;

for (let i = 0; i < COUNT_BALL; i++) {
  totalVolume += (Math.PI * (innerDiametr + 2 * i * WALL) ** 3) / 6;
}
totalVolume *= 1e-6;
console.log(`totalVolume : ${totalVolume.toFixed(3)} m³.`);

