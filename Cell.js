const Color = {
    red : "red",
    green : "green",
    white : "white",
    black : "black",
    yeellow : "yellow"
};

class Cell{
    #string = ''
    constructor() {
        this.color = Color.red;
    }

    cell(value) {
        //this.value = value;
    }

    cell(value, color) {
        //this.value = value;
        //this.color = color;
    }


    setValue(value) {
        this.#string = value;
    }

    getValue() {
        return this.#string ; 

    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    toInt() {
        return this.#string * 1;
    }

    toDouble() {
        return parseFloat(this.#string);
    }

    toDate() {
        return Date.parse(this.#string);
    }

    reset() {
        this.#string = '';
        this.color = Color.red;
    }
}


module.exports = Cell;