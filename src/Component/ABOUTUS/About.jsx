import React from "react";
import Container from "../../layouts/Container/Container";

const About = () => {
  return (
    <div className="mb-20 mt-10">
      <Container>
        <div>
          <h2 className="text-orange-500">ABOUT US</h2>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
              <h1 className="text-5xl py-2 text-orange-500 font-bold">Explore All Corners of The World With Us</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <a href="#">Read More</a>
            </div>
            <div className="md:flex gap-20 ml-10 mt-5">
                <img src="../../../public/about_1.webp" className="w-52 h-72 " alt="" />
                <img src="../../../public/about_2.webp" className="w-52 h-72 mt-10" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
