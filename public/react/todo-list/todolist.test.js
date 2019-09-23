import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ReactTodoApp from "./todolist";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target.
  container = document.createElement("div");
  container.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('ReactTodoApp spec', () => {
  it("renders the TodoApp component", () => {
    expect(container.firstChild).toMatchSnapshot()
  })
});
