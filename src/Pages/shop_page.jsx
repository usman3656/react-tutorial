import { Item } from "../Componenst/shopping/Counter"
import {useNavigate} from "react-router-dom"


export default function ShopPage(){

    const navigate = useNavigate();
    const login = () => {
        navigate("/login");
    }

    return(
        <div>
            <h1>Shop Page</h1>

            <button className="btn btn-success" onClick={login}>
                go to login
            </button>

            
            <Item/>
            <Item/>


           
            <div>
            </div>

        </div>
    )
}