const costForPlant = 1;

const sellingPrice = 2;

const getCostsForCrop = (crops) => crops.numCrops * costForPlant;

const getYieldForPlant = (plant) => plant.yield;

const getYieldForCrop = (crops, factors) => {
  const yieldWithoutFactors = crops.numCrops * crops.crop.yield;
  if (!factors) {
    return yieldWithoutFactors;
  } else {
    const environmentalFactors = crops.crop.factors;
    let sunInfluence;
    let windInfluence;

    switch (factors.sun) {
      case "low":
        sunInfluence = environmentalFactors.sun.low;
        break;
      case "medium":
        sunInfluence = environmentalFactors.sun.medium;
        break;
      case "high":
        sunInfluence = environmentalFactors.sun.high;
        break;
      default:
        sunInfluence = 1;
    }
    switch (factors.wind) {
      case "low":
        windInfluence = environmentalFactors.wind.low;
        break;
      case "medium":
        windInfluence = environmentalFactors.wind.medium;
        break;
      case "high":
        windInfluence = environmentalFactors.wind.high;
        break;
      default:
        windInfluence = 1;
    }
    return yieldWithoutFactors * sunInfluence * windInfluence;
  }
};

const getTotalYield = (crops, factors) =>
  crops.crops
    .map((crop) => getYieldForCrop(crop, factors))
    .reduce((a, b) => a + b);

const getRevenueForCrop = (crops, factors) =>
  sellingPrice * getYieldForCrop(crops, factors);

const getProfitForCrop = (crops, factors) =>
  getRevenueForCrop(crops, factors) - getCostsForCrop(crops);

const getTotalProfit = (input, factors) => {
  const crops = input.crops;
  const profit = crops.map((crop) => getProfitForCrop(crop, factors));
  return profit.reduce((a, b) => a + b);
};

module.exports = {
  getCostsForCrop,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
