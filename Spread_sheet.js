const Cell = require("./Cell");

class SpreadSheet {
    #Cells = []
    constructor(row, col) {
    
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
            const cell = new Cell().setValue(value);
            this.#Cells[num1][num2] = cell.getValue();
         }
            else
         {
            this.#Cells[num1][num2] = value;
         }
    }


   

    getCellAt(num1, num2) {
        if(num1 < 0 || num2 < 0)
         {
            console.log("Please enter 0 or numbers greater then 0 !!!..");
         } 
            else
         {
            return this.#Cells[num1][num2];
         }
    }

    changeColor(num1, num2, color) {
        this.#Cells[num1][num2].setColor(color);
    }

    addRow(row) {
        let col = this.length;
        const newspreadSheet = new SpreadSheet(row +1, col );

        for(let i = 0; i < row + 1; i++ ){
            for(let j = 0; j < col; j++)
            {
                if(i === row) 
                { 
                    newspreadSheet[i][j] = '';
                    continue; 
                }
                    newspreadSheet[i][j] = this.getCellAt(i, j);

            }
            return newspreadSheet;
    }
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