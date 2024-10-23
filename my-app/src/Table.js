import { useState } from "react";
import Table2 from "./Table2";

function Table()
{
    const [flag, setFlag] = useState(false);
    const data = ["text1", "text2", "text3"]
    const data2 = [
        {id: "19fa1020-9d00-4878-a8d2-9fa1ada2eeea", key1: "text1", key2: "text2"},
        {id: "d35b02ec-ed7c-452c-aefb-7af44b7ad879", key1: "text1", key2: "text2"},
        {id: "173905e6-98d1-4bd0-bf77-2e38c333f0d8", key1: "text1", key2: "text2"},
    ]
    return (<>

        { flag ? <div>działa</div> : null }
        <button onClick={()=>setFlag(!flag)}>Change boolean</button>
        <table>
            <thead>
                <tr>
                    <th>L.p.</th>
                    <th>Data 1</th>
                    <th>Data 2</th>
                </tr>
            </thead>
            <tbody>
                { 
                    data.map((el, index, arr) => 
                        { 
                            index++;
                            return(<tr key={index}>
                                <td>{index}</td>
                                <td>{el}</td>
                            </tr>) 
                        }
                    ) 
                }
                {/* {
                    data2.map((el, index, arr) => 
                        {
                            index += data.length + 1;
                            return(<tr key={el.id}>
                                <td>{index}</td>
                                <td>{el.key1}</td>
                                <td>{el.key2}</td>
                            </tr>)
                        }
                    )
                } */}
                {
                    data2.map((el, index) => <Table2 key={el.id} index={data.length + index + 1} key1={el.key1} key2={el.key2} onButtonClick={() => setFlag(!flag)}/>)
                }
            </tbody>
        </table>
        </>
    )
}

export default Table;