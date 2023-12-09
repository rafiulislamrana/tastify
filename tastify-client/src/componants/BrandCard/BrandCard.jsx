import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const BrandCard = ({ brand }) => {
    // eslint-disable-next-line react/prop-types
    const { name, img, slug } = brand
    return (
        <div>
            <Link to={`/${slug}`}>
                <div className="card border-2 border-primary h-full flex flex-col justify-around">
                    <figure className="px-10 pt-10">
                        <div className="w-[200px]">
                            <img src={img} alt="Shoes" className="rounded-xl w-full" />
                        </div>

                    </figure>
                    <div className="flex flex-col justify-center items-center text-center pb-10">
                        <h2 className="card-title text-black dark:text-white">{name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandCard;