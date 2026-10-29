import { useState,useEffect } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

export default function UserList() {

    let [users, setusers] = useState([])
    let [loader, setLoader] = useState(false)

    let navigate=useNavigate()


    let url = "http://localhost:3000/users/"

    async function getUsers() {

        try{
             let response = await axios.get(url)

             console.log(response.data)
              setusers(response.data)
              setLoader(false)
        }catch(error){
            console.log(error)
        }

        // let response = await fetch(url)

        // let data = await response.json()

        // console.log(data)

       
        
    }


    useEffect(() => {
        setLoader(true)
        getUsers()
    }, [])


    async function deleteUser(id){
        // console.log("clicked " + id)

        try{
            await axios.delete(url+id)
      
            alert("User deleted successfully")
            getUsers()

        }catch(error){
            console.log(error)
        }

        // let response=await fetch(url+id,{
        //     method:'DELETE',
        // })

        // response=await response.json()

       

    }


    // function for updating user 

    function editUser(id){
        navigate("/edit/"+id)
    }

    return (
        <>
            <div>
                <h1 className='text-3xl font-bold'> getting users through API</h1><br />

                <ul className='flex w-full border-2 justify-between'>
                    <li className='font-bold'>First name</li>
                    <li className='font-bold'>age</li>
                    <li className='font-bold'>Action</li>
                </ul>

                {
                    !loader ? users.map((user) => (
                        <ul key={user.id} className='flex w-full border justify-between'>
                            <li>{user.name}</li>
                            <li>{user.age}</li><br />
                            <li><button onClick={()=>deleteUser(user.id)} className="border bg-red-500 m-2">Delete</button></li><br />
                            <li><button onClick={()=>editUser(user.id)} className="border bg-blue-500 m-2">Edit</button></li><br />
                        </ul>
                    )):
                    <h1>loading...</h1>
                }

            </div>

        </>
    )
}