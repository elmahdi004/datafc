import { useState , useEffect } from "react";
import axios from "axios";
import { Link } from "@inertiajs/react";


const Footer = () => {
    const [data, setData] = useState({})
    function gethData() {
        axios.get("/settings").then(res => { setData(res.data) })

    }
    useEffect(() => gethData(), [])
    return (
        <>
            <footer className="relative z-10 bg-white pt-14 pb-10 lg:pt-[120px] lg:pb-20">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                            <div className="w-full mb-10">
                                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                                    <img
                                        src="/images/datafc_v_normale.svg"
                                        alt="logo"
                                        className="max-w-full"
                                    />
                                </a>
                                <p className="text-base mb-7 text-body-color">
                                    {data.description}
                                </p>
                                <p className="flex items-center text-sm font-medium text-dark">
                                    <span className="mr-3 text-primary">
                                    <i className="fa-solid fa-phone"></i>
                                    </span>
                                    <span>{data.tel}</span>
                                </p>
                                <p className="flex items-center text-sm mt-3 font-medium text-dark">
                                    <span className="mr-3 text-primary">
                                    <i className="fa-solid fa-fax"></i>
                                    </span>
                                    <span>{data.fix}</span>
                                </p>
                            </div>
                        </div>
                        <LinkGroup header="Entreprise">
                            <NavLink link="/" label="Accueil" />
                            <NavLink link="/sommes-nous" label="Qui sommes nous" />
                            <NavLink link="/contact-nous" label="Contact" />
                        </LinkGroup>
                        <LinkGroup header="Nos Servises">
                            <NavLink link="//ingenierie-de-formation" label="Ingénierie de formation" />
                            <NavLink link="/formation" label="Formation" />
                            <NavLink link="/assistance-conseil-en-recrutement" label="Assistance conseil en recrutement" />
                        </LinkGroup>
                        <LinkGroup header="Formation">
                            <NavLink link="/formations-interentreprises" label="Formations interentreprises" />
                            <NavLink link="/#" label="Nos formations" />
                        </LinkGroup>
                        <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                            <div className="w-full mb-10">
                                <h4 className="text-lg font-semibold mb-9 text-dark">
                                Suivez-nous
                                </h4>
                                <div className="flex items-center mb-6">
                                    <a
                                        href={data.link_linkedin}
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
<i className="fa-brands fa-linkedin-in"></i>                                    </a>
                                    <a
                                        href={data.link_facebook}
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                       <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href={data.link_instagram}
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
             <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <p className="text-base mb-2 text-body-color">
                                   Adresse : {data.adresse}
                                </p>
                                
                                <p className="text-base text-body-color">
                                    © {new Date().getFullYear()} {data.site_name}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </footer>
        </>
    );
};
export default Footer;

const LinkGroup = ({ children, header }) => {
    return (
        <>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                <div className="w-full mb-10">
                    <h4 className="text-lg font-semibold mb-9 text-dark"> {header} </h4>
                    <ul>{children}</ul>
                </div>
            </div>
        </>
    );
};
const NavLink = ({ link, label }) => {
    return (
        <div>
            <li>
                <a
                    href={link}
                    className={`inline-block mb-2 text-base leading-loose text-body-color hover:text-primary`}
                >
                    {label}
                </a>
            </li>
        </div>
    );
};
