import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUperCase() + lower.slice(1);
    }
  return (
    // props.alert && .... it doesnt let the code after it run if there are no alerts.
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
  )
}
export default Alert