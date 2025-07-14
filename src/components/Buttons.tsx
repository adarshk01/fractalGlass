export function Button() {
  return (
    <div>
      <div className="flex justify-center md:gap-10 gap-5 mt-10  ">
        <button className="bg-[#2b72ff] md:px-5 md:py-2 px-2.5 rounded-lg shadow-[0_0_70px_5px_#285eb5] relative cursor-pointer">
          {/* <div
                    className="h-full w-full border  border-white/70 absolute rounded-lg inset-0"
                    style={{
                      maskImage: `linear-gradient(to bottom, black, transparent)`,
                    }}
                  ></div> */}
          <span className="font-semibold text-xs md:text-base">
            Start Your Free Trial
          </span>
        </button>

        <button className=" px-5   py-2   rounded-lg border border-white/70 relative cursor-pointer ">
          <span className="font-semibold text-xs md:text-base">
            Book a Free Demo
          </span>
          <div className="h-full w-full blur-xl  bg-white/30 absolute inset-0 rounded-lg"></div>
        </button>
      </div>
    </div>
  );
}
