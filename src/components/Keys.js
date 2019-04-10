import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import './Keys.scss';

const Keys = (props) => {
    return (
        <>
            {props.keys.map((key) => {
                let highLight = (key.isHighlighted === true) ? 'isHighlighted': '';
                let subClass = (key.note !== null) ? key.note.toLowerCase() : ""; 
                return (
                    <div className={`key ${key.color} ${subClass} ${highLight}`} key={uuidv4()} onClick={props.onClick}>
                        {(key.note !== null)? <span>{key.note}</span>:""}
                    </div>
                )
            })}
        </>
    );
}

Keys.propTypes = {
    keys: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,
        note: PropTypes.string,
        isHighLighted: PropTypes.bool
    })).isRequired,
    onClick: PropTypes.func.isRequired
}

export default Keys;
