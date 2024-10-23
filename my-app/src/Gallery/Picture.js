import "./Picture.css";
function Picture(props)
{
    const imgNumber = props.id % 40 < 10 ? '0' + (props.id % 40 + 1).toString() : (props.id % 40 + 1).toString();
    return (
        <div class="picture">
            <h5>{props.title}</h5>
            <img src={'icons/Icon14_' + imgNumber + '.png'}></img>
            <p>{props.description}</p>
        </div>
    )
}

export default Picture;