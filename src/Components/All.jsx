import { useEffect, useState } from "react"
import {toast, Toaster} from "react-hot-toast"
function All() {

    const [data, setData] = useState ([])

    useEffect( () =>{
        const allNotes = JSON.parse(localStorage.getItem("data"))
        setData(allNotes)

    })

    const handleDelete = (id) => {
      
        const findNotes = data.findIndex((note)=> note.id == id)

        if(findNotes){
            data.splice(findNotes, 1)
            localStorage.setItem("data", JSON.stringify(data))
            toast.success("Deleted notes Succesfully",   {
                position: "top-right",
            })
        }
    }

  
    return <div className="grid sm:grid-cols-[300px_300px_300px] grid-cols-[300px] gap-5 m-10
     sm:m-20 ">
        {
            data.map((note)=>{
            
            return <div id="box" className="border-4 border-blue w-full h-[200px] p-5">
                <h1 className="text-2xl font-bold border-b-2 border-red-300">{note.title} </h1>
                <p>{note.description} </p>
                <button onClick={()=> handleDelete(note.id) } id="btn" className="hidden bg-red-500 text-white rounded-3xl px-5 py-2 mt-16">Delete</button>
             </div>

            })
        }


        <Toaster />
    </div>
}

export default All