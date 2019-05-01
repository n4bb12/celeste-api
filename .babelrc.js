module.exports = {
  presets: [
    [
      "@babel/env",
      {
        exclude: ["transform-regenerator", "transform-async-to-generator"],
        loose: true,
        modules: "commonjs",
      },
    ],
    "@babel/typescript",
  ],
  plugins: [
    [
      "@babel/proposal-class-properties",
      {
        loose: true
      },
    ],
    [
      "@babel/proposal-object-rest-spread",
      {
        useBuiltIns: true,
        loose: true,
      },
    ],
  ],
}
