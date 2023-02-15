const Cell = require("./Cell");

class SpreadSheet {
    #Cells = []
    constructor(row, col, cell) {
       this.cell = new Cell();

        if(row <= 0 || col <= 0)
        {
            console.log("Please enter  numbers greater then 0 !!!..");
        }
        else {
        for(let i = 0; i < row; i++) {
           this.#Cells[i] = new Array(col);   
        }
    }
}
    setCellAt(num1, num2, value) {
        if(num1 < 0 || num2 < 0)
         {
            console.log("Please enter 0 or numbers greater then 0 !!!..");
         } 
            else if(typeof value === "string") 
         {
            this.cell.setValue(value);
            this.#Cells[num1][num2] = this.cell.getValue();
         }
            else
         {
            this.#Cells[num1][num2] = value;
         }
    }


   

    getCellAt(num1, num2) {
        if(num1 < 0 || num2 < 0)
         {
            console.log("Please enter 0 or numbers greater then 0 !!!...");
         } 
            else
         {
            return this.#Cells[num1][num2];
         }
    }


    addRow(num) {
        let col = this.#Cells[0].length;
        const cell = new Cell();
        const addLine = new SpreadSheet(1, col, cell );
             this.#Cells.splice(num , 0, addLine );
             return this.#Cells;
      }



    removeRow(num) {

    }

    addColumn(num) {

    }

    removeColumn(num) {

    }
    swapRows(num1, num2) {

    }
    swapColumns(num1, num2) {

    }

}
module.exports = SpreadSheet