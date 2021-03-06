import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import css from "rollup-plugin-import-css";

import pkg from './package.json'

const config = {
  input: 'src/lib/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [sass({ insert: true }), typescript(), css()],

  external: ['react', 'react-dom']
}

export default config;