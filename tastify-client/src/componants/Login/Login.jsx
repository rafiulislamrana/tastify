import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProvide";
import { useContext } from "react";
import Swal from "sweetalert2";
const Login = () => {

    const { login, HandleGoogle, err, setErr } = useContext(AuthContext);
    const location = useLocation()
    const navigateUser = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        setErr("");
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        login(email, password)
            .then(res => {
                Swal.fire('You Logged in Successfully!');
                navigateUser(location?.state ? location.state : "/");
            })
            .catch(err => setErr(err.message));
    }
    return (
        <div>
            <div className="my-10 mx-[1rem] md:my-20">
                <div className="flex-col lg:flex-row-reverse justify-center items-center">
                    <div className="card mx-auto flex-shrink-0 w-full max-w-md border-[1px] border-primary rounded-xl bg-primary">
                        <div className="bg-primary rounded-xl pt-8 pb-5">
                            <h2 className="text-4xl text-white font-car bg-primary rounded-xl text-center pb-2">LOGIN</h2>
                            <p className="text-center max-w-md mx-auto bg-primary text-white">Join in the club now!</p>
                        </div>
                        <form onSubmit={handleLogin} className="card-body rounded-t-xl pt-5 pb-3 bg-white">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <label className="bg-white label label-text-alt pb-8 rounded-b-xl text-red-500">
                                {
                                    err
                                }
                            </label>
                            <div className="form-control">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="w-full px-8 bg-white">

                            <button onClick={HandleGoogle} className="btn btn-primary w-full"><AiOutlineGoogle className="text-2xl"></AiOutlineGoogle> Login with Google</button>
                        </div>
                        <label className="bg-white label label-text-alt px-8 pb-8 rounded-b-xl">
                            Are you new here?
                            <NavLink to={"/register"} className="label-text-alt link link-hover font-semibold text-primary">Register now</NavLink>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;