import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOutline } from 'react-icons/io5';
import { TbInfoSquare } from 'react-icons/tb';
import { Link } from 'react-router';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isSubmitting },
    } = useForm();

    // Handle Submit Form
    const handleRegister = async (data) => {
        console.log(data);
    };

    return (
        <div className="flex justify-center  items-center w-full h-full mt-10 lg:mt-0">
            <div className="w-full md:w-8/12 2xl:w-6/12 px-3">
                <div className="mb-5">
                    <h1 className="text-4xl lg:text-5xl font-bold text-dark-13">Create an Account</h1>
                    <p className="text-lg mt-2 text-dark-12 font-medium">Register with ZapShift</p>
                </div>

                <form onSubmit={handleSubmit(handleRegister)}>
                    {/* Name */}
                    <div className="mb-4">
                        <label className="form-label">Name</label>
                        <input
                            {...register('name', {
                                required: 'name is required!',
                            })}
                            type="name"
                            className={`${errors.name ? 'form-field-error form-field' : 'form-field'}`}
                            placeholder="Name"
                        />
                        <span className={`${errors.name ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}>
                            <TbInfoSquare className="text-lg" /> {errors.name && errors.name.message}
                        </span>
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="form-label">Email</label>
                        <input
                            {...register('email', {
                                required: 'Email is required!',
                            })}
                            type="email"
                            className={`${errors.email ? 'form-field-error form-field' : 'form-field'}`}
                            placeholder="Email"
                        />
                        <span className={`${errors.email ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}>
                            <TbInfoSquare className="text-lg" /> {errors.email && errors.email.message}
                        </span>
                    </div>
                    {/* Password */}
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <div className="relative">
                            <input
                                {...register('password', {
                                    required: 'Password is required!',
                                })}
                                type={showPassword ? 'text' : 'password'}
                                className={`${errors.password ? 'form-field-error form-field' : 'form-field'}`}
                                placeholder="Password"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-[50%] translate-[-50%] right-3 text-xl cursor-pointer"
                            >
                                {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                            </span>
                        </div>
                        <span className={`${errors.password ? 'flex mt-2.5' : 'hidden'} text-sm text-red-500 items-center gap-2`}>
                            <TbInfoSquare className="text-lg" /> {errors.password && errors.password.message}
                        </span>
                    </div>

                    {/* Register Button */}
                    <button
                        className="w-full bg-theme-primary disabled:bg-gray-400 disabled:active:scale-100 disabled:hover:shadow-none disabled:text-white disabled:cursor-not-allowed text-dark-13 font-semibold rounded-md px-4 py-2.5 hover:shadow-btn-inner duration-300 active:scale-95 cursor-pointer"
                        disabled={!isValid || isSubmitting}
                    >
                        {isSubmitting ? <span className="loading loading-spinner loading-sm"></span> : 'Register'}
                    </button>
                </form>
                <div className="mt-4">
                    <span className="text-lg">
                        Already have an account?
                        <Link to="/login" className="underline hover:text-theme-primary duration-200 ml-2">
                            Login
                        </Link>
                    </span>
                </div>

                <span className="text-center text-xl py-4 block">or</span>

                {/* Register with google */}
                <button className="flex items-center justify-center gap-2 w-full bg-gray-200 text-dark-13 font-semibold rounded-md px-4 py-2.5 hover:shadow-btn-inner duration-300 active:scale-95 cursor-pointer">
                    <FcGoogle className="text-xl" /> Register with google
                </button>
            </div>
        </div>
    );
};

export default Register;
