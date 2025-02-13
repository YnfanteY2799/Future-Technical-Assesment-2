export function isJsonString(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * This function is for removing "found" field on response Error Object, because this field shows incoming data
 * @param error String
 * @returns Obj | String
 */
export function filterMessage(error: string): string {
  if (isJsonString(error)) {
    const { found: _, ...args } = JSON.parse(error);
    return args;
  } else return error;
}
