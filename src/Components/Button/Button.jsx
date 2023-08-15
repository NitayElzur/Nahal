import './Button.css'
function Button({ onClick, text, invert }) {
    return (
        <button id={invert ? 'button-invert' : 'button-regular'} onClick={onClick}>{text}</button>
    )
}
export default Button;