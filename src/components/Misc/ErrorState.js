import React from "react";

/**
 * Display a nice alert with generic error message 
 * and some additional info if available
 * @param {object} error Error data returned from the API 
 */

const ErrorState = ({error}) => {
    if(!error) return null;
    return (
        <div className="alert alert-warning">
            Error! Something went wrong.
            <samp className="d-block small mt-2">
                {
                    error.response && error.response.data ? (
                        <span>{JSON.stringify(error.response.data)}</span>
                    ) : null
                }
            </samp>
        </div>
    )
}

export default ErrorState;