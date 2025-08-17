import { GoPlus } from "react-icons/go";
import { useState } from "react";
import AddZekrMenu from "../components/AddZekrMenu";
import MyButton from "../components/MyButton";
import Azkaree from "../components/Azkaree";
import { AzkarDataContext } from "../context/azkarDataContext";


function Home() {
  const [showAddZekrMenu, setShowAddZekrMenu] = useState<boolean>(false);

  return (
    <AzkarDataContext>
      <div className="App relative w-full h-lvh overflow-x-hidden-hidden">
        {showAddZekrMenu && (
          <AddZekrMenu closewindow={() => setShowAddZekrMenu(false)} />
        )}
        <div className="container mx-auto px-10 pt-5">
          <MyButton
            onClick={() => setShowAddZekrMenu(true)}
            styles="fixed bottom-10 right-10 text-xl size-[50px] rounded-full bg-emerald-900 z-40"
            text={<GoPlus />}
          />

          <div className="hellowMessage text-center">
            <h1 className="text-xl md:text-3xl font-bold">
              أهلاً بيك في تسبيحي
            </h1>
            <p className="text-md md:text-xl">
              هنا تقدر تضيف ذكر معين وتسبح علي قد ما تقدر من غير ما تركز في العد
            </p>
          </div>

          <Azkaree />
        </div>
      </div>
      
    </AzkarDataContext>
  );
}

export default Home;
