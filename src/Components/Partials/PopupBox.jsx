import React from 'react';
import { connect } from 'react-redux';
import { ClearStatus } from '../../Context/Actions/Message';

export const Popup = (props) => (
    <div style={{ position: 'fixed', zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.64)', width: '100%', height: '100%', overflow: 'hidden', top: 0, left: 0 }}>
        <div className={`col-sm-4 text-center bg-white alert`} style={{ position: "absolute", top: '50%', left: '50%', zIndex: 999999, transform: 'translate(-50%, -50%)' }}>
            <h4>{props.title}</h4>
            <div>{props.msg}</div>
            <div className="text-center">
            {!props.deleting && props.YesText && <button className={`m-3 col-sm-4 btn btn-lg btn-${props.type || 'primary'}`} onClick={(e) => {
                    e.preventDefault();
                    props.onPressOK()
                }}>{props.YesText || 'Yes'}</button>
            }

            {!props.deleting && <button className={`m-3 col-sm-4 btn btn-lg btn-${props.NoBtnType || 'primary'}`} onClick={(e) => {
                e.preventDefault();
                props.onCancel ? props.onCancel() : props.ClearStatus();
            }}>{props.NoText || 'Cancel'}</button>}
            {props.waitingMsg && <p>{props.waitingMsg}</p>}
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    ClearStatus: () => dispatch(ClearStatus())
});

export const PopupBox = connect(undefined, mapDispatchToProps)(Popup);
