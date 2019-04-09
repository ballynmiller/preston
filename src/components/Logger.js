import React from 'react';
import PropType from 'prop-types';
import uuid4 from 'uuid/v4';

const Logger = (props) => {
    return (
        <div>
            {props.history.map((entry, index) => <span key={uuid4()}>{entry}</span>)}
        </div>
    );
}

Logger.propType = {
    history: PropType.arrayOf(PropType.string).isRequired
}

export default Logger;