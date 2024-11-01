import React from 'react';
import { IoClose } from "react-icons/io5";

const Education = ({close}) => {

  const educationData = [
    {
      college: "Sri Chaitanya techno school Bangalore ",
      degree: "HSC",
      year: "2019"
    },
    {
      college: "Vels institute of science technology & advanced studies",
      degree: "B.Tech Information Technology",
      year: "2020 - 2024"
    }
  ];

    return (
        <div className="" onClick={close} id='main'>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
          <div className='flex justify-end'><button className='text-2xl p-2 rounded-full hover:bg-gray-200' onClick={close}><IoClose /></button></div>
            <div className='flex flex-row justify-between'>
                <h2>Education</h2>
            </div>
            <div className="space-y-4">
        {educationData.map((item, index) => (
          <div key={index} className="p4 rounded-lg text-left">
            <h3 className="text-xl font-semibold">{item.college}</h3>
            <p className="text-base">{item.degree}</p>
            <p className="text-base">{item.year}</p>
          </div>
        ))}
      </div>
      <div>
      <div className='flex flex-row justify-between'>
                <h2>Skill</h2>
      </div>
      <h4>front-end</h4>
  <ul className="flex flex-row flex-wrap gap-2 m-1">
    <li className="rounded-full border px-2 py-0.5 border-black">HTML</li>
    <li className="rounded-full border px-2 py-0.5 border-black">CSS</li>
    <li className="rounded-full border px-2 py-0.5 border-black">Tailwind</li>
    <li className="rounded-full border px-2 py-0.5 border-black">JS</li>
    <li className="rounded-full border px-2 py-0.5 border-black">React JS</li>
  </ul>
  <h4>coding support</h4>
  <ul className="flex flex-row flex-wrap gap-2 m-1">
    <li className="rounded-full border px-2 py-0.5 border-black">VSCode</li>
    <li className="rounded-full border px-2 py-0.5 border-black">Github</li>
  </ul>
</div>

          </div>
        </div>
    );
};

export default Education;