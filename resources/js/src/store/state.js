export default () => ({
  loading: false,
  message: {
    title: null,
    message: null,
    type: "success"
  },
  formErrors: {},
  navbar: [
    {
      title: "Home",
      icon: "mdi-home-city",
      name: "home",
      exact: true
    },
    {
      title: "Profile",
      icon: "mdi-account",
      name: "edit-profile"
    }
  ]
});
