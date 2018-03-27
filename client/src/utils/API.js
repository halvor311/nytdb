import axios from "axios";
const API = {
  search: function (topic, startYear, endYear) {
  const key = "805071c220c14d338216bf6c2e2ff054"
  const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        key  + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
        console.log(url);
        return axios.get(url);
  },
};
export default API;
