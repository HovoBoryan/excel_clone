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
       /* for(let i = 0; i < row; i++) {
            for(let j = 0; j < col; j++) {
               this.#Cells[i][j] = cell;
         }  
       }*/
    }
}
    setCellAt(num1, num2, value) {
        if(num1 < 0 || num2 < 0)
         {
            console.log("Please enter 0 or numbers greater then 0 !!!..");
         } 
          
            this.cell.setValue(value);
            this.#Cells[num1][num2] = this.cell.getValue();
        
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
      if(num < 0) {
         console.log("Please enter number 0 or greater then 0");
      } else {
        let col = this.#Cells[0].length;
        const cell = new Cell();
        const addLine = [col];
          for(let i = 0; i < col; i++) {
               addLine[i] = cell;
            }
             this.#Cells.splice(num + 1 , 0, addLine );
         }
      }


    removeRow(num) {
         if(num < 0) {
            console.log("please enter  0 or number greater  0  ");
         }
         this.#Cells.splice(num, 1);
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