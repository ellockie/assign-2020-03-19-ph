module.exports = {
    "parserOptions": {
        "ecmaVersion": 8
    },
    "extends": ["eslint:recommended", "google"],
    "rules": {
        // enable additional rules
        // "indent": ["error", 4],
        // "quotes": ["error", "double"],
        // "semi": ["error", "always"],

        // override default options for rules from base configurations
        "linebreak-style": "off",
        // "comma-dangle": ["error", "always"],
        // "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        // "no-console": "off",
    }
}