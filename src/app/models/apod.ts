export class Apod{
    private _date = ''
    private _explanation = ''
    private _hdurl = ''
    private _mediaType = ''
    private _serviceVersion = ''
    private _title = ''
    private _url = ''

    constructor(json?: any) {
        if(json !== undefined) {            
            this._date = json.date;
            this._explanation = json.explanation;
            this._hdurl = json.hdurl;
            this._mediaType = json.media_type;
            this._serviceVersion = json.service_version;
            this._title = json.title;
            this._url = json.url;
        }
    }

    get date(): string {
        return this._date;
    }

    get explanation(): string {
        return this._explanation;
    }

    get hdurl(): string {
        return this._hdurl;
    }

    get mediaType(): string {
        return this._mediaType;
    }

    get serviceVersion(): string {
        return this._serviceVersion;
    }

    get title(): string {
        return this._title;
    }

    get url(): string {
        return this._url;
    }

    isImage(): boolean {
        return this._mediaType === 'image';
    }

    isYoutubeVideo(): boolean {
        // check if the media type is video and is youtube video
        return this._mediaType === 'video' && this._url.includes('youtube');
    }

    toString(): string {
        return `${this._date} - ${this._explanation} - ${this._hdurl} - ${this._mediaType} - ${this._serviceVersion} - ${this._title} - ${this._url}`;
    }

}