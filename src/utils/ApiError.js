class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message);  // Call the parent constructor with the message
        this.statusCode = statusCode;  // HTTP status code
        this.data = null;  // Additional data (can be set later)
        this.message = message;  // Error message
        this.success = false;  // Indicates the operation failed
        this.errors = errors;  // Detailed errors, e.g., validation errors

        if (stack) {
            this.stack = stack;  // If a stack trace is provided, use it
        } else {
            Error.captureStackTrace(this, this.constructor);  // Generate a stack trace if not provided
        }
    }
}

export { ApiError };
