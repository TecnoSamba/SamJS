export const keywords = [
    { 
        "label": "break", 
        "type": "keyword", 
        "info": "Terminates the current loop, switch, or label statement and transfers program control to the statement immediately following the terminated statement.\n\nbreak [label];" 
    },
    { 
        "label": "case", 
        "type": "keyword", 
        "info": "Used within a switch statement to define a specific code block to be executed if the expression matches the value provided after the case keyword.\n\ncase expression:" 
    },
    { 
        "label": "catch", 
        "type": "keyword", 
        "info": "Defines a block of code to handle an exception thrown in a corresponding try block. It receives the error object as an argument.\n\ncatch (error) { ... }" 
    },
    { 
        "label": "class", 
        "type": "keyword", 
        "info": "Declares a class, which is a blueprint for creating objects with shared properties and methods, providing a clearer syntax for prototypal inheritance.\n\nclass Name [extends Other] { ... }" 
    },
    { 
        "label": "const", 
        "type": "keyword", 
        "info": "Declares a block-scoped constant variable. The value cannot be reassigned through assignment or redeclared, though object properties can still be mutated.\n\nconst name = value;" 
    },
    { 
        "label": "continue", 
        "type": "keyword", 
        "info": "Skips the rest of the current iteration in a loop (for, while, or do...while) and continues with the next iteration of the loop.\n\ncontinue [label];" 
    },
    { 
        "label": "debugger", 
        "type": "keyword", 
        "info": "Invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.\n\ndebugger;" 
    },
    { 
        "label": "default", 
        "type": "keyword", 
        "info": "Indicates the fallback code block to execute in a switch statement if no case matches the expression, or defines the default export in a module.\n\ndefault: // in switch\nexport default expression; // in modules" 
    },
    { 
        "label": "delete", 
        "type": "keyword", 
        "info": "Removes a property from an object. If the property's value was an object and there are no more references to it, it is eventually cleared by garbage collection.\n\ndelete object.property;" 
    },
    { 
        "label": "do", 
        "type": "keyword", 
        "info": "Creates a loop that executes a block of code once before checking if a condition is true, then repeats the loop as long as the condition remains true.\n\ndo { ... } while (condition);" 
    },
    { 
        "label": "else", 
        "type": "keyword", 
        "info": "Pairs with an if statement to execute a block of code when the if condition evaluates to false.\n\nelse { ... }" 
    },
    { 
        "label": "enum", 
        "type": "keyword", 
        "info": "Reserved word for future use. In languages like TypeScript, it is used to define a set of named constants.\n\nenum Name { ... }" 
    },
    { 
        "label": "export", 
        "type": "keyword", 
        "info": "Used in modules to export functions, objects, or primitive values so they can be used by other programs with the import statement.\n\nexport { name };\nexport default name;" 
    },
    { 
        "label": "extends", 
        "type": "keyword", 
        "info": "Used in class declarations or expressions to create a class as a child of another constructor (inheritance).\n\nclass Child extends Parent { ... }" 
    },
    { 
        "label": "false", 
        "type": "keyword", 
        "info": "A boolean literal representing the logical value of 'false'. It is a primitive value.\n\nfalse" 
    },
    { 
        "label": "finally", 
        "type": "keyword", 
        "info": "A block of code within a try...catch...finally statement that executes regardless of whether an exception was thrown or caught.\n\nfinally { ... }" 
    },
    { 
        "label": "for", 
        "type": "keyword", 
        "info": "Creates a loop consisting of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement to be executed in the loop.\n\nfor (initialization; condition; afterthought) { ... }" 
    },
    { 
        "label": "function", 
        "type": "keyword", 
        "info": "Declares a function with specified parameters and a body of code. It can also be used to define a function expression.\n\nfunction name(params) { ... }" 
    },
    { 
        "label": "if", 
        "type": "keyword", 
        "info": "Executes a block of code if a specified condition is true. If the condition is false, another statement (else) can be executed.\n\nif (condition) { ... }" 
    },
    { 
        "label": "import", 
        "type": "keyword", 
        "info": "Used to import bindings which are exported by another module. It allows the use of external code within the current file scope.\n\nimport { name } from 'module-name';" 
    },
    { 
        "label": "in", 
        "type": "keyword", 
        "info": "Returns true if a specified property is in an object or its prototype chain. Also used to iterate over enumerable properties in a for...in loop.\n\nproperty in object" 
    },
    { 
        "label": "instanceof", 
        "type": "keyword", 
        "info": "Tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.\n\nobject instanceof constructor" 
    },
    { 
        "label": "new", 
        "type": "keyword", 
        "info": "Creates an instance of a user-defined object type or one of the built-in object types that has a constructor function.\n\nnew Constructor(args);" 
    },
    { 
        "label": "null", 
        "type": "keyword", 
        "info": "A literal that represents the intentional absence of any object value. It is one of JavaScript's primitive values.\n\nnull" 
    },
    { 
        "label": "return", 
        "type": "keyword", 
        "info": "Ends function execution and specifies a value to be returned to the function caller.\n\nreturn expression;" 
    },
    { 
        "label": "super", 
        "type": "keyword", 
        "info": "Used to access and call functions on an object's parent. Typically used in classes to call the parent constructor or parent methods.\n\nsuper(args);\nsuper.method(args);" 
    },
    { 
        "label": "switch", 
        "type": "keyword", 
        "info": "Evaluates an expression and matches its value to a case clause, executing statements associated with that case.\n\nswitch (expression) { ... }" 
    },
    { 
        "label": "this", 
        "type": "keyword", 
        "info": "A property of an execution context that refers to the object currently executing the code. Its value depends on how a function is called.\n\nthis" 
    },
    { 
        "label": "throw", 
        "type": "keyword", 
        "info": "Throws a user-defined exception. Execution of the current function will stop and control will be passed to the first catch block in the call stack.\n\nthrow expression;" 
    },
    { 
        "label": "true", 
        "type": "keyword", 
        "info": "A boolean literal representing the logical value of 'true'. It is a primitive value.\n\ntrue" 
    },
    { 
        "label": "try", 
        "type": "keyword", 
        "info": "Marks a block of statements to try and specifies a response should an exception be thrown. Must be followed by a catch or finally block.\n\ntry { ... }" 
    },
    { 
        "label": "typeof", 
        "type": "keyword", 
        "info": "Returns a string indicating the type of the unevaluated operand (e.g., 'string', 'number', 'boolean', 'object', 'function').\n\ntypeof operand" 
    },
    { 
        "label": "var", 
        "type": "keyword", 
        "info": "Declares a function-scoped or globally-scoped variable, optionally initializing it to a value. Unlike let/const, it is hoisted to the top of its scope.\n\nvar name = value;" 
    },
    { 
        "label": "void", 
        "type": "keyword", 
        "info": "Evaluates the given expression and then returns undefined. It is often used to obtain the undefined primitive value using 'void 0'.\n\nvoid expression" 
    },
    { 
        "label": "while", 
        "type": "keyword", 
        "info": "Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.\n\nwhile (condition) { ... }" 
    },
    { 
        "label": "with", 
        "type": "keyword", 
        "info": "Extends the scope chain for a statement. Note: Use of this keyword is highly discouraged and is forbidden in strict mode.\n\nwith (object) { ... }" 
    },
    { 
        "label": "yield", 
        "type": "keyword", 
        "info": "Used to pause and resume a generator function. It returns the value to the generator's caller and suspends the function's execution state.\n\nyield expression;\nyield* iterable;" 
    },
    { 
        "label": "await", 
        "type": "keyword", 
        "info": "Used to pause the execution of an async function until a Promise is settled (resolved or rejected) and returns the fulfilled value.\n\nawait expression;" 
    },
    { 
        "label": "let", 
        "type": "keyword", 
        "info": "Declares a block-scoped local variable, optionally initializing it to a value. It is more restrictive than var and prevents redeclaring variables in the same scope.\n\nlet name = value;" 
    },
    { 
        "label": "async", 
        "type": "keyword", 
        "info": "Defines an asynchronous function which returns a Promise implicitly. Allows the use of the await keyword within its body.\n\nasync function name() { ... }" 
    },
    { 
        "label": "implements", 
        "type": "keyword", 
        "info": "Reserved for future use in ECMAScript. In TypeScript, it is used to force a class to follow a specific interface structure.\n\nclass Name implements Interface { ... }" 
    },
    { 
        "label": "interface", 
        "type": "keyword", 
        "info": "Reserved for future use in ECMAScript. In TypeScript, it defines a syntactical contract that an object must adhere to.\n\ninterface Name { ... }" 
    },
    { 
        "label": "package", 
        "type": "keyword", 
        "info": "Reserved word for future use in ECMAScript, intended for potential package management features.\n\npackage name;" 
    },
    { 
        "label": "private", 
        "type": "keyword", 
        "info": "Reserved word for future use. In classes, it indicates that a member is only accessible within the class body.\n\nprivate property;" 
    },
    { 
        "label": "protected", 
        "type": "keyword", 
        "info": "Reserved word for future use. In classes, it indicates that a member is accessible only within the class and its subclasses.\n\nprotected property;" 
    },
    { 
        "label": "public", 
        "type": "keyword", 
        "info": "Reserved word for future use. In classes, it indicates that a member is accessible from anywhere.\n\npublic property;" 
    },
    { 
        "label": "static", 
        "type": "keyword", 
        "info": "Defines a static method or property for a class. Static members are called on the class itself, not on instances of the class.\n\nstatic method() { ... }" 
    }
];