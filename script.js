
let amountEl = document.getElementById('amount');
let addbutton = document.getElementById('addbutton');
let devismainblock = document.getElementById('devismainblock')
let Table = document.querySelector('.table');

let amount = undefined;
let qty = undefined;
let tax = undefined;
let price = undefined;

const Model = {
    qty: 1,
    tax: 20,
    price: 0,
    amount: 0
}


class TableRow 
{
    product = ''
    dateproduct = ''
    uniteproduct = 'Piéce(s)'
    quantiteproduct = 0
    htprixproduct = 0
    tvaproduct = 0
    montantproduct = 0
    totalht = 0
}



const TableData = [new TableRow()];

console.log(TableData);





// document.querySelectorAll('.calc-inp').forEach((inp) => {
//     inp.addEventListener('input', function() {
        
//         Model[this.id] = +this.value;

//         console.log(Model);

//         calc();
//     })
// });


// const calc = ()=>{
//     if(Model.qty && Model.tax && Model.price)
//         Model.amount = Model.qty*Model.price*(1+Model.tax/100)
  
//     amountEl.value = Model.amount.toFixed(2);
//     document.querySelector('[type="hidden"]').value = Model.qty*Model.price;

// };


addbutton.addEventListener('click', ()=>{

    const row = document.querySelector('.t-row');
    const cloneRow = row.cloneNode(true);

    cloneRow.querySelectorAll('.form-control').forEach((inp) => inp.value = '');

    Table.append(cloneRow);

    TableData.push(new TableRow());

    console.log(TableData);

    initRows();
});

function initRows()
{
    document.querySelectorAll('.t-row').forEach((row, inx) => {
        row.querySelectorAll('.form-control').forEach((inp) => {
            inp.oninput = function()
            {
                console.log(inx);
                TableData[inx][this.name] = this.value;

                if(this.classList[1] == 'calc-inp')
                {
                    TableData[inx].montantproduct = TableData[inx].quantiteproduct  * TableData[inx].htprixproduct * (1+TableData[inx].tvaproduct/100);
                    row.querySelector('[name="montantproduct"]').value = TableData[inx].montantproduct.toFixed(2);
                    TableData[inx].totalht = TableData[inx].quantiteproduct  * TableData[inx].htprixproduct;

                }
                setJSONData(); 
            }
        })
    })
   
}

function setJSONData()
{
    document.querySelector('[name="all_data"]').value = JSON.stringify(TableData);
}

initRows();
setJSONData();


// function createNewLine(){
    
//     let newBlock = document.createElement('div')

//     let newInput = document.createElement('input')

//     newBlock.appendChild(newInput)

//     return newBlock;

// }


