import axios from 'axios';
function AxiosExample() {

    axios.get('https://raw.githubusercontent.com/jdorfman/awesome-json-datasets/refs/heads/master/tests/relaxed.json')
    .then((response) => {
        Object.keys(response.data).forEach((el) => {console.log(el)});
    }).catch((error) => {
        console.log('error: ', error)
    }).finally(() => {
        
    });
    return <div>Axios</div>
}

export default AxiosExample;