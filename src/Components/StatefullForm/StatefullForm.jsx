import { useState } from "react";


const StatefullForm = () => {
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [error,setError] = useState('');

    const handelSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError("Password must be 6 characters or longer")
        }
        else{
            setError('')
            console.log(name);
            console.log(email);
            console.log(password);
        }
    }

    const handelNameChange = e =>{
        setName(e.target.value);
    }
    const handelEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handelPasswordChange = e =>{
        setPassword(e.target.value);

    }
    return (
        <div className="max-w-6xl mx-auto p-4 rounded-lg bg-gray-200 flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold underline mb-4">Controlled useState() Form</h1>
        <form onSubmit={handelSubmit} className="flex flex-col justify-center items-center w-full space-y-2">

        <input onChange={handelNameChange} type="text" name="name" placeholder="Name" className="p-2 rounded-md w-full max-w-2xl" />

        <input onChange={handelEmailChange} type="email" name="email" placeholder="Email" className="p-2 rounded-md w-full max-w-2xl" required/>

        <input onChange={handelPasswordChange} type="password" name="password" placeholder="Password" className="p-2 rounded-md w-full max-w-2xl" required/>

        <input type="submit" value="Submit" className="bg-green-400 px-6 py-1 rounded-md"/>
        </form>
        {
            error && <p className="text-red-500">{error}</p>
        }
    </div>
    );
};

export default StatefullForm;