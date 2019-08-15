import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Spinner.css';

const spinner = () =>
    <React.Fragment>
        <Backdrop/>
        <div className="spinner">
            <div className="lds-dual-ring" />
        </div>
    </React.Fragment>

export default spinner;