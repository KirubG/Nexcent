import React from 'react'
import { footerLinks } from '../constants'
import { NavLink } from 'react-router-dom';

function Footer() {
    let date = new Date();
    let thisYear = date.getFullYear();
  return (
    <>
      <div className="w-full bg-[#263238] h-32 mt-24 flex flex-col flex-wrap">
        {footerLinks.map((link, index) => {
          return (
            <ul>
              <li>
                <NavLink
                  className=" text-[#ffffff] hover:text-[#43a046]"
                  to={link.route}
                  key={index}
                >
                  {link.linkName}
                </NavLink>
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