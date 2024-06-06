//app.test.js
import React from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import { act } from "react";
import '@testing-library/jest-dom/extend-expect';
import App from "../../App";

test('increse like count, then btton is clicked', async ()=>{
    //render component
    render(<App/>)

    //check initial likes count 
    expect(screen.getByText('Likes: 0')).toBeInTheDocument()

    //Get the button element
    const likeButton = screen.getByText('Like')

    //Simulate button click
    fireEvent.click(likeButton)

    //Check like count
    expect(screen.getByText('Likes: 1')).toBeInTheDocument();

})