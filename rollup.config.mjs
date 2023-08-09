import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default [

	// ES module build for modern browsers
	{
		input: './index.ts',
		output: {
			file: 'dist/slimselect.es.js',
			format: 'es',
		},
		plugins: [
			typescript(),
			resolve(),
			commonjs(),
			babel({
				babelHelpers: 'bundled',
				exclude: 'node_modules/**',
			}),
		],
	}
]