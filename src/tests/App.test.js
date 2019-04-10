import React from 'react';
import { mount } from 'enzyme';

import App from '../App';

jest.useFakeTimers();

describe("<App />", ()=> {
    it("should render piano, logger, input field, and a play button", () => {
        const app = mount(<App />);
        let inputValue = "C,D,G";
        let historyArray = ["C","D","E","F","G","A","B", ...inputValue.split(",")];

        app.find("div.key").forEach((key) => key.simulate("click"));
        app.find("span.history").forEach((elm, index)=> {
            expect(elm.props().children[0]).toBe(historyArray[index]);
        });

        app.find("input[type='text']").simulate("change", {target: {value: inputValue}});
        expect(app.find("input[type='text']").props().value).toBe(inputValue);

        app.find("button").simulate("click");
        jest.runAllTimers();

        app.find("span.history").forEach((elm, index)=> {
            expect(elm.props().children[0]).toBe(historyArray[index]);
        });

        app.unmount();
    });
});

describe("<App />", ()=> {
    it("test with input that doesn't match a key", () => {
        const app = mount(<App />);

        app.find("input[type='text']").simulate("change", {target: {value: "[]"}});
        app.find("button").simulate("click");
        jest.runAllTimers();

        expect(app.find("span").children().length).toBe(0);

        app.unmount();
    });
});
