// import motor from "../assets/motor.png";
import motor from "../assets/mechanic-01.png";
// import motor from "../assets/mechanic-02.png";
// import motor from "../assets/mechanic-03.png";

export const Hero = () => {
  return (
    <div className="container flex flex-col items-center justify-around px-4 py-4 mx-auto text-white border border-t-0 border-yellow-200 h-5/6 md:flex-row">
      <div className="text-center">
        <h1 className="mb-5 text-2xl sm:text-4xl sm:mb-16">
          Especialista em automóveis <br /> Venha conhecer
        </h1>
        <button className="px-10 py-3 text-sm rounded-full shadow-md sm:text-lg bg-amber-400 hover:bg-amber-300 ">
          Atendimento WhatsApp
        </button>
      </div>
      <div className="w-1/2">
        <img src={motor} alt="hero image" />
      </div>
    </div>
  );
};
