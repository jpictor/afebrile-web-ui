export const isNonEmptyArray = (a) => {
  if (a instanceof Array && a.length > 0) {
    return true
  }
  return false
}
