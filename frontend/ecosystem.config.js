module.exports = {
  apps: [
    {
      name: `realworld-f-${process.env.NODE_ENV}`,
      script: "./server.js",
      time: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
