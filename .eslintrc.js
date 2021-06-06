const is = {
  off: 0,
  warn: 1,
  error: 2,
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: "@cybozu/eslint-config/presets/react-typescript-prettier",
  rules: {
    "jsx-a11y/anchor-is-valid": [
      is.error,
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "@typescript-eslint/no-explicit-any": is.error,
  },
};
