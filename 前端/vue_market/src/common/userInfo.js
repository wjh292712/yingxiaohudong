let obj = {};
let store = window.localStorage;
//获取本地数据
obj.getInfo = function() {
  return JSON.parse(store.getItem("userInfo") || "{}");
};

//存储用户信息
obj.saveInfo = function(obj) {
  store.setItem("userInfo", JSON.stringify(obj));
};

export default obj;
