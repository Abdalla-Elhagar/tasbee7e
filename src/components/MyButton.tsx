
import React, { type ReactNode } from "react";

interface myButtonTypes {
    text: string | ReactNode;
    styles?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    myRef?: any;
}


export default function MyButton({text, styles, onClick, myRef}:myButtonTypes) {
  return (
    <div ref={myRef} onClick={onClick} className={`${styles} flex justify-center items-center cursor-pointer duration-300`}>{text}</div>
  )
}
