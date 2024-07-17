export class AIWebPageDetail {

    constructor(id: number, URL: string, type: string, headline: string, webPageSummary: string, links: string[], images: string[]) {
        this.id= id;
        this.url= URL;
        this.type= type;
        this.headline= headline;
        this.webPageSummary= webPageSummary;
        this.links= links;
        this.images= images;
    }

    id: number;
    url: string;
    type: string;
    headline: string;
    webPageSummary: string;
    links: string[];
    images: string[];

}