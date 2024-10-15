import Game from "./components/Game";
import History from "./components/History";
import { Merchandise } from "./components/Merchandise";
import Roadcom from "./components/Roadcom";
import Slider from "./components/Slider";
import Social from "./components/Social";
import { Token } from "./components/Token";
import Vision from "./components/Vision";

export default function Home() {
  return (
    <div className="md:relative ">
        <img
          src="/assets/mainImg.png"
          className="object-contain w-full md:fixed -z-50"
          alt="Background"
        />

      <div className="md:w-[95vw] lg:w-[90vw] mx-auto scrollbar-thin scrollbar-thumb-gray-500">
        <div className="md:h-[50vh] lg:h-[70vh] xl:h-[80vh] h-0"></div>

        <div className="md:sticky md:z-10 md:top-20 md:pt-20 rounded-t-3xl">
          <div className="md:h-[90vh] md:overflow-y-auto bg-[#FFFFFF] rounded-t-3xl md:z-10">
            <History/>
            <Slider/>
            <Vision/>
            <Roadcom/>
            <Token/>
            <Merchandise/>
            <Game/>
            <Social/>
          </div>
        </div>
      </div>
    </div>
  );
}
