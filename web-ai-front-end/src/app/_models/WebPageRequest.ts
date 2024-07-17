export class WebPageRequest {
    
    constructor(name: string, email: string, url: string) {
        this.name= name;
        this.email= email;
        this.url= url;
    }
    
    id?: string;
    name: string;
    email: string;
    url: string;
}