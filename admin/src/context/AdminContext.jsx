import { createContext, useState } from "react"

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')

    const backendUrl = import.meta.env.ITE_ACKEND_URL

    const value = {
        aToken,setAToken,
        backendUrl,
    }

    return (
        <AdminContextProvider value={value}>
            {props.children}
        </AdminContextProvider>
    )
}

export default AdminContextProvider