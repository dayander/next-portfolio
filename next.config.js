module.exports = {
  env: {
    endpoint: process.env.PORT || 3000,
  },
};

// module.exports = () => {
//   console.log(process.env.API_PORT)
//   const endpoint = process.env.API_PORT ?? 3010;
//
//   return {
//     env: {
//       endpoint
//     }
//   };
// };
