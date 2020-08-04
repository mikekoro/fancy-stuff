import React from "react";

/**
 * Displays the list of forks
 * @param {array} forks array of objects with forks information 
 * @param {boolean} peeked should the UI be displayed 
 */
const ForkPeeker = ({forks,peeked}) => {

    if(!peeked) return null;

    if(peeked && forks.length === 0) {
        return <p className="text-secondary small my-3">No forks yet:(</p>
    }

    return (
        <ul className="list-unstyled my-3">
            {forks.map(fork => (
                <li key={fork.id} className="fork-item d-flex align-items-center mb-3">
                    <div className="mr-3">
                        <a href={fork.html_url} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={fork.owner.avatar_url} 
                                className="avatar rounded-circle" 
                                alt="github user avatar"
                            />
                        </a>
                    </div>
                    <div>
                        <h6 className="mb-0">{fork.owner.login}</h6>
                        <p className="mb-0 small text-secondary">{fork.owner.type}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ForkPeeker;