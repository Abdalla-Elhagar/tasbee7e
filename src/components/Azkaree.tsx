import { HiOutlineDotsVertical } from "react-icons/hi";
import MyButton from "./MyButton";
import { useContext, useEffect, useRef, useState } from "react";
import type { zekrTypes } from "./AddZekrMenu";
import { AiOutlineDelete } from "react-icons/ai";
import { azkarDataContext } from "../context/azkarDataContext";
import { useNavigate } from "react-router";
import { azkarIdContext } from "../context/azkarIdContext";

export default function Azkaree() {
  const navigate = useNavigate();
  const { setId } = useContext(azkarIdContext);

  const { sharedValue } = useContext(azkarDataContext);
  const refWindow = useRef<HTMLDivElement>(null);
  const refBtn = useRef<HTMLDivElement>(null);

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if (
      refWindow.current &&
      !refWindow.current.contains(event.target as Node)
    ) {
      refBtn.current?.click();
    }
  }

  const [zekrData, setZekrData] = useState(
    JSON.parse(localStorage.getItem("Azkaree") || "[]") as zekrTypes[]
  );

  useEffect(() => {
    setZekrData(JSON.parse(localStorage.getItem("Azkaree") || "[]"));
  }, [sharedValue]);

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const reverceZekrData = [...zekrData];

  function handleOpenTasbe7aa(id: number) {
    navigate("/tasbee7");
    setId(id);
  }
  return (
    <section
      onClick={handleClick}
      className="mt-20 flex justify-center items-center flex-wrap gap-5"
    >
      {reverceZekrData?.length === 0 && <h2>لسه مضيفتش أذكار</h2>}
      {reverceZekrData?.length > 0 &&
        reverceZekrData.reverse().map((zekr: zekrTypes) => (
          <button
            key={zekr.id}
            className="w-full md:w-[200px] h-[200px] px-2 py-4 pt-8 flex justify-between items-center flex-col gap-5 text-center bg-neutral-800 rounded-2xl relative border border-[#333] duration-300 hover:border-[#777]"
            onClick={() => handleOpenTasbe7aa(zekr.id)}
          >
            <MyButton
              myRef={refBtn}
              text={<HiOutlineDotsVertical />}
              styles="absolute top-4 left-2 text-xl hover:text-emerald-400 duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setOpenMenuId(openMenuId === zekr.id ? null : zekr.id);
              }}
            />
            <div className="text-xl font-bold">{zekr.name}</div>
            <div className="text-lg">{zekr.count} تسبيحه</div>
            {openMenuId === zekr.id && (
              <ControleMenu zekrId={zekr.id} menuRef={refWindow} />
            )}
          </button>
        ))}
    </section>
  );
}

function ControleMenu({ menuRef, zekrId }: { menuRef?: any; zekrId: number }) {
  const { setSharedValue } = useContext(azkarDataContext);

  const [zekrData, setZekrData] = useState(
    JSON.parse(localStorage.getItem("Azkaree") || "[]") as zekrTypes[]
  );

  function handleDelete() {
    setZekrData((prev: any) => {
      const filteredData = prev.filter((ele: zekrTypes) => ele.id !== zekrId);
      setSharedValue(filteredData);
      return filteredData;
    });
  }

  useEffect(() => {
    localStorage.setItem("Azkaree", JSON.stringify(zekrData));
  }, [zekrData]);

  return (
    <div
      ref={menuRef}
      className="h-[40px] absolute p-2 px-4 rounded-xl flex justify-between items-center top-1 left-8 bg-neutral-900 border border-neutral-800"
    >
      <MyButton
        styles="hover:text-red-500 text-2xl"
        onClick={() => handleDelete()}
        text={<AiOutlineDelete />}
      />
    </div>
  );
}
