class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

/*
    This class extends the built-in Error class, adding a statusCode property. It allows you to create errors with specific HTTP status codes.
*/

export const errorMiddleware =(err,req,res,next)=>{
    err.message = err.message || "Internal server Error";
    err.statusCode = err.statusCode || 500;

    /*
        These lines set default values for the error message and status code if they're not already set.
        The following blocks handle specific types of errors:
    */

    if(err.code === 11000){
        const message= `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err= new ErrorHandler(message,400);
    }

    if(err.name === "JsonWebTokenError"){
        const message="Json web token is invalid, Try again";
        err= new ErrorHandler(message,400);
    }

    if(err.name === "TokenExpiredError"){
        const message="Json web token is Expired, Try again";
        err= new ErrorHandler(message,400);
    }

    if(err.name === "CastError"){
        const message=`Invalid ${err.path}`;
        err= new ErrorHandler(message,400);
    }

    const errorMessage = err.errors ? Object.values(err.errors).map(error=>error.message).join(" "):err.message

    return res.status(err.statusCode).json({
        success: false,
        message: errorMessage,
    });
};

export default ErrorHandler;