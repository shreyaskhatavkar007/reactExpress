import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/getList`);
    console.log(res);
    return res.data || [];
  }
}