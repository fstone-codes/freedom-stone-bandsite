class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = `?api_key=${apiKey}`;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}/comments${this.apiKey}`);

            const sortedResponse = response.data.sort((a, b) => {
                return b.timestamp - a.timestamp;
            });

            return sortedResponse;
        } catch (error) {
            console.error(error);
        }
    }

    async postComment(commentObj) {
        try {
            await axios.post(`${this.baseUrl}/comments${this.apiKey}`, commentObj);
        } catch (error) {
            console.error(error);
        }
    }

    async addLike(id) {
        try {
            await axios.put(`${this.baseUrl}/comments/${id}/like${this.apiKey}`);
        } catch (error) {
            console.error(error);
        }
    }

    async deleteComment(id) {
        try {
            await axios.delete(`${this.baseUrl}/comments/${id}${this.apiKey}`);
        } catch (error) {
            console.error(error);
        }
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseUrl}/showdates${this.apiKey}`);

            const sortedResponse = response.data.sort((a, b) => {
                return a.timestamp - b.timestamp;
            });

            return sortedResponse;
        } catch (error) {
            console.error(error);
        }
    }
}
