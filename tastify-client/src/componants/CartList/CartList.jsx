import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvide";
import Swal from 'sweetalert2';
const CartList = ({ list }) => {
    const { cart, setCart } = useContext(AuthContext)
    const { _id, name, price, photo } = list;
    const removeProdDB = (id) => {
        fetch(`https://tastify-server.vercel.app/cart/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount == 1) {
                    Swal.fire('Product Removed from Cart!');
                    const remainingProd = cart.filter(prod => prod._id != _id);
                    setCart(remainingProd);
                }
                console.log(data)
            })
    }
    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-black dark:text-white">{name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="text-button text-xl font-bold">
                        ${price}
                    </div>

                </td>

                <th>
                    <Link to={`/product/${_id}`}><button className="btn btn-ghost btn-xs text-black dark:text-white">details</button></Link>
                </th>
                <th>
                    <Link onClick={() => removeProdDB(_id)} ><button className="btn btn-ghost btn-xs bg-button text-white hover:text-primary">remove</button></Link>
                </th>
            </tr>
        </>
    );
};

export default CartList;