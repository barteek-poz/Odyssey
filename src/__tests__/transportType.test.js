import transportType from "../helpers/transportType";

describe('icon depends on transport type', () => {
  it("transport type car to return car svg", () => {
    expect(transportType("car")).toBe("/src/assets/car.svg");
  });
  it("transport type plane to return plane svg", () => {
    expect(transportType("plane")).toBe("/src/assets/airplane.svg");
  });
  it("transport type train to return train svg", () => {
    expect(transportType("train")).toBe("/src/assets/train.svg");
  });
  it("transport type bus to return bus svg", () => {
    expect(transportType("bus")).toBe("/src/assets/bus.svg");
  });
  it("if there is no transport type return walk svg", () => {
    expect(transportType()).toBe("/src/assets/walk.svg");
  });
})

