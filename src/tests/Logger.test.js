import React from 'react';
import { shallow, mount } from 'enzyme';

import Logger from '../components/Logger';

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
        expect(logger.find("p").length).toBe(7);

        logger.unmount();
    });
});