export default {
  success: ({ title, message }, options) => ({
    title,
    message,
    color: "#4caf50",
    type: "success",
    ...options
  }),
  info: ({ title, message }, options) => ({
    title,
    message,
    color: "#2196f3",
    type: "info",
    ...options
  }),
  warning: ({ title, message }, options) => ({
    title,
    message,
    color: "#FB8C00",
    type: "warn",
    ...options
  }),
  error: ({ title, message }, options) => ({
    title,
    message,
    color: "#F44336",
    type: "error",
    ...options
  })
};
