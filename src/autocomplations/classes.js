export const classes = [
    { 
        "label": "Object", 
        "type": "class", 
        "info": "The fundamental constructor for all JavaScript objects. It provides a blueprint for creating objects and contains static methods for manipulating keys, values, and property descriptors.\n\nnew Object(value?: any)" 
    },
    { 
        "label": "Function", 
        "type": "class", 
        "info": "The constructor for every JavaScript function. While functions are usually declared with the 'function' keyword or arrow syntax, this class allows for dynamic function creation from strings.\n\nnew Function(...args: string[], functionBody: string)" 
    },
    { 
        "label": "Boolean", 
        "type": "class", 
        "info": "An object wrapper for the primitive boolean type. Used to convert non-boolean values into true or false, though usually used implicitly via logical operations.\n\nnew Boolean(value?: any)" 
    },
    { 
        "label": "Symbol", 
        "type": "class", 
        "info": "A unique and immutable primitive value used as an identifier for object properties. Symbols are guaranteed to be unique even if they share the same description.\n\nSymbol(description?: string | number)" 
    },
    { 
        "label": "Error", 
        "type": "class", 
        "info": "The generic constructor for creating error objects. It is used to provide custom error messaging and capture stack traces when an exception occurs.\n\nnew Error(message?: string, options?: object)" 
    },
    { 
        "label": "EvalError", 
        "type": "class", 
        "info": "An error type representing a failure regarding the global eval() function. Modern JavaScript rarely throws this, but it remains for backward compatibility.\n\nnew EvalError(message?: string)" 
    },
    { 
        "label": "RangeError", 
        "type": "class", 
        "info": "Indicates an error when a value is not within the set or range of allowed values, such as when creating an array of illegal length or passing bad values to numeric methods.\n\nnew RangeError(message?: string)" 
    },
    { 
        "label": "ReferenceError", 
        "type": "class", 
        "info": "Occurs when attempting to access a variable that has not been declared or is outside the current scope.\n\nnew ReferenceError(message?: string)" 
    },
    { 
        "label": "SyntaxError", 
        "type": "class", 
        "info": "Thrown when the JavaScript engine encounters code that does not conform to the language's formal grammar rules during parsing.\n\nnew SyntaxError(message?: string)" 
    },
    { 
        "label": "TypeError", 
        "type": "class", 
        "info": "Occurs when an operation is performed on a value of the wrong type, such as attempting to execute a non-function or accessing properties of null/undefined.\n\nnew TypeError(message?: string)" 
    },
    { 
        "label": "URIError", 
        "type": "class", 
        "info": "Thrown when the global URI handling functions (like decodeURI or encodeURI) are passed a malformed or improperly encoded string.\n\nnew URIError(message?: string)" 
    },
    { 
        "label": "Number", 
        "type": "class", 
        "info": "A wrapper class for numeric values. It provides constants for maximum/minimum values and methods for formatting (toExponential, toFixed) and type checking.\n\nnew Number(value?: any)" 
    },
    { 
        "label": "BigInt", 
        "type": "class", 
        "info": "Used for working with integers larger than the maximum safe integer limit of the standard Number type. Useful for high-precision timestamps or large financial IDs.\n\nBigInt(value: number | string)" 
    },
    { 
        "label": "String", 
        "type": "class", 
        "info": "A constructor for string objects. It contains methods for searching (indexOf), slicing (substring), and manipulating (toLowerCase, trim) sequences of characters.\n\nnew String(value?: any)" 
    },
    { 
        "label": "Array", 
        "type": "class", 
        "info": "A global object used to construct list-like structures. Arrays possess methods to perform traversal, mutation, and functional transformations (map, filter, reduce).\n\nnew Array(element0, element1, ..., elementN)\nnew Array(arrayLength: number)" 
    },
    { 
        "label": "Map", 
        "type": "class", 
        "info": "A collection of keyed data items, similar to an Object. However, Maps allow keys of any type (including objects) and maintain the insertion order of elements.\n\nnew Map(iterable?: iterable)" 
    },
    { 
        "label": "Set", 
        "type": "class", 
        "info": "A collection of unique values. Sets automatically prevent duplicate entries and provide efficient methods to check for the existence of an item.\n\nnew Set(iterable?: iterable)" 
    },
    { 
        "label": "WeakMap", 
        "type": "class", 
        "info": "A variant of Map where keys must be objects and are held weakly, meaning they do not prevent garbage collection if no other references to the key exist.\n\nnew WeakMap(iterable?: iterable)" 
    },
    { 
        "label": "WeakSet", 
        "type": "class", 
        "info": "A variant of Set that stores only objects and holds them weakly. Useful for tagging objects without preventing their removal from memory.\n\nnew WeakSet(iterable?: iterable)" 
    },
    { 
        "label": "Date", 
        "type": "class", 
        "info": "Provides functionality for working with dates and times. It handles UTC and local time zones, formatting, and time calculations since the Unix Epoch.\n\nnew Date()\nnew Date(value: number | string)\nnew Date(year, monthIndex, day?, hours?, minutes?, seconds?, ms?)" 
    },
    { 
        "label": "RegExp", 
        "type": "class", 
        "info": "Used for matching text with a pattern. Regular expressions provide powerful search-and-replace functionality based on specific character rules and flags.\n\nnew RegExp(pattern: string | RegExp, flags?: string)" 
    },
    { 
        "label": "Promise", 
        "type": "class", 
        "info": "Represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows chaining via .then() and .catch().\n\nnew Promise(executor(resolve, reject))" 
    },
    { 
        "label": "Math", 
        "type": "variable", 
        "info": "A built-in namespace object that provides properties and methods for mathematical constants and functions (trigonometry, logarithms, rounding).\n\nMath.property | Math.method()" 
    },
    { 
        "label": "JSON", 
        "type": "variable", 
        "info": "A namespace object providing methods to parse JavaScript Object Notation (JSON) strings into objects and stringify objects into JSON format.\n\nJSON.parse(text: string, reviver?)\nJSON.stringify(value: any, replacer?, space?)" 
    },
    { 
        "label": "console", 
        "type": "variable", 
        "info": "Provides access to the browser's or environment's debugging console. It allows for logging data, measuring execution time, and displaying stack traces.\n\nconsole.method(data: any)" 
    },
    { 
        "label": 'log', 
        "type": 'function', 
        "info": "Outputs a general message to the console. Can accept multiple arguments and string substitution patterns.\n\nconsole.log(...data: any[])" 
    },
    { 
        "label": 'error', 
        "type": 'function', 
        "info": "Outputs an error message to the console. Typically renders with a red background or an error icon to highlight critical failures.\n\nconsole.error(...data: any[])" 
    },
    { 
        "label": 'warning', 
        "type": 'function', 
        "info": "Outputs a warning message to the console. Usually styled with a yellow icon to indicate potential issues that are not yet errors.\n\nconsole.warn(...data: any[])" 
    },
    { 
        "label": 'info', 
        "type": 'function', 
        "info": "Outputs an informational message to the console. In some environments, these messages are filtered separately or styled with an 'i' icon.\n\nconsole.info(...data: any[])" 
    },
    { 
        "label": 'clear', 
        "type": 'function', 
        "info": "Clears the console of all previous logs, providing a clean slate for debugging. Note: this might be disabled by user settings in some browsers.\n\nconsole.clear()" 
    },
    { 
        "label": "Intl", 
        "type": "variable", 
        "info": "The namespace for the Internationalization API, providing language-sensitive string comparison, number formatting, and date/time formatting.\n\nIntl.DateTimeFormat | Intl.NumberFormat | Intl.ListFormat" 
    },
    { 
        "label": "Reflect", 
        "type": "variable", 
        "info": "A built-in object that provides methods for interceptable JavaScript operations. Useful for proxying and metadata management without using the old Object methods.\n\nReflect.get(target, propertyKey) | Reflect.set(target, propertyKey, value)" 
    },
    { 
        "label": "Proxy", 
        "type": "class", 
        "info": "Enables the creation of an object that can intercept and redefine fundamental operations (e.g., property lookup, assignment, enumeration) for another object.\n\nnew Proxy(target: object, handler: object)" 
    },
    { 
        "label": "ArrayBuffer", 
        "type": "class", 
        "info": "Used to represent a generic, fixed-length raw binary data buffer. It is the core storage for TypedArrays and cannot be manipulated directly.\n\nnew ArrayBuffer(length: number)" 
    },
    { 
        "label": "Uint8Array", 
        "type": "class", 
        "info": "A TypedArray representing an array of 8-bit unsigned integers (0 to 255). Commonly used for processing image data or network packets.\n\nnew Uint8Array(length | buffer | iterable)" 
    },
    { 
        "label": "Int8Array", 
        "type": "class", 
        "info": "A TypedArray representing an array of 8-bit signed integers (-128 to 127).\n\nnew Int8Array(length | buffer | iterable)" 
    },
    { 
        "label": "Uint16Array", 
        "type": "class", 
        "info": "A TypedArray representing an array of 16-bit unsigned integers (0 to 65535).\n\nnew Uint16Array(length | buffer | iterable)" 
    },
    { 
        "label": "Int16Array", 
        "type": "class", 
        "info": "A TypedArray representing an array of 16-bit signed integers (-32768 to 32767).\n\nnew Int16Array(length | buffer | iterable)" 
    },
    { 
        "label": "Uint32Array", 
        "type": "class", 
        "info": "A TypedArray representing an array of 32-bit unsigned integers.\n\nnew Uint32Array(length | buffer | iterable)" 
    },
    { 
        "label": "Int32Array", 
        "type": "class", 
        "info": "A TypedArray representing an array of 32-bit signed integers.\n\nnew Int32Array(length | buffer | iterable)" 
    },
    { 
        "label": "Float32Array", 
        "type": "class", 
        "info": "A TypedArray representing an array of 32-bit floating-point numbers (equivalent to float in C).\n\nnew Float32Array(length | buffer | iterable)" 
    },
    { 
        "label": "Float64Array", 
        "type": "class", 
        "info": "A TypedArray representing an array of 64-bit floating-point numbers (equivalent to double in C).\n\nnew Float64Array(length | buffer | iterable)" 
    },
    { 
        "label": "DataView", 
        "type": "class", 
        "info": "Provides a low-level interface for reading and writing multiple number types in an ArrayBuffer, regardless of the platform's endianness.\n\nnew DataView(buffer: ArrayBuffer, byteOffset?, byteLength?)" 
    },
    { 
        "label": "BigInt64Array", 
        "type": "class", 
        "info": "A TypedArray representing an array of 64-bit signed integers.\n\nnew BigInt64Array(length | buffer | iterable)" 
    },
    { 
        "label": "BigUint64Array", 
        "type": "class", 
        "info": "A TypedArray representing an array of 64-bit unsigned integers.\n\nnew BigUint64Array(length | buffer | iterable)" 
    }
];