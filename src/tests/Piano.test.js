import React from 'react';
import {shallow, mount} from 'enzyme';

import Piano from '../components/Piano';
import Keys from '../components/Keys';
import Logger from '../components/Logger';

describe("<Piano />", ()=> {
    it("should render Piano component", ()=> {
        const piano = shallow(<Piano id={0} keys={["C", "D", "E", "F", "G", "A", "B"]}/>);
        expect(piano.find(Keys)).toBeDefined();
        expect(piano.find(Logger)).toBeDefined();
    });
});