function bomb(sensor1, sensor2, sensor3, sensor4, sensor5, sensor6) {
    const speedOfSound = 343; // meters per second

    // Convert times to seconds
    const t1 = sensor1[2] / 1000;
    const t2 = sensor2[2] / 1000;
    const t3 = sensor3[2] / 1000;
    const t4 = sensor4[2] / 1000;
    const t5 = sensor5[2] / 1000;
    const t6 = sensor6[2] / 1000;

    // Calculate distances from each sensor to the bomb
    const distance1 = speedOfSound * t1;
    const distance2 = speedOfSound * t2;
    const distance3 = speedOfSound * t3;
    const distance4 = speedOfSound * t4;
    const distance5 = speedOfSound * t5;
    const distance6 = speedOfSound * t6;

    // Calculate the coordinates of the bomb
    const A = 2 * sensor2[0] - 2 * sensor1[0];
    const B = 2 * sensor2[1] - 2 * sensor1[1];
    const C = distance1 ** 2 - distance2 ** 2 - sensor1[0] ** 2 + sensor2[0] ** 2 - sensor1[1] ** 2 + sensor2[1] ** 2;

    const D = 2 * sensor3[0] - 2 * sensor2[0];
    const E = 2 * sensor3[1] - 2 * sensor2[1];
    const F = distance2 ** 2 - distance3 ** 2 - sensor2[0] ** 2 + sensor3[0] ** 2 - sensor2[1] ** 2 + sensor3[1] ** 2;

    const G = 2 * sensor5[0] - 2 * sensor4[0];
    const H = 2 * sensor5[1] - 2 * sensor4[1];
    const I = distance4 ** 2 - distance5 ** 2 - sensor4[0] ** 2 + sensor5[0] ** 2 - sensor4[1] ** 2 + sensor5[1] ** 2;

    const J = 2 * sensor6[0] - 2 * sensor5[0];
    const K = 2 * sensor6[1] - 2 * sensor5[1];
    const L = distance5 ** 2 - distance6 ** 2 - sensor5[0] ** 2 + sensor6[0] ** 2 - sensor5[1] ** 2 + sensor6[1] ** 2;

    const xb = (C * E - F * B) / (E * A - B * D);
    const yb = (C * D - A * F) / (B * D - A * E);

    return [xb, yb];
}

const sensor1 = [0, 0, 72.886];
const sensor2 = [0, 50, 72.886];
const sensor3 = [25, 25, 72.886];
const sensor4 = [0, 50, 145.773];
const sensor5 = [50, 50, 206.154];
const sensor6 = [50, 0, 145.773];

const bombLocation = bomb(sensor1, sensor2, sensor3, sensor4, sensor5, sensor6);
console.log("Bomb Location:", bombLocation);
