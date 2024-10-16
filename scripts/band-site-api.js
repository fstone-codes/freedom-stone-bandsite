class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = `?api_key=${apiKey}`;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}comments${this.apiKey}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
