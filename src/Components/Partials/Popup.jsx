import React from 'react';

const Popup = (props) => (
    <div style={{ position: 'fixed', zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.64)', width: '100%', height: '100%', overflow: 'hidden', top: 0, left: 0 }}>
        <div className="text-center text-white" style={{ position: "absolute", top: '50%', left: '50%', zIndex: 999999, transform: 'translate(-50%, -50%)' }}>
            <h1 className="mt-4">{props.msg}</h1>
            <button className="btn btn-danger mt-2 col-sm-3" onClick={(e) => props.onClick()}>OK</button>
        </div>
    </div>
)

export default Popup;
