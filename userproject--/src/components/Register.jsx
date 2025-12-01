import { useState } from "react"

export default function Register()
{
    const [formData,setformData]=useState({
        uname:"",uemail:"",upass:"",ucpass:""
    })

    const [errors,setErrors]=useState({});
    const [successMsg,setSuccessMsg]=useState("");

    const handleChange=(e)=>{
        setformData({...formData,[e.target.value]:e.target.value})
    }

    const validate=()=>{
        let newErrors={};
        if(!formData.uname) newErrors.uname='Name is required';
        if(!formData.uemail) newErrors.uemail='Email is required';
        if(!formData.upass) newErrors.upass='Password is required';
        if(!formData.ucpass) newErrors.ucpass='Confirm Password is required';
        if(formData.upass!==formData.ucpass) newErrors.ucpass="Password and Confirm password does not match";
        return newErrors;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const validateErrors=validate();
        setErrors(validateErrors);
        if(Object.keys(validateErrors).length===0)
        {
            setSuccessMsg("Registration done Successfully");
        }
        else
        {
            setSuccessMsg("Registration Failed");
        }
    }

    return(
        <>
        <center>
        <h1>Regsiter Form</h1>
        <form>
            <label>Enter Name:</label>
            <input type="text" name="unmae"/>
            <br /><br />
            <label>Enter Email:</label>
            <input type="text" name="umial"/>
            <br /><br />
            <label>Enter Password:</label>
            <input type="number" name="upass"/>
            <br /><br />
            <label>Enter Confirm Password:</label>
            <input type="number" name="ucpass"/>
            <br /><br />
            <input type="submit" value={"submit"} />&nbsp;
            <input type="reset" value={"cancel"} />
        </form>
        </center>
        </>
    )

}