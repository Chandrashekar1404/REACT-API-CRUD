import { useParams } from "react-router"

export default function ProductDetails() {

    const { productID } = useParams()

    return (
        <>
            <div>
                <h1>Product Details</h1>
                <p>product ID: {productID} </p>
            </div>
        </>
    )
}