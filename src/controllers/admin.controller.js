import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const getOverview = async (req, res) => {
  const totalUsers = await User.countDocuments();

  const transactions = await Transaction.find();

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  res.json({
    totalUsers,
    totalIncome,
    totalExpense,
    balance: totalIncome - totalExpense,
  });
};
