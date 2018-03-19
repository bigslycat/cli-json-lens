/* @flow */

/* eslint-env jest */

import { path } from './path'

const obj = { a: { b: 'value' } }

describe('Function path', () => {
  it('Get value from object', () => {
    expect(path(['a', 'b'], obj)).toBe('value')
    expect(path(['a'], obj)).toBe(obj.a)
  })
  it('Returns undefined when value is not found', () => {
    expect(path(['a', 'c'], obj)).toBe(undefined)
  })
})
