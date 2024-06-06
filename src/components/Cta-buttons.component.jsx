import React from "react"
import "./cta-button.style.css"

const CtaButtonsComponent = ({name}) => {
    return (
        <div className="cta-btn">
        <button>{name}</button>
    </div>
    )
}
export default CtaButtonsComponent;