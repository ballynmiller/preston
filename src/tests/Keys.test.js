import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Keys from "../components/Keys";

describe("<Keys />", ()=> {
    it("should render", ()=> {
        shallow(<Keys keys={[]} />);
    })
});

describe("<Keys />", ()=> {    
    it("should render Key component", ()=> {
        let fake = sinon.spy();
        const keys = mount(<Keys onClick={fake} keys={[{id: "A", text: "A", isHighlighted: false}]} />);
        expect(keys.childAt(0).text()).toBe("A");
        expect(keys.children().length).toBe(1);

        console.log(keys.childAt(0).length);
        keys.find("div").forEach(node => node.simulate("click"));
        expect(fake.callCount).toBe(1);

        keys.unmount();
    });
});