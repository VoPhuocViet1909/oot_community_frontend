module.exports = {
  apps: [
    {
      name: 'ott-frontend',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
