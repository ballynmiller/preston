import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Keys from "../Keys";

describe("<Keys />", ()=> {
    it("should render", ()=> {
        let fake = sinon.fake()
        shallow(<Keys onClick={fake} keys={[]} />);
    })
});

describe("<Keys />", ()=> {    
    it("should render Key component", ()=> {
        let fake = sinon.spy();
        const keys = mount(<Keys onClick={fake} keys={[{note: "A", isHighlighted: false}]} />);
        expect(keys.childAt(0).text()).toBe("A");
        expect(keys.children().length).toBe(1);

        keys.find("div").forEach(node => node.simulate("click"));
        expect(fake.callCount).toBe(1);

        keys.unmount();
    });
});
