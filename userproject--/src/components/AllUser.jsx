import users from  "./User";
import SingleUser from "./SingleUser";
import { useState } from "react";

const AllUser=()=>{
    const [emp,setEmp]=useState([]);
    const [showemp,setshowemp]=useState(false);

    const addEmp=()=>{
        setEmp(users);
        setshowemp(true);
    }

    const deleteAlluser=()=>{
        setEmp([]);
        setshowemp(false);
    }

    const deleteUser=(id)=>{
        const updatedEmp=emp.filter(e=>e.id!==id);
        setEmp(updatedEmp);
        if(updatedEmp.length===0)
        {
            setshowemp(false);
        }
    }

    return(
        <>
        <div>
            <center>
            <h1>Emplyees Data</h1>
            {!showemp && (
                <button onClick={addEmp}>Add Emp</button>
            )}

            {showemp &&(
                    <table border={1} cellPadding={10} cellSpacing={8}>
                        <tbody>
                                {emp.map((e)=>(
                                    <SingleUser key={e.id} user={e} deleteUser={deleteUser}/>
                                ))}
                        </tbody>
                    </table>
            )}
            <br />

            {showemp &&(
                <button onClick={deleteAlluser}>Delete All Emp</button>
            )}
            </center>
        </div>
        </>
    )
}

export default AllUser;