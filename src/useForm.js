import {useState} from 'react'
import axios from 'axios'

const useForm = () => {
const [values, setValues]=useState({email:'' , password:''})


const handleChange = e =>{
  const {name , value}=e.target
    setValues({
        ...values,
        [name]:value

    })
}
const handleSubmit = e =>{
    e.preventDefault();
    axios.post('https://gorest.co.in/public-api/posts',values)
    .then(response=>{
        console.log(response)})
}

return{values,handleChange,handleSubmit}
}
export default useForm
