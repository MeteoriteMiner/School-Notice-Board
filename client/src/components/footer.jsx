import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDiscord, BsThreads } from 'react-icons/bs';
export default function FooterCom() {
    return (
        <Footer container className="border border-t-8 border-teal-500">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link to="/" className='self-center whitespace-nowrap text-lg 
                            sm:text-xl font-semibold dark:text-white'>
                             School's
                             <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
                             via-purple-500 to-blue-950 rounded-lg text-white'>Notice Board</span>  
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FooterTitle title="about" />
                            <FooterLinkGroup col>
                                <FooterLink href="https://cse.sds.bracu.ac.bd/" target="_blank" rel="noopener noreferrer">BRACU CSE</FooterLink>
                                <FooterLink href="/about" target="_blank" rel="noopener noreferrer">School's Notice Board</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Follow us" />
                            <FooterLinkGroup col>
                                <FooterLink href="https://github.com/MeteoriteMiner" target="_blank" rel="noopener noreferrer">Github</FooterLink>
                                <FooterLink href="https://www.linkedin.com/in/anirban-saha-anjan/" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Legal" />
                            <FooterLinkGroup col>
                                <FooterLink href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</FooterLink>
                                <FooterLink href="#" target="_blank" rel="noopener noreferrer">Terms & Conditions</FooterLink>
                            </FooterLinkGroup>
                        </div>
                    </div>
                </div>
                <FooterDivider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright href="#" by="School's Notice Board™" year={new Date().getFullYear()} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterIcon href="https://www.facebook.com/sahaanirbanstu/" icon={BsFacebook} />
                        <FooterIcon href="https://www.instagram.com/mr.__saha?utm_source=qr&igsh=ZGRxODV4MGc3NXht" icon={BsInstagram} />
                        <FooterIcon href="#" icon={BsTwitter} />
                        <FooterIcon href="https://github.com/MeteoriteMiner" icon={BsGithub} />
                        <FooterIcon href="#" icon={BsDiscord} />
                        <FooterIcon href="#" icon={BsThreads} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}