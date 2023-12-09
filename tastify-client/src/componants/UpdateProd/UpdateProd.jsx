import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
const UpdateProd = () => {

    const product = useLoaderData();
    
    const prodId = useParams()
    

    const handleUPForm = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const brandname = form.get("brandname");
        const price = form.get("price");
        const rating = form.get("rating");
        const type = form.get("type");
        
        const photo = form.get("photo");
        const updateProduct = { name, brandname, price, rating, type, photo }
        

        fetch(`https://tastify-server.vercel.app/update/${prodId.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount == 1) {
                    Swal.fire('Product Updated Succesfully!');
                }
                console.log(data)
            })
    }
    return (
        <div>
            <div className="mx-auto max-w-3xl py-20">
                <h1 className="text-center text-3xl font-bold pb-5 text-black dark:text-white">Update Product</h1>
                <form onSubmit={handleUPForm}>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black dark:text-white">Name</span>
                            </label>
                            <input type="text" defaultValue={product.name} name="name" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black dark:text-white">Brand Name</span>
                            </label>
                            <select defaultValue={product.brandname} name="brandname" className="select select-bordered w-full">
                                <option disabled selected>What is the brand name?</option>
                                <option>cocacola</option>
                                <option>mcdonalds</option>
                                <option>starbucks</option>
                                <option>pepsi</option>
                                <option>nestle</option>
                                <option>kelloggs</option>
                            </select>
                            {/* <input type="text" name="brandname" placeholder="Type here" className="input input-bordered w-full " /> */}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black dark:text-white">Price</span>
                            </label>
                            <input type="text" defaultValue={product.price} name="price" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black dark:text-white">Rating</span>
                            </label>
                            <input type="number" defaultValue={product.rating} name="rating" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black dark:text-white">Type</span>
                            </label>
                            <input type="text" defaultValue={product.type} name="type" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black dark:text-white">Photo URL</span>
                            </label>
                            <input type="text" name="photo" defaultValue={product.photo} placeholder="Type here" className="input input-bordered w-full " />
                        </div>


                    </div>
                    <button className="btn btn-block mt-8 text-white">submit</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProd;