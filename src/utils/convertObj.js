export const convertObj = (obj) => {
  const eachKeyValue = (obj, fun) => {
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        fun(i, obj[i]);
      }
    }
  };

  const result = {};

  eachKeyValue(obj, function (namespace, value) {
    let parts = namespace.split(".");
    let last = parts.pop();
    let node = result;
    parts.forEach(function (key) {
      node = node[key] = node[key] || {};
    });
    node[last] = value;
  });

  return result;
};
