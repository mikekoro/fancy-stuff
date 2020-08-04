import React from "react";
import GistList from './../GistItem';

/**
 * Displays the unordered list of person's gists
 * @param {array} gists Array of Gist objects
 */
const GistsList = ({gists}) => {

    if(gists.length === 0) {
        return null;
    }

    return (
        <ul className="list-group" data-testid="gists-feed">
            {gists.map(gist => (
                <li className="list-group-item" key={gist.id}>
                    <GistList gist={gist}/>
                </li>
            ))}
        </ul>
    )
}

export default GistsList;