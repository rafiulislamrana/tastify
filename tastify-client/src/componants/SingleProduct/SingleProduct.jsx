import { useLoaderData } from "react-router-dom";
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvide";
import Swal from 'sweetalert2';

const SingleProduct = () => {
    const { user, cart, setCart } = useContext(AuthContext)
    const product = useLoaderData();

    useEffect(() => {
        fetch(`https://tastify-server.vercel.app/cart/${user.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])


    const { _id, photo, description, brandname, name, price, rating, type } = product;
    

    const handleCart = () => {
        const list = { name, price, _id, photo, email: user.email };
        const findProd = cart.find(prod => prod._id == _id);
        if (!findProd) {
            fetch('https://tastify-server.vercel.app/cart', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(list)
            })
                .then(res => {
                    res.json();
                    Swal.fire('Product Added in the Cart!')
                    .then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            window.location.reload()
                        }
                        }
                      )
                })
                .then(data => console.log(data))
        }
        else{
            Swal.fire('Product Already Added in the Cart!')
        }

    }
    return (
        <div>
            <div className="max-w-6xl mx-auto py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
                    <div className=" lg:col-span-2">
                        <img className=" w-4/5 mx-auto lg:w-full h-[250px] md:h-[450px] object-cover rounded-lg" src={photo} alt="" />
                    </div>
                    <div className="flex flex-col items-center gap-4 justify-center mx-3 md:mx-0">
                        <div className="badge badge-accent badge-outline text-black dark:text-white">{type}</div>
                        <h2 className="font-car font-bold text-5xl text-center text-black dark:text-white">{name}</h2>
                        <div className="badge badge-accent badge-outline text-black dark:text-white">{brandname}</div>
                        <Rating initialRating={rating} readonly
                            emptySymbol={<AiOutlineStar href="#icon-star-full" className="icon text-black dark:text-white"></AiOutlineStar>}
                            fullSymbol={<AiFillStar href="#icon-star-empty" className="icon text-black dark:text-white"></AiFillStar>} />
                        <h2 className="card-title text-button text-6xl">${price}</h2>
                        <button onClick={handleCart} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                <div className="mx-3">
                    <p className="py-10 text-center text-black dark:text-white">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;