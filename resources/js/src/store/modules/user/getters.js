export default {
  info: state => state.info,
  search: state => key => {
    console.log(state.info[key])
    return state.info[key] || null
  }
};
