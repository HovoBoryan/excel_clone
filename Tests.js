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
    //
    //cell.setValue("World");
    ExampleSpread.setCellAt(0, 0, "Hello");
   // ExampleSpread.setCellAt(3, 3, cell);
    if(ExampleSpread.getCellAt(0, 0) !== "Hello"   ) {
        console.log("Test SetCellAt() failed !!!");
    } else {
        console.log("Test SetCellAt() passed ");
    }
    
}

function testchangeColor() {

}







function TestAllTests() {

    testsetValue();
    testToInt();
    testSetColor();
    testToDouble();
    testToDate();
    testReset();
    TestSetCellAt()
    
    };
/*testsetValue();
testToInt();
testSetColor();
testToDouble();
testToDate();
testReset();
TestSetCellAt()
*/

//TestAllTests();
TestSetCellAt()

