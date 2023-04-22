import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {

return (
    <div>
        <h1>Vanukas</h1>
        <CartWidget cantCarrito={1} />
    </div>
)

}