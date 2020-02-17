const images = require.context("@/assets/image/avatar/", false, /\.svg$/);
const rand = Math.floor(Math.random() * images.keys().length);
const image = images.keys()[rand].replace(/(\.\/)/g, "");

export default require(`@/assets/image/avatar/${image}`);
