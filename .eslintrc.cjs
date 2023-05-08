module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ["standard"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	rules: {
		quotes: ["warn", "double"],
		semi: ["warn", "always"],
		"no-unused-vars": "warn",
		"no-unreachable": "warn",
	}
};
