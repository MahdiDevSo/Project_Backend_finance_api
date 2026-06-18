const defaultCategories = [
  "Food",
  "Transport",
  "Rent",
  "Salary",
  "Shopping",
  "Bills",
  "Entertainment",
];

export const getCategories = (req, res) => {
  res.json({
    categories: defaultCategories,
  });
};
