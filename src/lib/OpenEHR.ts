export default class OpenEHR {
    client: any;
    error?: string;

    constructor(client: any) {
        this.client = client;
        this.error = null;
    }
}