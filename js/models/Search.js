import { elements } from '../views/base.js';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`).then(response => response.json());
            this.result = res.recipes;
            elements.errorResults.style.display = 'none';
            // console.log(this.result);
        } catch (error) {
            console.log(error);
            elements.errorResults.style.display = 'block';
        }
    }
}
