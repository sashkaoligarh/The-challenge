module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],    
        "implicit-arrow-linebreak": "off",    
        "comma-dangle": "off",
        "indent": "off",    
        "no-trailing-spaces": "off",
        "jsx-a11y/label-has-for": "off",
        "jsx-a11y/label-has-associated-control": "off"
    }
};
