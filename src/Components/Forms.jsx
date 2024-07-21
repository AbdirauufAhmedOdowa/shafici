import { useState } from "react"
import { toast, Toaster } from "react-hot-toast"
function Forms({ handle }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)

    const handleSave = (event) => {
        event.preventDefault()
        if (title == "" && description == "") {
            setError(true)
        }

        setTimeout(() => {
            setError(false)
        }, 4000);

        const newNote = {
            id: Date.now(),
            title: title,
            description: description
        }


        const getData = localStorage.getItem("data")
        let checkData = getData ? JSON.parse(getData) : ""
        checkData = [...checkData, newNote]

        localStorage.setItem("data", JSON.stringify(checkData))


        toast.success("saved", {
            position: "top-right",
        })




    }




    return <div className=" bg-black  h-screen absolute w-full top-0">
        <div className="mt-10 flex justify-center">

            <form className="bg-white sm:w-[400px] sm:h-[500px] w-[300px] h-[400px] p-4 sm:mt-20 mt-10">
                <i onClick={handle} class="fa-solid fa-xmark text-5xl sm:ml-[340px] ml-[240px] sm:mb-5 mt-1"></i>
                {
                    error == true ? <p className="text-red-600">Fill the blank</p> : ""
                }
                <input value={title} onChange={(event) => {

                    setTitle(event.target.value)

                }} className="border-2 border-black sm:w-[350px] h-[50px] w-[250px] rounded sm:mt-3 " type="text" placeholder="Enter title" />
                <br />
                <textarea value={description} onChange={(event) => {

                    setDescription(event.target.value)

                }} className="border-2 border-black sm:w-[350px] w-[250px] rounded sm:mt-5 mt-2" rows={8} placeholder="Description" />
                <br />
                <br />
                <button onClick={handleSave} className="bg-black text-white sm:w-[350px] w-[250px] text-3xl sm:mt-10 mt-0 sm:h-[50px] sm:h-[30px">Save</button>
            </form>
        </div>
    </div>


}
export default Forms