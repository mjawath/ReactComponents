

export default class Item {

    constructor(){
        this._code = "";
        this._description = "";
    }


    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }
}