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
		"padding-line-between-statements": [
			"error",
			// require blank before
			{ blankLine: "always", prev: "*", next: ["return", "throw", "continue", "debugger"] },
			// disallow blank before case declaration
			{ blankLine: "never", prev: ["case", "default"], next: "*" },
			// require blank before & after, but not beetween var declaration
			{ blankLine: "always", prev: ["const", "let", "var"], next: "*" },
			{ blankLine: "always", prev: "*", next: ["const", "let", "var"] },
			{ blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
			// require blank before & after, but not beetween import statements
			{ blankLine: "always", prev: "import", next: "*" },
			{ blankLine: "always", prev: "*", next: "import" },
			{ blankLine: "any", prev: "import", next: "import" },
			// require blank before & after, but not beetween export statements
			{ blankLine: "always", prev: "export", next: "*" },
			{ blankLine: "always", prev: "*", next: "export" },
			{ blankLine: "any", prev: "export", next: "export" },
			// require blank before & after, but not beetween if statements
			{ blankLine: "always", prev: "if", next: "*" },
			{ blankLine: "always", prev: "*", next: "if" },
			{ blankLine: "any", prev: "if", next: "if" },
			// require blank before & after, but not beetween directive declaration
			{ blankLine: "always", prev: "directive", next: "*" },
			{ blankLine: "always", prev: "*", next: "directive" },
			{ blankLine: "any", prev: "directive", next: "directive" },
			// require blank before & after
			{
				blankLine: "always",
				prev: ["switch", "try", "for", "while", "do", "iife"],
				next: "*",
			},
			{
				blankLine: "always",
				prev: "*",
				next: ["switch", "try", "for", "while", "do", "iife"],
			},
		],
		// typescript
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/no-inferrable-types": ["error", { ignoreProperties: true }],
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
