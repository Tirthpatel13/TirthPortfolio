import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const links =[
        {
            id: 1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/your-linkedin-profile/',
            style: 'rounded-tr-md',
            target: '_blank',
        },
        {
            id: 2,
            child:(
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://www.github.com',
            target: '_blank',
        },
        {
            id: 3,
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:tp131101@gmail.com',
            target: '_blank',
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/images/heroImage.jpeg",
            style: "rounded-br-md",
            download: true,
        },
    ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download, target}) => (
                <li 
                    key={id}
                    className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
                    <a 
                        href={href} 
                        className='flex justify-between items-center w-full text-white'
                        download={download}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {child}
                    </a>
                </li>
            ))}
            
        </ul>
    </div>
  );
};

export default SocialLinks