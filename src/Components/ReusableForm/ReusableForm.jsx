import PropTypes from "prop-types";

const ReusableForm = ({formTitle,submitBtnText,handelSubmit,children}) => {
    const localDataSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handelSubmit(data);

    }
    return (
        <div className="max-w-6xl mx-auto p-4 rounded-lg bg-gray-200 flex justify-center items-center flex-col">
            {children}
            <h1 className="text-3xl font-bold underline mb-4">{formTitle}</h1>
            <form onSubmit={localDataSubmit} className="flex flex-col justify-center items-center w-full space-y-2">

            <input type="text" name="name" placeholder="Name" className="p-2 rounded-md w-full max-w-2xl" />

            <input type="email" name="email" placeholder="Email" className="p-2 rounded-md w-full max-w-2xl" />

            <input type="password" name="password" placeholder="Password" className="p-2 rounded-md w-full max-w-2xl" />

            <input type="submit" value={submitBtnText} className="bg-green-400 px-6 py-1 rounded-md"/>
            </form>
        </div>
    );
};

export default ReusableForm;

ReusableForm.propTypes = {
    formTitle: PropTypes.object,
    submitBtnText: PropTypes.object,
    handelSubmit: PropTypes.object,
    children: PropTypes.object
}