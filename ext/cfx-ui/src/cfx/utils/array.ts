export function arrayAt<T>(array: T[], index: number): T | undefined {
  if (index < 0) {
    return array[array.length + index];
  }

  return array[index];
}

export function uniqueArray<T>(array: Array<T>): Array<T> {
  return [...new Set(array)];
}

export function reverseArray<T>(array: Array<T>): Array<T> {
  return array.slice().reverse();
}
