import React from "react";

/**
 * Loading indicator with customizable message
 * @param {boolean} isLoading should the loading thingy be displayed
 * @param {string} message custom message
 */
const LoadingState = ({isLoading,message}) => {
    if(!isLoading) return null;
    return (
        <div data-testid="loading-state" className="text-center">{message}</div>
    )
}

export default LoadingState;