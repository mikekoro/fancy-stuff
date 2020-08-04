import React, { useState } from "react";

/**
 * Display search form
 * @param {boolean} busy flag to enable/disable submit button to prevent multiple simultaneous sibmissions
 * @param {func} handleSubmit callback to let the parent know about incoming request to search 
 */
const SearchForm = ({handleSubmit,busy}) => {

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(query); // NB: or run the whole procedure here and report to the parent with the results.
    }

    return (    
        <form 
            data-testid="search-form"
            onSubmit={(e) => submit(e)}
            className="my-3">
            <div className="form-group">
                <label htmlFor="username">Github Username:</label>
                <input 
                    data-testid="search-input"
                    type="text"
                    required 
                    className="form-control" 
                    id="username" 
                    aria-describedby="githubUsername"
                    placeholder="Type here..."
                    onChange={handleChange}
                    value={query}
                />
                <small id="githubUsernameHelp" className="form-text text-muted">
                    eg. gaearon
                </small>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
                disabled={busy}
                >
                Search
            </button>
        </form>
    )
}

export default SearchForm;