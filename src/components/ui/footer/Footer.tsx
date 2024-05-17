import { FaGithub, FaLinkedin, FaMailchimp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Footer = () => {
    return (
        <footer className="py-7">
            <ul className="flex flex-row justify-center mb-3 gap-3">
                <a href="https://github.com/ImDamianDev/" className="text-primary-500"><FaGithub size="2.5em" /></a>
                <a href="https://www.linkedin.com/in/imdamian-dev/" className="text-primary-500"><FaLinkedin size="2.5em" /></a>
                <a href="mailto:imdamian.dev@gmail.com" className="text-primary-500"><IoMdMail size="2.5em" /></a>
            </ul>
            <p className="text-center text-xl font-semibold">Con <span className="text-red-500">&#x2665;</span> desde Chile.</p>
            <span className="flex justify-center text-lg">{new Date().getFullYear()}</span>
        </footer>
    );
};