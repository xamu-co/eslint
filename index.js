module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		allowImportExportEverywhere: false,
		ecmaVersion: 2020,
		ecmaFeatures: { globalReturn: false },
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	plugins: ["@typescript-eslint", "prettier", "import"],
	rules: {
		// import
		"import/no-named-as-default": "off",
		"import/no-unresolved": "error",
		// prettier
		"prettier/prettier": ["error", {}, { usePrettierrc: true }],
		// unicorn
		"unicorn/number-literal-case": "off",
		// eslint
		"no-undef": "off",
		curly: ["error", "multi-line"],
		quotes: ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
		"arrow-parens": "off",
		"comma-dangle": "off",
		eqeqeq: ["error", "smart"],
		indent: "off",
		"no-dupe-class-members": "off",
		"no-extra-boolean-cast": "off",
		"no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
		"no-redeclare": "off",
		"no-tabs": "off",
		"no-use-before-define": "off",
		semi: "off",
		"space-before-function-paren": "off",
		"spaced-comment": "off",
		// typescript
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
		"@typescript-eslint/no-var-requires": "off",
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				// always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
				alwaysTryTypes: true,
			},
		},
	},
};
