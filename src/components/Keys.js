import React from 'react';
import PropTypes from 'prop-types';

const Keys = (props) => {
    return (
        <div>
            {props.keys.map(key => <div className="keys" key={key.note} onClick={props.onClick}>{key.note}</div>)}
        </div>
    );
}

Keys.propTypes = {
    keys: PropTypes.arrayOf(PropTypes.shape({
        note: PropTypes.string,
        isHighLighted: PropTypes.bool
    })).isRequired,
    onClick: PropTypes.func.isRequired
}

export default Keys;