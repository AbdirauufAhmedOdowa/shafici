import { useState } from "react"

import Forms from "./Forms"
function Header() {
    
    const [open, setOpen] = useState (false)

    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }
    return <div>
        <div className="bg-black flex justify-between">
            <h1 className='text-3xl text-blue font-serif font-bold sm:py-10 sm:px-4 py-6 px-0'>CABDIRAUF</h1>
            <button onClick={handleOpen} className='bg-white rounded-md text-3xl text-blue font-serif font-bold sm:mx-6 sm:px-10 px-0 py-2 sm:py-3 my-6'>Add Cart</button>
        </div>
        {
         open == true ? <Forms handle={handleClose}/> : ""
        }
    </div>
}
export default Header