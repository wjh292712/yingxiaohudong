import Vue from "vue";

import axios from "axios";
axios.defaults.transformRequest = [
  function(data) {
    let newData = "";
    for (let k in data) {
      newData +=
        encodeURIComponent(k) + "=" + encodeURIComponent(data[k]) + "&";
    }
    return newData;
  }
];
const instance = axios.create({
  baseURL: "http://center.marketing.yunpaas.cn/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  // transformRequest: [function (data) {

  //   // data = Qs.stringify(data);
  //   return data;
  // }],
  withCredentials: true //允许携带cookie
});
Vue.prototype.$axios = instance;

// var doAction = function(url, param, backFun) {
//   Vue.prototype.$axios
//     .post(url, param)
//     .then(res => {
//       backFun(res);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// Vue.prototype.$doAction = doAction;

// export default doAction;