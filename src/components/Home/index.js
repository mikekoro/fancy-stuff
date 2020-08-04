import React, { useState } from "react";
import { getGistsByUsername } from './../../helpers/getGistsByUsername';
import GistsList from './../GistsList';
import LoadingState from './../Misc/LoadingState';
import SearchForm from './../SearchForm';
import ErrorState from './../Misc/ErrorState';

const Home = () => {

    const [gists, setGists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Submits the query to the API and performs basic DOM manipulation
     * @param {string} query Github username to search against
     */
    const handleSubmit = async (query) => {

        setError(null); // reset error message just in case
        setGists([]); // cleanup the list of gists just in case
        setLoading(true); // enable loading indicator

        const [err, response] = await getGistsByUsername(query); // call the API

        if(err) {
            // handle error by removing loading indicator & displaing the error message component
            setLoading(false);
            setError(err);
            return;
        }

        setGists(response.data); // populate the list of Gists
        setLoading(false); // remove loading indicator

    }

    return (
        <div className="container" data-testid="home-wrapper">
            <div className="row justify-content-center">
                <div className="col-md-8 col-12">
                    <SearchForm 
                        busy={loading}
                        handleSubmit={handleSubmit}
                    />
                    <LoadingState 
                        isLoading={loading} 
                        message="Loading public gists..."
                    />
                    <GistsList 
                        gists={gists}
                    />
                    <ErrorState 
                        error={error}
                    />

                </div>
            </div>
        </div>
    )
}

export default Home;