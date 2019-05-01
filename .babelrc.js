module.exports = {
  presets: [
    [
      "@babel/env",
      {
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
