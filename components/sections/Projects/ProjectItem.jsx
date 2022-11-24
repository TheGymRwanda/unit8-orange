import { useRef } from "react";
import ProjectTitle from "./ProjectTitle";

/* eslint-disable @next/next/no-img-element */
const ProjectItem = ({name, imgUri, description}) => {
    const imgRef = useRef();
    
    const toggleImgState = () =>{
        if(imgRef.current.classList.contains('show-img')) imgRef.current.classList.remove('show-img');
        else imgRef.current.classList.add('show-img');
    };

  return (
    <div className="flex flex-col xl:flex-row items-start">
        
        <ProjectTitle name={name} toggleImgState={toggleImgState} />
        <div ref={imgRef} className="opacity-0 h-0 xl:h-full overflow-hidden xl:absolute right-0 top-0 max-w-202.75 transition-all duration-300 -translate-x-10">
            <img src={imgUri} className="max-w-full drop-shadow-pr rounded-xl" alt={name} />
            <div className="text-2xl mt-2">{description}</div>
        </div>
    </div>
  )
}

export default ProjectItem;