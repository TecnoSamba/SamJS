export const functions = [
    { 
        "label": "forEach", 
        "type": "function", 
        "info": "Executes a provided callback function once for each array element. It is used to iterate over data collections in a functional manner. Unlike for or while loops, it cannot be stopped or broken unless an exception is thrown.\n\nArray.prototype.forEach(callback(currentValue, index?, array?), thisArg?)" 
    },
    { 
        "label": "isNaN", 
        "type": "function", 
        "info": "Determines whether the passed value is NaN (Not-a-Number) after attempting to convert it to a number. It is essential for validating if the result of a failed mathematical operation is a legal numeric value.\n\nisNaN(value: any)" 
    },
    { 
        "label": "isFinite", 
        "type": "function", 
        "info": "Evaluates whether a value is a conventional finite number. Returns false if the argument is Infinity (positive or negative) or NaN. Unlike Number.isFinite, this global method first coerces the argument into a number.\n\nisFinite(value: any)" 
    },
    { 
        "label": "parseFloat", 
        "type": "function", 
        "info": "Parses a string argument and returns the first floating-point number found. If the first character cannot be converted to a number, it returns NaN. Leading whitespace is ignored.\n\nparseFloat(string: string)" 
    },
    { 
        "label": "parseInt", 
        "type": "function", 
        "info": "Parses a string argument and returns an integer of the specified radix (base). It is a best practice to always define the radix (typically 10 for decimal) to avoid misinterpretation of prefixes like 0x or legacy browser behavior.\n\nparseInt(string: string, radix: number)" 
    },
    { 
        "label": "encodeURI", 
        "type": "function", 
        "info": "Encodes a Uniform Resource Identifier (URI) by replacing certain characters with UTF-8 escape sequences. It does not encode characters with functional meaning in a URL (such as ?, #, /, &, =), allowing for the creation of a valid full URL.\n\nencodeURI(uri: string)" 
    },
    { 
        "label": "encodeURIComponent", 
        "type": "function", 
        "info": "Encodes a URI component. Unlike encodeURI, this function encodes almost all characters (including /, ?, &, etc.), making it specifically suited for encoding parameters intended to be placed inside a query string.\n\nencodeURIComponent(uriComponent: string)" 
    },
    { 
        "label": "decodeURI", 
        "type": "function", 
        "info": "Decodes a Uniform Resource Identifier (URI) previously created by encodeURI. It replaces hexadecimal escape sequences with their original characters, skipping those that were not originally encoded for being functional.\n\ndecodeURI(encodedURI: string)" 
    },
    { 
        "label": "decodeURIComponent", 
        "type": "function", 
        "info": "Decodes a URI component. It transforms all escape sequences in the string, including URL structure special characters. It is used to read specific parameter values received within a URL.\n\ndecodeURIComponent(encodedURIComponent: string)" 
    },
    { 
        "label": "setTimeout", 
        "type": "function", 
        "info": "Sets a timer which executes a function or a piece of code once the timer expires (specified in milliseconds). Returns a numeric ID that can be used to cancel the execution before it occurs.\n\nsetTimeout(callback: function, delay: number, ...args?)" 
    },
    { 
        "label": "clearTimeout", 
        "type": "function", 
        "info": "Cancels a scheduled execution previously established by setTimeout. Requires the identifier returned by the original setTimeout call to determine which process to stop.\n\nclearTimeout(timeoutId: number)" 
    },
    { 
        "label": "setInterval", 
        "type": "function", 
        "info": "Repeatedly calls a function or executes a code snippet with a fixed time delay between each call. It continues to execute until manually stopped using clearInterval or the window is closed.\n\nsetInterval(callback: function, delay: number, ...args?)" 
    },
    { 
        "label": "clearInterval", 
        "type": "function", 
        "info": "Permanently stops the iterative execution of a function established by setInterval. The identifier returned by the corresponding interval method must be provided as an argument.\n\nclearInterval(intervalId: number)" 
    },
    { 
        "label": "fetch", 
        "type": "function", 
        "info": "Starts an asynchronous HTTP request across the network to a specific web address. Returns a Promise that resolves into a Response object representing the server's reply (body, status, headers).\n\nfetch(resource: string | Request, options?: object)" 
    }
];