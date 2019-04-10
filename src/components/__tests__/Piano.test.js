import React from 'react';
import {shallow} from 'enzyme';

import Piano from '../Piano';
import Keys from '../Keys';
import Logger from '../Logger';
import TextInputAndPlay from '../TextInputAndPlay';

describe("<Piano />", ()=> {
    it("should render Piano component", ()=> {
        const piano = shallow(<Piano id={0} keys={["C", "D", "E", "F", "G", "A", "B"]}/>);
        expect(piano.find(Keys)).toBeDefined();
        expect(piano.find(Logger)).toBeDefined();
        expect(piano.find(TextInputAndPlay)).toBeDefined();
    });
});
