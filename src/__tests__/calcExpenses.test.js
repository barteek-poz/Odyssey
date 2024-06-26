import calcExpenses from "../helpers/calcExpenses";

const expenses = [
  {
    category: "transport",
    price: "120",
    title: "plane tickets",
    id: 1716899782547,
  },
  { title: "Hotel", id: 1717142593446, price: "100", category: "accomodation" },
  { title: "Postcard", category: "souvenirs", price: "5", id: 1717142633061 },
  { price: "10", category: "food", id: 1717184560466, title: "Brunost" },
  { title: "Dinner", category: "food", price: "35", id: 1717226785208 },
];

const expectedExpenses = {
  foodExpenses: 45,
  transportExpenses: 120,
  accomodationExpenses: 100,
  souvenirsExpenses: 5,
};
const emptyExpenses = [];
const expectedEmptyExpenses = {
  foodExpenses: 0,
  transportExpenses: 0,
  accomodationExpenses: 0,
  souvenirsExpenses: 0,
};
describe('calcExpenses' ,() => {
  it("calcExpenses sums all expenses categories", () => {
    expect(calcExpenses(expenses)).toEqual(expectedExpenses);
  });
  
  it("calcExpenses when there is no expenses", () => {
    expect(calcExpenses(emptyExpenses)).toEqual(expectedEmptyExpenses);
  });
})

