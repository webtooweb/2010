/* 
                Read Data from RTDB 


*/

import { ref, get } from 'firebase/database';
import { db } from './config/firebase/firebaseInit';


async function getToDoData() {
	const dbRef = ref(db, '/todos');
	const dataSnapshot = await get(dbRef);
	return await dataSnapshot.val();
}

export { getToDoData };

async function getExpensesData() {
	const dbRef = ref(db, '/expenses');
	
	const dataSnapshot = await get(dbRef);
	return await dataSnapshot.val();
	  
}

export { getExpensesData };
