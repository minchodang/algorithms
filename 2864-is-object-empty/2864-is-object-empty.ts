type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
	 if (Array.isArray(obj)) {
    return obj.length === 0;
  } else if (typeof obj === 'object') {
    return Object.keys(obj).length === 0;
  } else {
    return !obj; // null 또는 false일 경우에도 고려
  }
};