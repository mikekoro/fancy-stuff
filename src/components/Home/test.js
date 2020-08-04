import React from 'react';
import { render, fireEvent, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "./index";

afterEach(cleanup);

it("Simply renders", () => {

	const { debug, queryByTestId } = render(<Home/>);
	expect(queryByTestId("home-wrapper")).toBeTruthy();

})