import { getExpensesData } from './lib/firebase/api';
import { expenseItemTemplte } from './templates/expenseItem';

async function appInit() {
const appData = await getExpensesData();
const expensesItems = Object.values(appData).map((obj) => {
	return expenseItemTemplte(obj);
	
});

// expensesItems.forEach((data) => {
// 	console.log(data)
// 	document.querySelector('#root').insertAdjacentHTML('afterbegin', data);
// })
expensesItems.forEach((data) => {
	document.querySelector('#body').insertAdjacentHTML('afterbegin', data);
})

}

appInit();