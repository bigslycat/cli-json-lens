/* @flow */

import { readFileSync } from 'fs'
import { resolve } from 'path'

import { path } from './path'

export const getJSONValue = (file: string, pathToValue: string): mixed => {
  const filePath = resolve(process.cwd(), file)
  const raw = readFileSync(filePath, 'utf8')
  const content: mixed = JSON.parse(raw)
  return path(pathToValue.split('.'), content)
}
