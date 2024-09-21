import "./propertyList.css";
import useFetch from "../../Hooks/useFetch.js"
const PropertyList = () => {
  const {data,loading}=useFetch("/hotel/countByType");
  const images=[
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
   "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8fHww",
   "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
   "https://media.istockphoto.com/id/591821200/photo/3d-rendering-luxury-hotel-reception-and-lounge.webp?a=1&b=1&s=612x612&w=0&k=20&c=NvpP5lqLBrcoYMDeSVAEjHFrdW9q88lfTArqYstLNr8=",
   "https://media.istockphoto.com/id/1220294905/photo/a-tourist-woman-in-white-dress-walks-over-a-wooden-pier-into-the-tropical-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=D0ggT1hUPUYG9OhH6wQfwejMxdRYL3DGFvcR8BFkurc="
  ]
  return (
    <div className="pList">
      {loading ? "Loading" :(
      <>
      {data && images.map((img,i)=>(
        <div className="pListItem" key={i}>
        <img
          src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>{data[i]?.type}</h1>
          <h2>{data[i]?.count} {data[i]?.type}</h2>
        </div>
      </div>
      ))}

      </>)}
    </div>
  );
};

export default PropertyList;
