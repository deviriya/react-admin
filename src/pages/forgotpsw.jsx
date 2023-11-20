import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { useForm } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onTouched" })
    const navigate=useNavigate();

    const onSubmit = (data) => {

        console.log(data);
        reset();
    }

    return (
        <div className="login_form">
            <div className="col-md-4 animatediv my-4">
                <Card>
                    <CardBody className="">
                        <p className="text-muted" type="button" onClick={()=>navigate(-1)}><FaArrowLeftLong /> Back</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3>Forgot Password ?</h3>
                            
                            <div className="my-4">
                                <label>E-mail</label>
                                <input type="text" className="form-control" name="email"
                                placeholder="Enter admin E-mail"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "E-mail is required."
                                        },
                                        pattern : {
                                            value : /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                            message : "Invalid E-mail"
                                        }
                                    })}
                                />

                                {errors.email && <span className="errors">* {errors.email.message}</span>}
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

export default ForgotPassword;