// ou passar props para Button e no on click passamos props.event e no botão props.text
function Button({event, text}){
    return <button onClick={event}>{text}</button>
}
export default Button;