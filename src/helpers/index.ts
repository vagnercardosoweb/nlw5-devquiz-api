export function normalizeValue<T extends any>(value: any): T {
  if (Array.isArray(value) || typeof value === 'object') {
    return value;
  }

  if (!Number.isNaN(parseFloat(value))) {
    return <T>parseFloat(value);
  }

  if (value === 'true') {
    value = true;
  }

  if (value === 'false') {
    value = false;
  }

  if (value === 'null') {
    value = null;
  }

  return value;
}
