import axios from 'axios';
import config from './../config';

/**
 * Pull public gists from a Github user by their username
 * @param {string} username Github username
 */
export const getGistsByUsername = async (username) => {

    try {
        let response = await axios({
            method: 'get',
            url: `${config.SERVER_URL}/users/${username}/gists`
        });
        return [null,response];
    } catch(error) {
        return [error]
    }

}