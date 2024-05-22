import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FramerMagnetic } from "../framer-magnetic/FramerMagnetic.jsx";

export const Footer = () => {
    return (
        <footer className="py-12 text-center text-sm font-light border-t-2 border-t-secondary">
            <div className="flex flex-row justify-center mb-3 gap-10">
                <FramerMagnetic>
                    <a href="https://github.com/ImDamianDev/" className="hover:scale-105"><FaGithub size="2em" /></a>
                </FramerMagnetic>
                <FramerMagnetic>
                    <a href="https://www.linkedin.com/in/imdamian-dev/" className="hover:scale-105"><FaLinkedin size="2em" /></a>
                </FramerMagnetic>
                <FramerMagnetic>
                    <a href="mailto:imdamian.dev@gmail.com" className="hover:scale-105"><IoMdMail size="2em" /></a>
                </FramerMagnetic>
            </div>
            <span className="h-[3px] rounded w-[200px] my-5 mx-auto bg-secondary flex" />
            <p>Con <span className="text-red-400">&#x2665;</span> desde Chile.</p>
            <span className="flex justify-center">{new Date().getFullYear()}</span>
        </footer>
    );
};