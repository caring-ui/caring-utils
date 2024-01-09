/*
 * @Author: Wanko
 * @Date: 2024-01-09 11:01:36
 * @LastEditors: Wanko
 * @LastEditTime: 2024-01-09 15:15:11
 * @Description: 
 */
import terser from '@rollup/plugin-terser'

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.js'
    }
  ],
  plugins: [terser()]
}
