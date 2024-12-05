import React from 'react'
import { footerLinks } from '../constants'


function Footer() {
    let date = new Date();
    let thisYear = date.getFullYear();
  return (
    <>
      <div className="w-full bg-[#263238] h-32 mt-8 flex flex-col flex-wrap">
        {footerLinks.map((link, index) => {
          return (
            <ul>
              <li>
                <a
                  className=" text-[#ffffff] hover:text-[#43a046]"
                  href={link.route}
                  key={index}
                >
                  {link.linkName}
                </a>
              </li>
            </ul>
          );
        })}
      </div>
      <p className="text-[#43a046] bg-[#263238] text-center">
        Copyright reserved {thisYear}
      </p>
    </>
  );
}

export default Footer