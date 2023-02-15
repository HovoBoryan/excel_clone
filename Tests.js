const Cell = require('./Cell');
const SpreadSheet = require('./Spread_sheet');

///////////////////////////////////////////////////

function testsetValue() {
    const c = new Cell();
    c.setValue("Hello");
    if(c.getValue() !== "Hello") {
        console.log("Test setValue() failed !!!");
    } else {
        console.log("Test setValue() passed ");
    }
}

function testToInt() {
    const c = new Cell();
    c.setValue("77");
    if(c.toInt() !== 77) {
        console.log("Test toInt() failed !!!");
    } else {
        console.log("Test toInt() passed");
    }
}

function testSetColor() {
    const c = new Cell();
    c.setColor("red");
    if(c.getColor() !== "red") {
        console.log("Test setColor() failed !!!!");
    } else {
        console.log("Test setColor() passed ");
    }
}

function testToDouble() {
    const c = new Cell();
    c.setValue("2.565a");
    if(c.toDouble() !== 2.565) {
        console.log("Test toDouble() failed !!!!");
    } else {
        console.log("Test toDouble() passed ");
    }
}

function testToDate() {
    const c = new Cell();
    c.setValue("Dec 25, 1995");
    if(typeof c.toDate() !== "number" ) {
        console.log("Test toDate() failed !!!");
    } else {
        console.log("Test toDate() passed ");
    }
}

function testReset() {
    const c = new Cell();
    c.setValue("Hello");
    c.setColor("black");
    c.reset();
    if(c.getValue() !== '' && c.getColor() !== 'red' ) {
        console.log("Test reset() failed !!!");
    } else {
        console.log("Test reset() passed");
    }
}

function TestSetCellAt() {
    const cell = new Cell();
    const ExampleSpread = new SpreadSheet(4, 4, cell);
    ExampleSpread.setCellAt(0, 0, "Hello");
    ExampleSpread.setCellAt(3, 3, "World");
    if(ExampleSpread.getCellAt(0, 0) !== "Hello" && ExampleSpread.getCellAt(3, 3) !== "World") {
        console.log("Test SetCellAt() failed !!!");
    } else {
        console.log("Test SetCellAt() passed ");
    }
    
}


function TestAddRow() {
    const cell = new Cell();
    const ExampleSpread = new SpreadSheet(3, 3, cell);
    
    ExampleSpread.setCellAt(1, 1, "Hello");
    ExampleSpread.setCellAt(2, 2, "World");
    ExampleSpread.addRow(1);
   
    if(ExampleSpread.getCellAt(1, 1) !== "Hello" ) {
        console.log("Test addRow() failed !!!..");
    } else {
        console.log("Test addRow() passed ");
    }
}


function TestRemoveRow(){
    const cell = new Cell();
    const ExampleSpread = new SpreadSheet(3, 3, cell);
    ExampleSpread.setCellAt(2, 2, "Hello");
    ExampleSpread.removeRow(2);
    if(ExampleSpread.getCellAt(2, 2) === "Hello" && ExampleSpread.length !== 4 ) {
        console.log("Test removeRow() failed !!!..");
    } else {
        console.log("Test removeRow() passed :");
    }
}








function TestAllTests() {

    testsetValue();
    testToInt();
    testSetColor();
    testToDouble();
    testToDate();
    testReset();
    TestSetCellAt();
    TestAddRow();
    };

//TestAllTests();

TestAddRow();


