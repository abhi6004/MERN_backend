// This class represents the structure of a standard API response.
class ApiResponse {
    // The constructor function is called when a new instance of the class is created.
    constructor(statusCode,       // HTTP status code for the response.
                data,              // Data to be included in the response.
                message = "Success" // Default success message if none is provided.
    ) {
        // Assign values to properties specific to the ApiResponse class.
        this.statusCode = statusCode;  // HTTP status code for the response.
        this.data = data;              // Data to be included in the response.
        this.message = message;        // Response message.
        
        // Determine the success status based on the HTTP status code (statusCode < 400).
        this.success = statusCode < 400;
    }
}

// Export the ApiResponse class for use in other files.
export { ApiResponse };
