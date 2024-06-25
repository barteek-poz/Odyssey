import { expect, test } from "vitest";
import transportType from "../helpers/transportType";

test("transport type car to return car svg", () => {
  expect(transportType("car")).toBe("/src/assets/car.svg");
});
test("transport type plane to return plane svg", () => {
  expect(transportType("plane")).toBe("/src/assets/airplane.svg");
});
test("transport type train to return train svg", () => {
  expect(transportType("train")).toBe("/src/assets/train.svg");
});
test("transport type bus to return bus svg", () => {
  expect(transportType("bus")).toBe("/src/assets/bus.svg");
});
test("if there is no transport type return walk svg", () => {
  expect(transportType()).toBe("/src/assets/walk.svg");
});
