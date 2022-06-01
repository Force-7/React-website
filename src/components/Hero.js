import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particleConfig } from "../assets/particleConfig";

function Hero({ currTheme }) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="hero min-h-screen" id="hero">
      <Particles
        id="tsparticles"
        className="h-screen -z-50"
        init={particlesInit}
        options={particleConfig(currTheme ? "#ffffff" : "#000000")}
      />
      <div class="hero-content text-center bg-base-300 rounded-3xl lg:px-48 lg:py-32 sm:px-16 sm:py-8">
        <div class="max-w-md">
          <h1 class="text-2xl font-bold">Hej, nazywam się</h1>
          <h2 class="text-2xl mt-5">Michał Pawełczyk</h2>
          <p class="py-6">
            Uwielbiam kodować! Ostatni rok spędziłem ucząć się nowych
            frameworków, języków i technologii. W ramach mojej drogi edukacyjnej
            miałem przyjemność uczestniczyć w wielu kursach, które pomogły mi w
            osiągnieciu wymarzonego celu jakim jest praca jako Web Developer.
          </p>
          <button class="btn btn-outline btn-primary">
            {/* <a href="https://store3.gofile.io/download/c0ffcfce-9089-411e-98f7-f82d3609539c/CV%20Micha%C5%82%20Pawe%C5%82czyk.pdf"> */}
            <a href="https://www.linkedin.com/in/pawelczyk-michal/">
              Sprawdź LinkedIn
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
