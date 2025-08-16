import { useRef, useState, useEffect, useContext } from "react";
import MyButton from "./MyButton";
import { IoClose } from "react-icons/io5";
import { azkarDataContext } from "../context/azkarDataContext";

export interface zekrTypes {
  id: number;
  name: string;
  desc: string;
  count: number;
}


export default function AddZekrMenu({ closewindow  }: { closewindow: React.MouseEventHandler<HTMLButtonElement> }) {
  const refWindow = useRef<HTMLDivElement>(null);
  const refBtn = useRef<HTMLDivElement>(null);
  const {setSharedValue} = useContext(azkarDataContext);

  const [zekr, setZekr] = useState<zekrTypes>({
    id: 0,
    name: "",
    desc: "",
    count: 0
  });

  const [zekrData, setZekrData] = useState<zekrTypes[]>(
    JSON.parse(localStorage.getItem("Azkaree") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("Azkaree", JSON.stringify(zekrData));
  }, [zekrData]);

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if (refWindow.current && !refWindow.current.contains(event.target as Node)) {
      refBtn.current?.click();
    }
  }

  function AddZekr() {
  const newZekr = { ...zekr, id: Date.now() };
  const updated = [...zekrData, newZekr];

  setZekrData(updated);

  localStorage.setItem("Azkaree", JSON.stringify(updated));

  setSharedValue(zekrData);
}

  return (
    <div onClick={handleClick} className="absolute layout w-full h-lvh bg-black/50 flex justify-center items-center z-50">
      <div ref={refWindow} className="flex flex-col w-full md:w-[400px] min-h-[300px] bg-zinc-800 p-2 relative rounded-xl">
        <MyButton myRef={refBtn} onClick={closewindow} text={<IoClose />} styles="top-5 right-5 w-fit text-xl hover:text-red-500 duration-300" />
        <h2 className="text-2xl text-center mb-10">إضافة ذكر</h2>
        <label htmlFor="zekrName" className="text-lg">أكتب الذكر الجديد</label>
        <input
          id="zekrName"
          type="text"
          value={zekr.name}
          onChange={(e) => setZekr({ ...zekr, name: e.target.value })}
          className="border border-white/40 w-full my-2 rounded-full px-3 py-1"
        />
        <label htmlFor="disc">ملاحظه</label>
        <textarea
          id="disc"
          value={zekr.desc}
          onChange={(e) => setZekr({ ...zekr, desc: e.target.value })}
          className="w-full h-[100px] border border-white/40 mt-2 rounded-xl p-2"
        />
        <MyButton
          text="إضافه"
          onClick={(e) => { AddZekr(); closewindow(e); }}
          styles="w-20 mt-5 py-1 rounded-full self-center hover:scale-105 duration-300 bg-emerald-900"
        />
        
      </div>
    </div>
  );
}
