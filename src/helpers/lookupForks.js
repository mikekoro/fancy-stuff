import axios from "axios";

/**
 * Get lists of possible forks
 * @param {string} forks_url Url of a fork(s)
 * @param {number} limit Optional max amount of forks to return. If omitted, the function will return everything
 */
export const lookupForks = async (forks_url, limit) => {
  try {
    let response = await axios({
      method: "get",
      url: forks_url,
    });

    if (limit) {
      // if limit is passed, filter accordingly
      const altered_response = {
        ...response,
        data: response.data.slice(Math.max(response.data.length - limit, 0)),
      };
      return [null, altered_response];
    }
    return [null, response];
  } catch (error) {
    return [error];
  }
};
