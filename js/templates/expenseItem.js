
// function expenseItemTemplte(data) {
//     const template = `
//     <section class="bg-zinc-50 border-l-4 shadow-sm p-4">
//     ${data}
//     </section>
//     `;
//     return template;

// }

function expenseItemTemplte(data){
    const template = `<section class="bg-zinc-700 border-1-4 shadow-sm p-4">

       <table>
       <tbody>
        <td>${data.uid}</td>
        <td>${data.amount}</td>
        <td>${data.category}</td>
        <td>${data.date}</td>
        <td>${data.description}</td>
        <tbody>
        </table>
    </section>
    `;
    return template;
}
export{expenseItemTemplte};