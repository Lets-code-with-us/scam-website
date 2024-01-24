class ApiError extends Error {
    statusCode: number;
    status: any;
    constructor(statusCode: number, message:string) {
        super(message);
        this.statusCode = statusCode;
        this.message=message;
    }
}


export default ApiError