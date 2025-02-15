/**
 * THis is a function
 * @param str string that is supposedly a JSON
 * @returns boolean
 */
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

export type MetaDataResponse<G> = {
  data: Array<G>;
  metadata: {
    total: number;
    totalPages: number;
    totalRegisters: number;
    currentCursor: number;
    totalPerPage: number;
    prev: number;
    next: number;
  };
};

export function AddMetaData<G>(
  data: Array<G>,
  cursor: number,
  totalRegisters: number,
  size: number = 50
): MetaDataResponse<G> {
  const hasNext = Math.floor(totalRegisters / size);
  return {
    data,
    metadata: {
      total: data.length,
      totalPages: hasNext,
      totalPerPage: 50,
      totalRegisters,
      currentCursor: cursor,
      prev: cursor === 1 ? 1 : cursor - 1,
      next: hasNext / cursor < 1 ? 0 : cursor + 1,
    },
  };
}
