import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import PatternLock from "react-pattern-lock";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { GiTiredEye,GiEyelashes } from "react-icons/gi";
import { TiEyeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";



const Login = () => {
    const [path, setPath] = useState([]);
    const [show, setshow] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onTouched" })

    const onSubmit = (data) => {

        if(path.length > 0){
            let pattern = path.join("");
            data["pattern"]=pattern;
            console.log(data);
            reset();
    
            toast.success("Login successfull.")
        }else toast.error("Pattern in required.")
    }

    const onChange = path => {
        setPath([...path]);
    };

    return (
        <div className="login_form">
            <div className="col-md-4 animatediv my-4">
                <Card>
                    <CardBody className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3>Sign-in to continue!...</h3>

                            <div className="my-2">
                                <label>E-mail</label>
                                <input type="text" className="form-control" name="email"
                                placeholder="Enter admin E-mail"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required."
                                        },
                                        pattern : {
                                            value : /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                            message : "Invalid E-mail"
                                        }
                                    })}
                                />

                                {errors.email && <span className="errors">* {errors.email.message}</span>}
                            </div>
                            <div className="my-2">
                                <label>Password</label>
                                <div className="input-group">
                                    <input type={show ? "text" : "password"} className="form-control" name="password"
                                    placeholder="Enter password"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "This field is required."
                                            },
                                            pattern: {
                                                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                                message: "Invalid password"
                                            }
                                        })}
                                    />
                                    <span className="input-group-text" type="button" onClick={() => setshow(!show)}>
                                        {show ? <GiEyelashes /> : <TiEyeOutline />}
                                    </span>
                                </div>

                                {errors.password && <span className="errors">* {errors.password.message}</span>}
                            </div>
                            <div className="my-2">
                                <label>Pattern</label>
                                <div className="d-flex justify-content-center">
                                    <PatternLock
                                        width={300}
                                        pointSize={15}
                                        size={3}
                                        path={path}
                                        onChange={onChange}
                                        style={{
                                            background: "#0b80f2",
                                            borderRadius: "16px"
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="frgot d-flex justify-content-between">
                                <Link to="/forgot-pattern">Forgot Pattern?</Link>
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div>

                            <div className="text-center">
                                <button className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Login;