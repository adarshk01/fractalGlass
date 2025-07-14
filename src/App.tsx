import "./App.css";
import noise from "../public/untitled.png";

import { Button } from "./components/Buttons";
import dashboard from "../public/product-image.png";
function App() {
  const array = new Array(25).fill(0);
  return (
    <div className="bg-[#090b12]  h-fit relative w-full min-h-screen  pb-41">
      <div className="flex justify-center -top-[60%] h-full w-full   absolute">
        <div className="h-full w-full bg-[radial-gradient(50%_50%_at_center_center,#80aaff_10%,#226cff)] z-0 rounded-full "></div>
      </div>

      <div
        className="flex text-white z-20 gap-0   inset-0  "
        style={{
          gap: 0,

          margin: 0,
          padding: 0,
        }}
      >
        {array.map((_, index) => {
          return (
            <div
              key={index}
              className={`h-screen  bg-[linear-gradient(to_right,rgb(255,255,255,0.2)_0%,rgb(0,0,0,0.2)_34%,rgb(255,255,255,0.2)_100%)]  mix-blend-overlay
               backdrop-blur-[150px] bg-blend-multiply relative  flex-1 min-w-0`}
              style={{
                maskImage: `linear-gradient(to bottom, black 85%, transparent 95%)`,
                fontSize: 0, // Eliminate font-size related spacing
                lineHeight: 0,
              }}
            >
              <div
                className="absolute  h-full w-full mix-blend-multiply"
                style={{ backgroundImage: `url(${noise})`, opacity: 0.05 }}
              ></div>
            </div>
          );
        })}
        <div className=" absolute w-full h-full pb-32">
          {/* Header */}
          <div className="flex justify-between p-10 md:px-16 px-8">
            <div className="font-semibold text-xl">FlowSync</div>
            <div className=" md:flex gap-15 items-center bg-blue-100/10 px-10 py-2  rounded-lg border border-white/30 relative font-semibold  hidden">
              <div className="cursor-pointer">Home</div>
              <div className="cursor-pointer">Pricing</div>
              <div className="cursor-pointer">Solution</div>
              <div className="cursor-pointer">Blog</div>
              <div className="absolute inset-0 blur-xl pointer-events-none"></div>
            </div>
            <button className="bg-blue-600  px-5 py-1 rounded-lg shadow-[0_0_70px_2px_#347aeb] relative cursor-pointer">
              <div
                className="h-full w-full border-2 border-white/30 absolute rounded-lg inset-0"
                style={{
                  maskImage: `linear-gradient(to bottom, black, transparent)`,
                }}
              ></div>
              <span>Login</span>
            </button>
          </div>

          {/* main body */}
          <div className="flex justify-center items-center h-fit w-full mt-20 ">
            <div className=" ">
              <h2 className="md:text-7xl text-4xl md:w-180 w-130 text-center ">
                <span>Workflow</span> <span className="">Automation</span>{" "}
                <span>For</span>{" "}
                <span className="italic font-light bg-gradient-to-r from-white from-50% to-gray-300 bg-clip-text text-transparent">
                  Growing
                </span>{" "}
                <span>Teams</span>
              </h2>
              <div className="flex justify-center mt-5">
                <p className="text-white/80  text-center  md:w-120 w-90">
                  FlowSync integrates your favourite tools into one simple
                  dashboard so your team can focus on what matters.
                </p>
              </div>

              {/* buttons */}
              <div className="mt-20">
                <Button />
              </div>
            </div>
          </div>

          {/* dashboard */}
          <div className="md:h-full md:w-full h-150 w-108 flex justify-center  mt-20  bg-[#090b12]   ">
            <div className="md:h-full md:w-[900px] w-108 bg-[#090b12] flex justify-center z-50 rounded-3xl">
              {" "}
              <div
                className="border-3 border-[#d5e3fe]   h-96 w-[900px] rounded-xl  "
                style={{
                  maskImage: `radial-gradient(circle at 50% -30%, black 10%, transparent 60%)`,
                  WebkitMaskImage: `radial-gradient(circle at 50% -30%, black 10%, transparent 60%)`,
                }}
              ></div>
              <div className="bg-blue-400 h-32 w-96 absolute rounded-full blur-3xl"></div>
              <div className="flex justify-center z-50 absolute p-1 h-fit w-fit  ">
                <img
                  src={dashboard}
                  height={500}
                  width={900}
                  className="md:rounded-3xl rounded-lg  "
                />
                <div className="absolute inset-1 bg-blue-500 opacity-40 mix-blend-overlay rounded-3xl "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
