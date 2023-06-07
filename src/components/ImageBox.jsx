import author from "../assets/author.svg";
import { useState } from "react";

const ImageBox = ({ pexel }) => {
  const [text, setText] = useState('Download')
  return (
    <div className="">
      <img
        className="p-5 object-contain w-[400px] h-full"
        src={pexel.src.portrait}
        alt={pexel.alt}
      />
      <div className="mb-7 ml-5 flex -mt-7 justify-between items-center max-w-[350px]">
        <div className="flex items-center">
          <img className="w-10 h-10" src={author} alt={pexel.photographer} />
          <a href={pexel.photographer_url}>
            <h1 className="text-[24px]">{pexel.photographer}</h1>
          </a>
        </div>
        <a href={pexel.src.portrait} download target="_blank">
          <button onMouseEnter={() => setText('Full image')}
          onMouseLeave={() => setText('Download')}
          >{text}</button>
        </a>
      </div>
    </div>
  );
};

export default ImageBox;
