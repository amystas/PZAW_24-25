function Table2(props)
{

    return (
            <tr>
                <td>{props.index}</td>
                <td>{props.key1}</td>
                <td>{props.key2}</td>
                <td><button onClick={props.onButtonClick}></button></td>
            </tr>
    )
}

export default Table2;