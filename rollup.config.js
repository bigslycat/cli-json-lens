import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'

import packageJson from './package.json'

const banner = `#!/usr/bin/env node

/**
 * ${packageJson.name} v${packageJson.version}
 * ${packageJson.description}
 */
`

export default {
  input: 'src/jl.js',
  output: {
    file: 'lib/jl.js',
    format: 'cjs',
    banner,
  },
  plugins: [
    json(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        'flow',
        [
          'env',
          {
            targets: {
              node: '4',
            },
            useBuiltIns: true,
            spec: true,
            debug: false,
            modules: false,
          },
        ],
      ],
      plugins: ['transform-object-rest-spread'],
    }),
    resolve(),
    commonjs(),
  ],
  external: ['chalk', 'meow'],
}
