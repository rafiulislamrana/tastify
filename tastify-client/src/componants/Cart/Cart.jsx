import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvide";
import CartList from "../CartList/CartList";

const Cart = () => {
    const { user, setCart, cart } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://tastify-server.vercel.app/cart/${user.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])

 
    return (
        <div>
            <div className="max-w-3xl mx-auto py-20">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-black dark:text-white">Name</th>
                                <th className="text-black dark:text-white">Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(prod => <CartList key={prod._id} list={prod}></CartList>)
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                               
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;