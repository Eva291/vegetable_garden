const {
  getCostsForCrop,
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm");

//Winc test getYieldForPlant
describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

//Winc test getYieldForCrop
describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(crops)).toBe(30);
  });
});

//My test getYieldForCrop 1
describe("getYieldForCrop", () => {
  const corn = {
    name: "corn",
    yield: 3,
    factors: {
      sun: {
        low: 0.8,
        medium: 1,
        high: 1.5,
      },

      wind: {
        low: 1,
        medium: 0.7,
        high: 0.4,
      },
    },
  };

  const environmentFactors = {
    sun: "low",
    wind: "medium",
  };

  const crops = {
    crop: corn,
    numCrops: 10,
  };
  test("Get yield for crop with factors", () => {
    expect(getYieldForCrop(crops, environmentFactors)).toBe(16.799999999999997);
  });
});

//My test getYieldForCrop 2
describe("getYieldForCrop", () => {
  const corn = {
    name: "corn",
    yield: 3,
    factors: {
      sun: {
        low: 0.8,
        medium: 1,
        high: 1.5,
      },

      wind: {
        low: 1,
        medium: 0.7,
        high: 0.4,
      },
    },
  };

  const environmentFactors = {
    sun: "medium",
    wind: "low",
  };

  const crops = {
    crop: corn,
    numCrops: 10,
  };
  test("Get yield for crop with unrelevant factors", () => {
    expect(getYieldForCrop(crops, environmentFactors)).toBe(30);
  });
});

//Winc test getTotalYield
describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

//My test getTotalYield 1
describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops with factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },

        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },

        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];

    const environmentFactors = {
      sun: "high",
      wind: "medium",
    };
    expect(getTotalYield({ crops }, environmentFactors)).toBe(24.15);
  });
});

//My test getTotalYield 2
describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops with factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },

        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },

        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];

    const environmentFactors = {
      sun: "low",
      wind: "high",
    };
    expect(getTotalYield({ crops }, environmentFactors)).toBe(
      7.360000000000001
    );
  });
});

//Winc test getCostForCrop
describe("getCostsForCrop", () => {
  test("Get cost for crop corn without factors", () => {
    const corn = {
      name: "corn",
      yield: 4,
    };
    const crops = {
      crop: corn,
      numCrops: 10,
    };

    expect(getCostsForCrop(crops)).toBe(10);
  });

  test("Get cost for crop pumpkin without factors", () => {
    const pumpkin = {
      name: "pumpkin",
      yield: 3,
    };
    const crops = {
      crop: pumpkin,
      numCrops: 15,
    };
    expect(getCostsForCrop(crops)).toBe(15);
  });
});

//My test getRevenueForCrop 1
describe("getRevenueForCrop", () => {
  test("Get revenue for crop without factors", () => {
    const corn = {
      name: "corn",
      yield: 4,
    };
    const crops = {
      crop: corn,
      numCrops: 10,
    };
    expect(getRevenueForCrop(crops)).toBe(80);
  });
});

//My test getRevenueForCrop 2
describe("getRevenueForCrop", () => {
  test("Get revenue for crop with factors", () => {
    const corn = {
      name: "corn",
      yield: 4,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },

        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = {
      crop: corn,
      numCrops: 10,
    };

    const environmentFactors = {
      sun: "medium",
      wind: "medium",
    };
    expect(getRevenueForCrop(crops, environmentFactors)).toBe(56);
  });
});

//My test getRevenueForCrop 3
describe("getRevenueForCrop", () => {
  test("Get revenue for crop with unrelevant factors", () => {
    const corn = {
      name: "corn",
      yield: 4,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },

        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = {
      crop: corn,
      numCrops: 10,
    };

    const environmentFactors = {
      sun: "medium",
      wind: "low",
    };
    expect(getRevenueForCrop(crops, environmentFactors)).toBe(80);
  });
});

//My test getProfitForCrop 1
describe("getProfitForCrop", () => {
  test("Get profit for crop without factors", () => {
    const corn = {
      name: "corn",
      yield: 4,
    };
    const crops = {
      crop: corn,
      numCrops: 10,
    };
    expect(getProfitForCrop(crops)).toBe(70);
  });
});

////My test getProfitForCrop 2
describe("getProfitForCrop", () => {
  test("Get profit for crop with factors", () => {
    const corn = {
      name: "corn",
      yield: 4,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },

        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = {
      crop: corn,
      numCrops: 10,
    };

    const environmentFactors = {
      sun: "high",
      wind: "low",
    };
    expect(getProfitForCrop(crops, environmentFactors)).toBe(105);
  });
});

//My test getProfitForCrop 3
describe("getProfitForCrop", () => {
  test("Get profit for crop with unrelevant factors", () => {
    const corn = {
      name: "corn",
      yield: 4,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },

        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = {
      crop: corn,
      numCrops: 10,
    };

    const environmentFactors = {
      sun: "medium",
      wind: "low",
    };
    expect(getProfitForCrop(crops, environmentFactors)).toBe(70);
  });
});

//My test geTotalProfit 1
describe("getTotalProfit", () => {
  test("Get profit of all crops without factors", () => {
    const corn = {
      name: "corn",
      yield: 4,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 3,
    };
    const crops = [
      { crop: corn, numCrops: 10 },
      { crop: pumpkin, numCrops: 4 },
    ];
    expect(getTotalProfit({ crops })).toBe(90);
  });
});

//My test geTotalProfit 2
describe("getTotalProfit", () => {
  test("Get profit of all crops with factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },

        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },

        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];

    const environmentFactors = {
      sun: "high",
      wind: "low",
    };
    expect(getTotalProfit({ crops }, environmentFactors)).toBe(58.5);
  });
});

//My test geTotalProfit 2
describe("getTotalProfit", () => {
  test("Get profit of all crops with unrelevant factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },

        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },

        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];

    const environmentFactors = {
      sun: "medium",
      wind: "low",
    };
    expect(getTotalProfit({ crops }, environmentFactors)).toBe(39);
  });
});
