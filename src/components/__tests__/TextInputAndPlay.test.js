import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import TextInputAndPlay from '../TextInputAndPlay';

describe("<TextInputAndPlay />", () =>{
    it("should render a button and input field", () => {
        let fake = sinon.spy();
        let playOrder = "testInput"
        const textInputAndPlay = shallow(<TextInputAndPlay onClick={fake}  playOrder={playOrder}/>);

        expect(textInputAndPlay.find("input").props().value).toBe(playOrder);
        textInputAndPlay.find("button").simulate("click");
        expect(fake.calledOnce).toBe(true);
        
    })
});
