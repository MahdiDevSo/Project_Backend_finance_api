import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
  const data = await Transaction.create({
    ...req.body,
    user: req.user._id,
  });

  res.json(data);
};

export const getTransactions = async (req, res) => {
  const data = await Transaction.find({ user: req.user._id });
  res.json(data);
};

export const deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

export const monthlySummary = async (req, res) => {
  const data = await Transaction.aggregate([
    { $match: { user: req.user._id } },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
  ]);

  res.json(data);
};