import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { useForm } from "react-hook-form";

const TFAverify = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onTouched" })

    const onSubmit = (data) => {

        console.log(data);
        reset();
    }

    return (
        <div className="login_form">
            <div className="col-md-4 my-4">
                <Card>
                    <CardBody className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3>Two-Factor Authentication</h3>
                            <small>Enter the TFA code generated in your Authenticator to proceed.</small>
                            <div className="my-4">
                                
                                <input type="number" className="form-control" name="tfa"
                                placeholder="TFA code"
                                    {...register("tfa", {
                                        required: {
                                            value: true,
                                            message: "This field is required."
                                        }
                                    })}
                                />

                                {errors.tfa && <span className="errors">* {errors.tfa.message}</span>}
                            </div>

                            <div className="text-center">
                                <button className="btn btn-primary">
                                    Verify
                                </button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default TFAverify;