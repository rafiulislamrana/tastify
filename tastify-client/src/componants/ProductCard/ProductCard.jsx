import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, photo, brandname, name, price, rating, type } = product;
    return (
        <div>
            <div className="card shadow-sm shadow-secondary">
                <figure className="px-5 md:px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl h-[150px] md:h-[300px] w-full object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className="badge badge-primary badge-outline">{type}</div>
                    <div className="badge badge-accent badge-outline">{brandname}</div>
                    <h2 className="card-title text-black dark:text-white">{name}</h2>
                    <Rating initialRating={rating} readonly 
                    emptySymbol={<AiOutlineStar href="#icon-star-full" className="icon text-black dark:text-white"></AiOutlineStar>}
                    fullSymbol={<AiFillStar href="#icon-star-empty" className="icon text-black dark:text-white"></AiFillStar>} />
                    <h2 className="card-title text-button">${price}</h2>
                    <div className="card-actions">
                        <Link to={`/product/${_id}`}><button className="btn btn-primary bg-back dark:bg-[#1d232a] text-black dark:text-white">Details</button></Link>
                        <Link to={`/update/${_id}`}><button className="btn btn-primary bg-back dark:bg-[#1d232a] text-black dark:text-white">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;