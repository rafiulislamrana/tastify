import { AiOutlineGoogle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvide";
import { useContext } from "react";
const Registration = () => {


    const { createUser, update, HandleGoogleRegi, err, setErr } = useContext(AuthContext);


    const handleRegistration = e => {
        e.preventDefault();
        // setErr("");
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const url = form.get('url')

        if (!/[A-Z]/.test(password)) {
            return setErr("Use atleast one uppercase in your password");
        }
        if (!/[!@#$%^&*]/.test(password)) {
            return setErr("Use atleast one special character in your password");
        }

        createUser(email, password)
            .then(res => {
                // toast("Your Account Created Successfully!");

                if (!res.user.displayName) {
                    update(name, url)
                        .then(res => console.log(res))
                        .catch(err => console.log(err));
                }
            })
            .catch(err => setErr(err.message));




    }

    return (
        <div>
            <div className="my-10 mx-[1rem] md:my-20">
                <div className="flex-col lg:flex-row-reverse justify-center items-center">
                    <div className="card mx-auto flex-shrink-0 w-full max-w-md border-[1px] border-primary rounded-xl bg-primary">
                        <div className="bg-primary rounded-xl pt-8 pb-5">
                            <h2 className="text-4xl text-white font-car bg-primary rounded-xl text-center pb-2">REGISTER</h2>
                            <p className="text-center max-w-md mx-auto bg-primary text-white">Join in the club now!</p>
                        </div>
                        <form onSubmit={handleRegistration} className="card-body rounded-t-xl pt-5 pb-3 bg-white">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" name="name" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="name" placeholder="photo url" className="input input-bordered" name="url" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />

                            </div>
                            <label className="bg-white label label-text-alt pb-8 rounded-b-xl text-red-500">
                                {
                                    err
                                }
                            </label>
                            <div className="form-control mt-6 gap-3">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="w-full px-8 bg-white">

                            <button onClick={HandleGoogleRegi} className="btn btn-primary w-full"><AiOutlineGoogle className="text-2xl"></AiOutlineGoogle> Register with Google</button>
                        </div>
                        <label className="bg-white label label-text-alt px-8 pb-8 rounded-b-xl">
                            Already have an account?
                            <NavLink to={"/login"} className="label-text-alt link link-hover font-semibold text-primary">Login now</NavLink>
                        </label>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Registration;