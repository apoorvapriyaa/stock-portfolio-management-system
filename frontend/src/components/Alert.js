import React from 'react'

export default function Alert(props) {
    return (
        <div style={{ height: '45px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.txt}</strong>: {props.alert.msg}
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                />
            </div>}
        </div>
    )
}