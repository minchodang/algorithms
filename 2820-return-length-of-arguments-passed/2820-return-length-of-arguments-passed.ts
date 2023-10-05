type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number{
    
     const argArr= [...args];
    
    return argArr.length;
	
};

/**
 * argumentsLength(1, 2, 3); // 3
 */