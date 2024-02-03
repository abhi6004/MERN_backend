// This class extends the built-in Error class to create custom errors with additional properties.
class ApiError extends Error {
    // The constructor function is called when a new instance of the class is created.
    constructor(
        statusCode,         // HTTP status code for the error.
        message = "Something went wrong",  // Default error message if none is provided.
        errors = [],         // Additional error details or an array of errors.
        stack = ""           // The stack trace for debugging purposes.
    ) {
        // Call the constructor of the parent class (Error) with the provided error message.
        super(message);

        // Assign values to properties specific to the ApiError class.
        this.statusCode = statusCode;  // HTTP status code for the error.
        this.data = null;             // Additional data related to the error.
        this.message = message;       // Error message.
        this.success = false;         // Indicates that the operation was not successful.
        this.errors = errors;         // Additional error details or an array of errors.

        // Check if a stack trace is provided. If not, capture the stack trace for debugging.
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Export the ApiError class for use in other files.
export { ApiError };
