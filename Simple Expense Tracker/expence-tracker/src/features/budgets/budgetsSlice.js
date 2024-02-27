import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));

export const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      const { category, amount } = action.payload;
      const budgetToUpdate = state.find(
        (budget) => budget.category === category
      );
      if (budgetToUpdate) {
        budgetToUpdate.amount = amount;
      }
    },
  },
});

// Since I have used createSlice, I am gonna commented out below
// stand-alone action creator and reducer as it is providing the same functionality

/*export const editBudget = (budget) => {
  return {
    type: "budgets/editBudget",
    payload: budget,
  };
};

const budgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "budgets/editBudget":
      const newBudgets = state.map((budget) => {
        if (budget.category === action.payload.category) {
          return action.payload;
        }
        return budget;
      });
      return newBudgets;
    default:
      return state;
  }
};*/

export const selectBudgets = (state) => state.budgets;

export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
