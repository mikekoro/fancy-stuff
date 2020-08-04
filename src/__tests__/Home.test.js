import React from 'react';
import { render, fireEvent, cleanup, act } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "./../components/Home/";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("Home App Component", () => {

	const mock = new MockAdapter(axios);

    afterEach(() => {
		cleanup()
	});

	test("Simply renders and not crashing", () => {

		const { debug, queryByTestId } = render(<Home/>);
		expect(queryByTestId("home-wrapper")).toBeInTheDocument();
	
	});

	test("User can type in the search form", () => {

		const { debug, queryByTestId } = render(<Home/>);
		const input_field = queryByTestId('search-input');
		fireEvent.change(input_field, { target: { value: 'I can type' } });
        expect(input_field.value).toEqual('I can type');
	
	});

	test("User can perform search", async () => {

		mock.onGet('https://api.github.com/users/gaearon/gists').reply(200, mock_data);

		const { debug, queryByTestId } = render(<Home/>);
		const form = queryByTestId('search-form');
		const input_field = queryByTestId('search-input');
		fireEvent.change(input_field, { target: { value: 'gaearon' } });
		
		await act( async () => {
			fireEvent.submit(form);
		});

		expect(queryByTestId('gists-feed')).toBeInTheDocument();
	
	});

});

const mock_data = [{
    "id": "a25fd42a1e6b4cc24851978df0a36571",
    "files": {
      "Classes.js": {
        "filename": "Classes.js",
        "language": "JavaScript"
      },
      "Prototypes.js": {
        "filename": "Prototypes.js",
        "language": "JavaScript"
      }
    },
    "description": "Beneath Classes: Prototypes",
    "owner": {
      "login": "gaearon",
      "avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
      "gravatar_id": "",
    },
    "truncated": false
  }]