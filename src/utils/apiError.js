class ApiError extends Error{
    constructor(StatusCode,message)
    {
        super(message)

        this.StatusCode=StatusCode
        this.message=message;
    }
}

module.exports=ApiError