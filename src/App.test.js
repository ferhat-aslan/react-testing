import React from "react";
import "@testing-library/jest-dom/extend-expect";
import ReactDOM from "react-dom";
import App from "./App";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
it('header', () => { 
  render(<App/>);
 const text=screen.getByText("Emoji Search");
  expect(text).toHaveTextContent("Emoji Search")
 });
 it('emoji find', () => { 
  render(<App/>);
 const texto=screen.getByText("Grinning");
  expect(texto).toHaveTextContent("Grinning")
 });
 it('filter', () => { 
  render(<App/>);
  const input =screen.getByPlaceholderText('Enter weight…')
 userEvent.type(input,"yu")
  expect(screen.getByText("Yum")).toHaveTextContent("Yum")
 });

 it('copy', () => { 
  render(<App/>);
  document.execCommand =jest.fn()
 const textt=screen.getByText("100");

  userEvent.click(textt);
  
  expect(document.execCommand).toBeCalledWith('copy')
  
 });
