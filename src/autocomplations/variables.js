export const variables = [
    { 
        "label": "undefined", 
        "type": "variable", 
        "info": "A primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments. It represents the absence of a value.\n\nundefined" 
    },
    { 
        "label": "Infinity", 
        "type": "variable", 
        "info": "A numeric value representing positive infinity. It is greater than any other number. It is produced when a number exceeds the upper limit of floating-point numbers or by division by zero.\n\nInfinity" 
    },
    { 
        "label": "NaN", 
        "type": "variable", 
        "info": "A special value meaning 'Not-a-Number'. It is returned when a mathematical operation or a function (like Math.sqrt(-1) or parseInt('abc')) fails to yield a meaningful numeric result.\n\nNaN" 
    },
    { 
        "label": "globalThis", 
        "type": "variable", 
        "info": "A standard property that provides a way to access the global object (e.g., 'window' in browsers or 'global' in Node.js) across different JavaScript environments without environment-specific code.\n\nglobalThis" 
    },
    { 
        "label": "arguments", 
        "type": "variable", 
        "info": "An Array-like object accessible inside non-arrow functions that contains the values of the arguments passed to that function. Useful for handling variable-length argument lists.\n\narguments[index]" 
    },
    { 
        "label": "-Infinity", 
        "type": "variable", 
        "info": "A numeric value representing negative infinity. It is lower than any other number. It is typically the result of operations that underflow the floating-point range.\n\n-Infinity" 
    },
    { 
        "label": "null", 
        "type": "variable", 
        "info": "While technically a keyword/literal, it functions as a primitive variable representing the intentional absence of any object value. It is often used to signal that a variable should expect an object but currently holds nothing.\n\nnull" 
    }
];