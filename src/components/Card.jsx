import React,{useState} from 'react';

function Card({ img, title, text , className}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="pt-10 flex justify-center">
    <div className="w-full max-w-[300px] rounded-md m-2  cursor-pointer" onClick={handleToggle}>
      <img
        src={`${img}`}
        alt="Laptop"
        className={`h-[200px] w-full rounded-md object-cover ${className}`}
      />
      <div className="p-4 bg-white">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className={`mt-3 text-sm text-gray-600 ${!isExpanded ? 'line-clamp-2' : ''}`}>
        {text}
        </p>
      </div>
    </div>
  </div>


  
  );
}

export default Card;
