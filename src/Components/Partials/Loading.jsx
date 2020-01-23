import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = (props) => (
    <div style={{ position: 'fixed', zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.64)', width: '100%', height: '100%', overflow: 'hidden', top: 0, left: 0 }}>
        <div className="text-center text-white" style={{ position: "absolute", top: '50%', left: '50%', zIndex: 999999, transform: 'translate(-50%, -50%)' }}>
            <Loader
                type="Grid"
                color="#fff"
                height="50"
                width="50"
            />
            <h1 className="mt-4">{props.msg}</h1>
        </div>
    </div>
);

export default Loading;
