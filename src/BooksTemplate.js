const Books = (props) => {
    // console.log(props);  
    // let img = "https://m.media-amazon.com/images/I/71Z4KrPtxvL._AC_UY218_.jpg"
    // let title = "Murder at the Bookstore";
    // let author = "sue Minix"

    let buyBtnHandler = () => {
        alert(`${props.tile} book is bought`)
    }

    function cartBtnHandler(e) {
        alert(`${props.title} book is added to Cart`)
        // console.log(e)
    }
    return (
        < article className="singlebook" >
            {props.children}
            <img src={props.image} className="imageClass" alt="book_Image  " />
            <h3>{props.title}</h3>
            <h2>{props.author}</h2>
            <h2>
                {props.job} <span>{props.number}</span>
            </h2>
            <h3>price: {props.price}</h3>
            <div style={{ display: "flex", flexDirection: "row", gap: ".5rem" }}>
                <button className="buy-btn" onClick={buyBtnHandler}>Buy</button>
                <button className="buy-btn" onClick={cartBtnHandler}>Add to Cart</button>
            </div>
        </article >
    );
};

// const Image = () => {
//     return <img src="https://m.media-amazon.com/images/I/71Z4KrPtxvL._AC_UY218_.jpg" width="200px" alt="book_Image  " />
// }

// const Title = () => <h2>Murder at the Bookstore</h2>

// const Author  = () => <h3>Sue Minix</h3>

// const Person = () => {
//     return <h1>Faisal Ameen</h1>
// }

// const Para = () => {
//     return <p>This is Faisal and this is my first component</p>
// }

// const Greeting = () => {
//     return React.createElement("div", {}, React.createElement("h1", {}, "Hello Faisal"))
// }


export default Books