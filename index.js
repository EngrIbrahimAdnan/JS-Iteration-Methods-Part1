// You are given an array representing a series of transactions in a small business. 
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
// Part 1: Transaction Analysis

// Task 1) Create a new array containing only the income transactions.
//        Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

// Task 2) Create a new array containing only the expense transactions.
//        Output 2) [["expense", 500], ["expense", 300]]

const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];


const incomeTrans=transactions.filter(row=>{return row[0]==="income"});
// console.log(incomeTrans);

const expenseTrans=transactions.filter(row=>{return row[0]==="expense"});
//console.log(expenseTrans);

/*****************************************************************
// Part 2: Financial Summary
// Task 3) Calculate the total income and return it.
//        Output 3) 3200
// Task 4) Calculate the total expenses and return it.
//        Output 4) 800
*/

const totalIncome = incomeTrans.reduce((total, value) => {return total + value[1]}, 0); 
//console.log(totalIncome);

const totalExpense = expenseTrans.reduce((total, value) => {return total + value[1]}, 0); 
//console.log(totalExpense);


//*****************************************************************
// Part 3: Net Analysis
// Task 5) Calculate the net total (total income - total expenses) and return it.
//        Output 5) 2400
// Task 6) Identify and create a new array with transactions (both incomes and expenses) above  or equal to $500.
//        Output 6) [["income", 1000], ["income", 1500], ["expense", 500], ["income", 700]]

function netTotal(totalIncome,totalExpense){
    return totalIncome-totalExpense
}
const netTotalVar=netTotal(totalIncome,totalExpense);
//console.log(netTotalVar);

const above500 = transactions.filter(row=>{return row[1]>= 500});
//console.log(above500);
