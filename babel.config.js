module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@lib": "./src/lib",
          "@database": "./src/database",
          "@middlewares": "./src/app/middlewares",
          "@models": "./src/app/models",
          "@modules": "./src/app/modules",
          "@utils": "./src/app/utils",
          "@shared": "./src/shared",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
