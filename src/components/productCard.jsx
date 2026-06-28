

export default function ProductCard(props) {

    console.log(props)

    return (
        <div className ="bg-blue-700 w-60 h-[330.5px]">
            <img src = {props.image} />
            <h1 className="">{props.name}</h1>
            <p className="">{props.price}</p>
        </div>
    )

}