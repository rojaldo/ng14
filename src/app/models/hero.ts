export class Hero {
    private _name!: string;
    constructor(name: string, private _description = '', private _id = -1) {
        this.name = name;
     }

    get name () {
        return this._name;
    }

    set name (value: string) {
        if(value.trim().length === 0) {
            throw new Error('Invalid name');
        }
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    toString(): string {
        return `${this._name} - ${this._description}`;
    }

}