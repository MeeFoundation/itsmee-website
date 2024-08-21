/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-undef
module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "^18.2.42"
        }
    },
    "plugins": ["@typescript-eslint", "prettier"],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    "rules": {
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "spaced-comment": "error",
        "curly": ["error", "multi-line"],
        "no-eval": "error",
        "no-trailing-spaces": "error",
        "no-unsafe-finally": "error",
        "no-var": "error",
        "quotes": 0,
        "semi": "error",
        "prettier/prettier": ["error", { "usePrettierrc": false, "printWidth": 120 }],
        "max-len": [
            "error",
            { "code": 160, "ignoreComments": true, "ignoreStrings": true }
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-extra-boolean-cast": 0,
    }
};
