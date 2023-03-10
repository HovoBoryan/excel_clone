const Cell = require("./Cell");

class SpreadSheet {

    #Cells = []
    constructor(row, col, cell) {

      this.cell = new Cell();
      if(row <= 0 || col <= 0)
      {
         console.log("Please enter  numbers greater then 0 !!!..");
      } else {

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
            this.cell.setValue(value);
            this.#Cells[num1][num2] = this.cell.getValue();    
      }


    getCellAt(num1, num2) {
        if(num1 < 0 || num2 < 0)
         {
            console.log("Please enter 0 or numbers greater then 0 !!!...");
         } else {

            return this.#Cells[num1][num2];
         }
      }


    addRow(num) {
      if(num < 0) {
         console.log("Please enter number 0 or greater then !!!.... ");
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
      if(num < 0) {
      console.log("Please enter number 0 or greater then !!!!.. ");
      } else {
         const addcolumncell = new Cell();
         let row = this.#Cells.length;

         for(let i = 0; i < row; i++) {     
               this.#Cells[i].splice(num +1, 0, addcolumncell);
         }
      }
      }


    removeColumn(num) {
      if(num < 0) {

         console.log("Please enter number 0 or greater then !!!!.. ");

      } else {

      let row = this.#Cells.length;
      for(let i = 0; i < row; i++) {   
         this.#Cells[i].splice(num , 1); 
      }
   }
}

    swapRows(num1, num2) {
      if(num1 < 0 || num2 < 0) {

         console.log("Please enter number 0 or greater then !!!!.. ");

      } else {
         const swapper = this.#Cells[num1];
         this.#Cells[num1] = this.#Cells[num2];
         this.#Cells[num2] = swapper;
      }
      }


    swapColumns(num1, num2) {
      
      if(num1 < 0 || num2 < 0) {

         console.log("Please enter number 0 or greater then !!!!.. ");

      } else {

        let row = this.#Cells.length; 
        for(let i = 0; i < row; i++) {
            let swapper = this.#Cells[i][num1];
            this.#Cells[i][num1] = this.#Cells[i][num2];
            this.#Cells[i][num2] = swapper;
         }
      }
      }

}
module.exports = SpreadSheet