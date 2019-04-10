import React from 'react';
import { shallow, mount } from 'enzyme';

import Logger from '../Logger';

describe("<Logger />", ()=> {
    it("should render", ()=> {
        shallow(<Logger history={[]} />);
    })
});

describe("Logger with entries", ()=> {
    it("should render with 7 entries", ()=> {
        const history = ["C", "D", "E", "F", "G", "A", "B"];
        const logger = mount(<Logger history={history}/>);
        expect(logger.prop("history")).toBe(history);
        logger.find("span").forEach((elm, index) => {
            expect(elm.props().children[0]).toBe(history[index]);
        });

        logger.unmount();
    });
});
