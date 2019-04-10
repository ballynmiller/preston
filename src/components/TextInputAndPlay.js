import React from 'react';
import PropTypes from 'prop-types';

import './TextInputAndPlay.scss';

const TextInputAndPlay = (props) => {
    return (
        <div className="tip-container">
            <input type="text" onChange={props.onChange} value={props.playOrder}/>
            <button disabled={props.isPlaying} type="submit" onClick={props.onClick}>Play</button>
        </div>
    );
};

TextInputAndPlay.propTypes = {
    onClick: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool,
    playOrder: PropTypes.string.isRequired
}

export default TextInputAndPlay;
