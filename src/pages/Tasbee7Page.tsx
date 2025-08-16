import { useContext, useEffect, useState } from "react";
import { azkarIdContext } from "../context/azkarIdContext";
import type { zekrTypes } from "../components/AddZekrMenu";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router";

export default function Tasbee7Page() {
  const navigate = useNavigate();

  

  const { id } = useContext(azkarIdContext);
  
  const [zekrData, setZekrData] = useState(
    JSON.parse(localStorage.getItem("Azkaree") || "[]") as zekrTypes[]
  );
  const zekr = zekrData.find((z) => z.id === id);
const [count, setCount] = useState<number>(zekr?.count || 0);

  function handleTasbee7() {
    setCount((prev) => {
    const newCount = prev + 1;

    setZekrData((data) =>
      data.map((ele) =>
        ele.id === id ? { ...ele, count: newCount } : ele
      )
    );

    return newCount;
  });

  }
  
  useEffect(() => {
  if (id === undefined) return;
  if (!id) {
    navigate("/");
  }
}, [id, navigate]);

  useEffect(() => {
    localStorage.setItem("Azkaree", JSON.stringify(zekrData));
  }, [zekrData]);
  return (
    <main className="bg-black flex justify-center items-center h-screen">
      <div className="container mx-auto max-w-full md:max-w-[600px] h-screen md:h-[600px] bg-neutral-800 flex flex-col items-center justify-between p-4 pt-6 gap-4">
        <div className="name text-2xl font-semibold">{zekr?.name}</div>
        <div
          style={{ whiteSpace: "pre-line", marginBottom: "10px" }}
          className="desc text-lg font-semibold -mt-20"
        >
          {zekr?.desc}
        </div>
        <div className="count text-[60px] font-bold mb-20">{count}</div>
        <MyButton
          onClick={handleTasbee7}
          styles="bg-black w-full py-6 text-3xl active:scale-95"
          text="تسبيح"
        />
      </div>
    </main>
  );
}
