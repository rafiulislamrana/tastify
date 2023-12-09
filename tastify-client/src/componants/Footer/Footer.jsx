const Footer = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <footer className="footer p-10 text-base-content text-black dark:text-white">
                <aside>
                    <a className="font-pacifico normal-case px-0 pb-5 text-5xl text-primary ">Tastify</a>
                    <p>Tastify Industries Ltd.<br />Providing reliable food since 1992</p>
                </aside>
                <nav className="">
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;