import React from 'react';
import { mount } from 'enzyme';

import App from '../App';

describe("<App />", ()=> {
    it("should render piano, logger, input field, and a play button", () => {
        const app = mount(<App />);
        let testValue = "C,D,G";
        let testArray = testValue.split(",");

        // find input field and populate with text, verify state updating
        app.find("input[type='text']").simulate("change", {target: {value: testValue}});
        expect(app.state('playOrder')).toBe(testValue);

        app.find("button").simulate("click");
        expect(app.state('history').length).toBe(3);
        
        app.state('history').forEach((str, index) => {
            expect(str).toBe(testArray[index]);
        });
        
        app.unmount();
    });
})



