"use strict";

let countBall = 12;
let outDiametr = 50; // sm
let wall = 1; // sm
let totalVolume = 0; // m³

let innerDiametr = outDiametr - 2 * wall;

for (let i = 0; i < countBall; i++) {
  totalVolume += (Math.PI * (innerDiametr + 2 * i * wall) ** 3) / 6;
}
totalVolume *= 1e-6;
console.log(`totalVolume : ${totalVolume.toFixed(3)} m³.`);

