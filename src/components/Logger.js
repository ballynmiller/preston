import React from 'react';
import PropType from 'prop-types';
import uuid4 from 'uuid/v4';

import './Logger.scss';

const Logger = (props) => {
    return (
        <div className="logger">
            {props.history.map((entry, index) => <span className="history" key={uuid4()}>{entry}</span>)}
        </div>
    );
}

Logger.propType = {
    history: PropType.arrayOf(PropType.string).isRequired
}

export default Logger;
