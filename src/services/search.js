import { post } from "./http";

class search {
  constructor() {
    this.baseUrl = "http://localhost:9000/api/assets";
  }

  async getResults(q) {
    return post(`${this.baseUrl}/search`, { query: q });
  }
}

export default search;
