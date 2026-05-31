
export default function ProductCard(props) {

    console.log("Rendering ProductCard component")
    console.log("ProductCard component rendered")

    console.log(props)

return (
    <div className= "bg-red-200 w-60 h-96" >  
    <img src={props.image}/>
    <h1>{props.name}</h1>
    <p>price:{props.price} </p>
    
    
    </div>
)


}