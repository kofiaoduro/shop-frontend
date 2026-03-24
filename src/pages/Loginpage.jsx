import Loginform from "../components/Loginform"


const Loginpage = ({ setUserFirstName })=>{
    return(
        <div className="w-11/12 my-4 mx-auto">
            <Loginform  
                setUserFirstName={setUserFirstName}
            />
        </div>
    )
}

export default Loginpage