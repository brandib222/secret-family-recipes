// import React, { useState } from 'react';
// //import { useHistory } from 'react-router-dom';
// import axiosWithAuth from '../utils/axiosWithAuth';
// import url from '../utils/URL';

// const initialFormValues = {
//     username: '',
//     password: ''
// }

// const errorValues = {
//     error: ''
// }

// export default function Login() {
//     //const { push } = useHistory();
//     const [formValues, setFormValues] = useState(initialFormValues);
//     const [error, setError] = useState(errorValues);

//     const onChange = (e) => {
//         setFormValues({
//             ...formValues,
//             [e.target.name]: e.target.value
//         })
//     }


//     const onSubmit = (e) => {
//         e.preventDefault();
//         axiosWithAuth().post(`${url}/api/auth/login`, formValues)
//             .then(res => {
//                 localStorage.setItem('token', res.data.token)
//                 //push('/')
//             }).catch(err => {
//                 setError({
//                     error: err.response.data.message
//                 })
//             });
//     }

//     return (
//         <form className='login-wrapper' onSubmit={onSubmit}>
//             <label> Username:
//                 <input 
//                     value={formValues.username}
//                     name='username'
//                     type='text'
//                     placeholder='username'
//                     onChange={onChange}
//                 />
//             </label>
//             <label> Password:
//                 <input 
//                     value={formValues.password}
//                     name='password'
//                     type='text'
//                     placeholder='password'
//                     onChange={onChange}
//                 />
//             </label>
//             <button> Log In </button>
//             <p> {error.error} </p>
//         </form>
//     )
// }