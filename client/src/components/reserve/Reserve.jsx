
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../Hooks/useFetch.js"
import {SearchContext} from "../../context/SearchContext.js"
import "./reserve.css";
import { useContext, useState } from "react";
function Reserve({setOpen,hotelId}) {
    const[selectedRooms,setSelectedRomms]=useState([]);
   const {data,loading,error}=useFetch(`http://localhost:8800/api/hotel/room/${hotelId}`);
   const {dates}=useContext(SearchContext);
console.log(data);

const handleSelect=(e)=>{
    const checked=e.target.checked;
    const value=e.target.value;
    setSelectedRomms(checked ? [...selectedRooms,value] : selectedRooms.filter(item => item !== value));
}

console.log(selectedRooms);
  return (
    <div className="reserve">
            <div className="rContainer">
<FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>setOpen(false)}/>
    <span>select your rooms:</span>
   {data.map(item => {
    return(
        <div className="rItem">
        <div className="rItemInfo">
           <div className="rTitle">
            {item.title}
           </div>
           <div className="rDesc">
            {item.desc}
           </div>
           <div className="rMax">
            Max people:<b>{item.maxPeople}</b>
           </div>
          <div className="rPrice">
            {item.price}
            </div>
          <div className="room">
    {item.roomNumbers.map(roomNumber=>(
        <>
         <label>{roomNumber.number}</label>
         <input type="checkbox" value={roomNumber._id} onChange={handleSelect}/>
        </>
    ))}
    <button   className="rButton">Reserve Now !</button>
          </div>
        </div>
     </div>
    )
    
   })}
        </div>
       
</div>
  )
}

export default Reserve