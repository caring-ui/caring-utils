/*
 * @Author: Wanko
 * @Date: 2024-01-09 11:01:36
 * @LastEditors: Wanko
 * @LastEditTime: 2024-01-09 11:21:12
 * @Description: 
 */
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js'
    }
  ],
  plugins: [terser()]
}
