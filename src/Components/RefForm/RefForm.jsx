import { useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // useEffect(()=>{
    //     nameRef.current.focus()
    // },[])


    const handelSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        
    }
    return (
        <div className="max-w-6xl mx-auto p-4 rounded-lg bg-gray-200 flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold underline mb-4">uncontrolled useRef() Form</h1>
            <form onSubmit={handelSubmit} className="flex flex-col justify-center items-center w-full space-y-2">

            <input ref={nameRef} type="text" name="name" placeholder="Name" className="p-2 rounded-md w-full max-w-2xl" />

            <input ref={emailRef} type="email" name="email" placeholder="Email" className="p-2 rounded-md w-full max-w-2xl" />

            <input ref={passwordRef} type="password" name="password" placeholder="Password" className="p-2 rounded-md w-full max-w-2xl" />

            <input type="submit" value="Submit" className="bg-green-400 px-6 py-1 rounded-md"/>
            </form>
        </div>
    );
};

export default RefForm;