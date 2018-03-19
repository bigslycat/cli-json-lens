/* @flow */

/* eslint-env jest */

import { readFileSync } from 'fs'
import { resolve } from 'path'
import { getJSONValue } from './getJSONValue'

jest.mock('fs')
// jest.mock('./path')

const obj = { a: { b: 'value' } }

readFileSync.mockReturnValue(JSON.stringify(obj))

describe('function getJSONValue', () => {
  it('Get value from JSON file', () => {
    expect(getJSONValue('file.json', 'a.c')).toBe(undefined)
    expect(getJSONValue('file.json', 'a')).toEqual(obj.a)
    expect(getJSONValue('file.json', 'a.b')).toBe('value')
    expect(readFileSync).lastCalledWith(
      resolve(process.cwd(), 'file.json'),
      'utf8',
    )
  })
})
