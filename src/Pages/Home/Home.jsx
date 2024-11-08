
import HookForm from "../../Components/HookForm/HookForm";
import RefForm from "../../Components/RefForm/RefForm";
import ReusableForm from "../../Components/ReusableForm/ReusableForm";
import StatefullForm from "../../Components/StatefullForm/StatefullForm";




const Home = () => {
    const handelSignupSubmit = data =>{
        console.log("sign up data",data);
    }
    const handelUpdateProfile = data =>{
        console.log("update data", data);
    }
    return (
        <div className="space-y-12">
            <div className=" max-w-6xl mx-auto space-y-6 p-4 border-2 rounded-md">
                <h1 className="text-center text-3xl font-bold">Reusable form</h1>
           <ReusableForm formTitle={"sign up"} submitBtnText={"sign in"} handelSubmit={handelSignupSubmit}>
                <div>
                    <h1>Sign up</h1>
                </div>
           </ReusableForm>

           <ReusableForm formTitle={"profile update"} submitBtnText={"update"} handelSubmit={handelUpdateProfile}>
                <div>
                    <h1>Update</h1>
                </div>
           </ReusableForm>
            </div>
           <StatefullForm/>
           <RefForm/>
           <HookForm/>
        </div>
    );
};

export default Home;