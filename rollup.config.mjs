import resolve from '@rollup/plugin-node-resolve'

export default {
  input: './dist-ts/index.js',
  plugins: [
    resolve({}),
  ],
  output: [
    { format: 'cjs', file: './dist/index.js' },
  ],
  external: [],
}
