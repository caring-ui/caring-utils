/*
 * @Author: Wanko
 * @Date: 2024-01-09 11:01:36
 * @LastEditors: Wanko
 * @LastEditTime: 2024-05-29 16:46:19
 * @Description: 
 */
import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.js'
    }
  ],
  plugins: [nodeResolve(), terser()]
}
