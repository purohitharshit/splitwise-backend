const {
  createExpenseService,
  getAllExpensesService,
} = require('../services/expenses.service.js');

const createExpense = async (req, res) => {
  console.log('dfdf');
  const { groupId, amount, description, splitType } = req.body;
  const payerId = req.user.id;

  console.log(groupId, amount, description, splitType);

  try {
    const expense = await createExpenseService(
      groupId,
      payerId,
      amount,
      description,
      splitType,
    );
    res.status(201).json(expense);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await getAllExpensesService(req.body.groupId);
    res.status(200).json(expenses);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { createExpense, getAllExpenses };