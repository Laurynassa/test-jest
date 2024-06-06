//app.test.js
import React from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import { act } from "react";
import '@testing-library/jest-dom/extend-expect';
import App from "../../App";

test('Submit forms', async ()=>{
    //render component
    render(<App/>)

    //check initial likes count 
    expect(screen.getByText('Vardas:')).toBeInTheDocument()

    expect(formElement).toHaveValue("Vardas", 'Krabas')

    //Get the button element 

    //Simulate button click
    fireEvent.click(submitButton)

    //Check like count
    // expect(screen.getByText('Result: ')).toBeInTheDocument();

    //Check initial values of form
    // expect(screen.getByText(''))

})