import { useContext, useEffect, useState } from "react";
import { azkarIdContext } from "../context/azkarIdContext";
import type { zekrTypes } from "../components/AddZekrMenu";
import MyButton from "../components/MyButton";
import { zekrCountContext } from "../context/zekrCountContext";

export default function Tasbee7Page() {
  const { id } = useContext(azkarIdContext);
  const [zekrData, setZekrData] = useState(
    JSON.parse(localStorage.getItem("Azkaree") || "[]") as zekrTypes[]
  );
  const { setCountContext } = useContext(zekrCountContext);

const zekr = zekrData.filter((z:zekrTypes) => z.id === id)[0]
  const [count , setCount] = useState<number>(zekr.count)


  

  function handleTasbee7() {
    () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    } else {
      alert("جهازك لا يدعم الاهتزاز");
    }
  };

  setCount(prev => {
    prev+=1

    const ubdatedZekr = {...zekr,count:prev}

    setZekrData(data=> {

        const ubdatedData = data.map((ele)=> ele.id === id ? {id: ubdatedZekr.id , name: ubdatedZekr.name , count: ubdatedZekr.count , desc: ubdatedZekr.desc , } : ele)

        return ubdatedData
    })


    return prev
  })}

  useEffect(()=> {
    localStorage.setItem("Azkaree", JSON.stringify(zekrData))
  },[count,setCountContext])
  return (
    <main className="bg-black flex justify-center items-center h-screen">
      <div className="container mx-auto max-w-full md:max-w-[600px] h-lvh bg-neutral-800 flex flex-col items-center justify-between p-4 pt-6 gap-4">
        <div className="name text-2xl font-semibold">{zekr.name}</div>
        <div style={{ whiteSpace: "pre-line", marginBottom: "10px" }} className="desc text-lg font-semibold -mt-20">{zekr.desc}</div>
        <div className="count text-[60px] font-bold mb-20">{zekr.count}</div>
        <MyButton onClick={handleTasbee7} styles="bg-black w-full py-6 text-3xl active:scale-95" text='تسبيح' />

      </div>
    </main>
  );
}
