const Banner = () => {
    return (
        <div>
            <div className=" min-h-screen w-full" style={{ backgroundImage: 'url()' }}>
                <div className="w-full text-center flex flex-col justify-center items-center gap-10 h-screen">
                    {/* <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div> */}
                    <div>
                        {/* <h1 className="font-audio font-bold text-6xl">Exploring Culinary Delights.</h1>
                        <h1 className="font-bungee font-bold text-6xl">Exploring Culinary Delights.</h1> */}
                        <h1 className="font-car font-bold text-4xl md:text-6xl dark:text-primary text-black ">Exploring Culinary Delights.</h1>
                    </div>
                    <div className="relative w-full text-center">
                    <div className="z-0 bottom-0  absolute h-36 bg-primary w-full">
                        </div>
                        <img className="z-10 md:w-1/3 relative block mx-auto" src="https://i.ibb.co/85kdr5q/pngwing-com.png" alt="" />
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;