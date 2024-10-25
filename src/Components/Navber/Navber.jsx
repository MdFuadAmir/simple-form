import { NavLink } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";
const navberdata = [
    {
        id:1,
        name:"Home",
        path:"/"
    },
    {
        id:2,
        name:"About",
        path:"/about"
    },
    {
        id:3,
        name:"Blog",
        path:"/blog"
    },
    {
        id:4,
        name:"Contact",
        path:"/contact"
    },
]

const Navber = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handelOpenMenu = () =>{
        setOpenMenu(!openMenu)
    }
    return (
        <>
        <div className="max-w-6xl mx-auto p-2 flex items-center justify-between">
            {/* logo section*/}
            <div>
                <h1 className="text-xl font-bold font-mono">Simple-Form</h1>
            </div>
            {/* menu section */}
            <div className="hidden md:flex gap-6">
                {
                    navberdata.map(data => <NavLink className={({isActive}) => isActive ? "text-green-400 underline" : ""} to={data.path} key={data.id}>{data.name}</NavLink>)
                }
            </div>
            <div className="flex md:hidden">
                <button onClick={handelOpenMenu}>{openMenu ?   <CgMenuRight size={20}/> : <CgMenuRightAlt size={20}/>}</button>
            </div>
            {/* login section */}
            <div className="hidden md:flex items-center gap-3">
                <h1>name</h1>
                <button className="rounded-md px-6 py-2 border-2 border-green-400 text-green-400">SignIn</button>
            </div>
        </div>
        <div className="p-2">
            {
                openMenu ? <div className="flex flex-col gap-4 p-4 bg-gray-200 rounded-md text-xl font-bold justify-center items-center">
                    {
                    navberdata.map(data => <NavLink className={({isActive}) => isActive ? "text-red-700 underline" : ""} to={data.path} key={data.id}>{data.name}</NavLink>)
                }
                </div> : ""
            }
        </div>
        </>
    );
};

export default Navber;