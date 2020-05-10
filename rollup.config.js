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
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
  ],
  external: [
    'querystring',
    'url',
  ],
}

/* 发布参考
https://github.com/rollup/rollup-starter-lib/blob/master/package.json*/
