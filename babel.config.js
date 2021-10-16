/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        ssr: true,
        displayName: true,
      },
    ],
  ],
};
