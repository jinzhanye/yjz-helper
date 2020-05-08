import nodePolyfills from 'rollup-plugin-node-polyfills'
import multi from '@rollup/plugin-multi-entry'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/**/*.js',
  output: {
    file: 'lib/bundle.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    multi(),
    nodePolyfills(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
  ],
}

