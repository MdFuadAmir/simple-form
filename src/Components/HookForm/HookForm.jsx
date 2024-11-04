import useInputState from "../../Hooks/useInputState";


const HookForm = () => {
    const [name,handelName] = useInputState(null);
    const [email,handelEmail] = useInputState(null);
    const [password,handelPassword] = useInputState(null);

    const handelSubmit = e =>{
        e.preventDefault();
        console.log("submitted");
        console.log(name);
        console.log(email);
        console.log(password);
    }
    return (
        <div className="max-w-6xl mx-auto p-4 rounded-lg bg-gray-200 flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold underline mb-4">hook Form</h1>
            <form onSubmit={handelSubmit} className="flex flex-col justify-center items-center w-full space-y-2">

            <input onChange={handelName} type="text" name="name" placeholder="Name" className="p-2 rounded-md w-full max-w-2xl" />

            <input onChange={handelEmail}  type="email" name="email" placeholder="Email" className="p-2 rounded-md w-full max-w-2xl" />

            <input onChange={handelPassword} type="password" name="password" placeholder="Password" className="p-2 rounded-md w-full max-w-2xl" />

            <input type="submit" value="Submit" className="bg-green-400 px-6 py-1 rounded-md"/>
            </form>
        </div>
    );
};

export default HookForm;