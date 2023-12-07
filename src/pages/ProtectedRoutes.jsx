import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {

    const trainer = useSelector(store=>store.trainer)

    if(trainer.length > 2){
        {/*Si se cumple me permite entrar a las rutas hijas */}
        return <Outlet/> 
    }else{
        {/*Me permite navegar solo a la home */}
        return <Navigate to='/'/>
    }
}
export default ProtectedRoutes