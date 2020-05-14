import multi from '@rollup/plugin-multi-entry'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// Babel 转换
// import babel from 'rollup-plugin-babel'

export default {
  input: 'src/**/*.js',
  output: {
    file: 'lib/index.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    multi(),
    commonjs({
      include: 'node_modules/**',
    }),
    // Babel 转换
    // babel({
    //   exclude: 'node_modules/**',
    //   runtimeHelpers: true,
    // }),
  ],
  external: [
    'querystring',
    'url',
    'lodash'
  ],
}

/* 发布参考
https://github.com/rollup/rollup-starter-lib/blob/master/package.json*/
