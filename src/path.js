/* @flow */

export const path = (
  [prop, ...otherPath]: $ReadOnlyArray<string>,
  obj: mixed,
): mixed => {
  if (!obj || typeof obj != 'object') return

  const value = obj[prop]

  if (!otherPath.length) return value
  if (value && typeof value == 'object') return path(otherPath, value)
}
