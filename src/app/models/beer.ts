export class Beer {
    private _id = 0;
    private _name = '';
    private _tagline = '';
    private _description = '';
    private _imageUrl = '';
    private _abv = 0;

    constructor(json?: any) {
        if (json !== undefined) {
            this._id = json.id;
            this._name = json.name;
            this._tagline = json.tagline;
            this._description = json.description;
            this._imageUrl = json.image_url;
            this._abv = json.abv;
        }
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get tagline(): string {
        return this._tagline;
    }

    get description(): string {
        return this._description;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    get abv(): number {
        return this._abv;
    }

    toString(): string {
        return `Beer: ${this._name} (${this._id}) - ${this._tagline} - ${this._description} - ${this._imageUrl} - ${this._abv}`;
    }
}