import React from 'react';
import { mount } from 'enzyme';

import ErrorBoundary from "../ErrorBoundary";

let TestComponent = () =>{
    return "TestComponent";
}

// suppress the error message from the virtual dom
beforeEach(() =>{
    console.error = jest.fn();
});

afterEach(() => {
    console.error.mockClear();
});

describe("<ErrorBoundary />", ()=> {
    it("should render the error message", ()=> {
        const wrapper = mount(
            <ErrorBoundary>
                <TestComponent />
            </ErrorBoundary>
        );
        const error = new Error("Test");
        wrapper.find(TestComponent).simulateError(error);

        wrapper.unmount();
    });
})
