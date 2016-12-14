import riot from 'rollup-plugin-riot'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import postcss from 'postcss'
import postcssCssnext from 'postcss-cssnext'

export default {
  entry: 'src/index.js',
  dest: 'dist/main.js',
  plugins: [
    riot(),
    nodeResolve({ jsnext: true }),
    commonjs(),
    buble({objectAssign: 'Object.assign'})
  ],
  format: 'iife'
}

