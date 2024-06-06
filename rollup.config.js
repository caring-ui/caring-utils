/*
 * @Author: Wanko
 * @Date: 2024-01-09 11:01:36
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-06 16:50:21
 * @Description: 
 */
import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.js'
    }
  ],
  plugins: [nodeResolve(), commonjs(), terser()]
}
