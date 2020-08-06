import React, { Fragment, useState } from "react";
import { lookupForks } from "../../helpers/lookupForks";
import LoadingState from "./../Misc/LoadingState";
import ParseFileTypes from "./../Misc/ParseFileTypes";
import ForkPeeker from "./../Misc/ForkPeeker";
import css from "./style.module.scss";

/**
 * Display basic Gist info including Gist description & forks
 * @param {object} gist Object with Gist data
 */
const GistItem = ({ gist }) => {
  const [loading, setLoading] = useState(false);
  const [peeked, setPeeked] = useState(false);
  const [forks, setForks] = useState([]);

  /**
   * Look up for possible forks & display the container to list them if any
   * @param {string} forks_url Fork's URL
   * @param {*} limit Max amount of forks to pull
   */
  const handleForksLookip = async (forks_url, limit) => {
    setLoading(true);
    const [error, response] = await lookupForks(forks_url, limit);
    if (error) {
      setLoading(false);
      return;
    }
    setPeeked(true);
    setLoading(false);
    setForks(response.data);
  };

  return (
    <Fragment>
      <h5
        className={[css["some-useless-css-rule"], "font-weight-bold"].join(" ")}
      >
        {gist.description ? gist.description : "Unnamed Gist"}
      </h5>
      <ParseFileTypes files={gist.files} />
      <button
        className="btn btn-primary btn-sm"
        disabled={loading}
        onClick={() => handleForksLookip(gist.forks_url, 3)}
      >
        Peek Forks
      </button>
      <LoadingState isLoading={loading} message="Loading possible forks..." />
      <ForkPeeker forks={forks} peeked={peeked} />
    </Fragment>
  );
};

export default GistItem;
