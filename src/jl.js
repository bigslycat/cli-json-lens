/* @flow */

import chalk from 'chalk'
import meow from 'meow'

import { getJSONValue } from './getJSONValue'

const { bold } = chalk

const { help, input, flags } = meow(
  `
    Usage
      $ jl <file> <path>

    Arguments
      file  Relative or absolute path to file
      path  Dot.notation to needle value

    Options
      --pretty, -p    Pretty print
      --version, -v   Show version number
      --help, -h      Show help
  `,
  {
    flags: {
      pretty: {
        type: 'boolean',
        alias: 'p',
      },
      version: { alias: 'v' },
      help: { alias: 'h' },
    },
  },
)

const [file, path] = input

if (typeof file != 'string')
  throw new Error(
    [`Arguments ${bold('file')} and ${bold('path')} are missing`, help].join(
      '\n',
    ),
  )

if (typeof path != 'string')
  throw new Error([`Argument ${bold('path')} is missing`, help].join('\n'))

const value = getJSONValue(file, path)

if (value === undefined)
  throw new Error(`Value ${bold(path)} is not defined in file ${bold(file)}`)

console.log(
  value && typeof value == 'object'
    ? JSON.stringify(value, null, flags.pretty ? '  ' : undefined)
    : value,
)
