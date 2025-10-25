


export default function Die(props) {
    
    return <li onClick={props.hold}
    className={props.isHeld?'die_held':'die'}>{props.value}</li>
}