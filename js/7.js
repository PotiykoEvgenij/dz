function calculateMeanTemperature(forecast) {
    const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh, }, } = forecast;

    // Change code above this line
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));
console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }));