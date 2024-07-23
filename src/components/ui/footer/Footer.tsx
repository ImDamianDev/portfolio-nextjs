import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FramerMagnetic } from "../framer-magnetic/FramerMagnetic.jsx";

export const Footer = () => {
    return (
        <footer className="py-12 text-center text-sm font-light border-t-1 border-t-secondary">
            <p>Con <span className="text-lg text-red-400">&#x2665;</span> desde Chile.</p>
            <span className="flex justify-center">{new Date().getFullYear()}</span>
        </footer>
    );
};