const images = require.context("./img", false, /\.svg$/);
const avatars = [];
images.keys().forEach((fileName, index) => {
  let path = fileName.replace(/(\.\/)/g, "");
  avatars[index] = require(`./img/${path}`);
});

export default avatars;
