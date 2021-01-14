// get all json files form "./languages"
const context = require.context('./languages', true, /\.json$/);
let arr = [];
context.keys().forEach((key) => {
    arr = [...arr, context(key)];
});

// merge all json files from "./languages"
let languages = {};
arr.forEach((value) => {
  languages = {...languages, ...value};
});

export default languages;
