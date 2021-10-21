import React from "react";

const About = () => {
  return (
    <div className="about container">
      <section className="info">
        <div>
          <p>
            <span className="big">Why programming?</span>
            <br></br>I spent some quality time post university thouroughly
            analyzing what I enjoy doing, what I'm good at, and what prospects
            would suit.
            <br></br>I deduced that I enjoy creating, problem solving, am highly
            analytical, a logical and 'outside the box' thinker, and get a great
            sense of reward from making things more efficient. Programming came
            in the top of these, along with entrapaneurship and business
            strategy consulting. I like to develop digital solutions to improve
            various business problems.
            <br></br>In winter of 2018, I wanted to contribute more than the
            basic tasks I was doing at my then work places in unique and lasting
            ways, I began learning and implementing automation tools for
            repetitive manual tasks - Thus my programming journey began.
          </p>
          <p>
            I enjoy building all kinds of software, solvings various problems,
            and have great interest in artificial intelligence and everything
            data. There's no tech problem I've refused to figure out.
          </p>
          <p>
            <span className="big">Education</span>
            <br></br>I received my Bachelors of Science in Chemistry -
            Pharmaceutical & Biological in 2017. Why chemistry? I'm a very
            curious person, I like to know how things work - chemistry is the
            base and building block of everything we know.
            {/* <br></br>E.g- How are you seeing this right now? Short; Many photons (light particles) emitted at specific wavelengths (giving their color), determined by your computer through the flow of electromagnetic fields to various materials composing the circuitry (translating to digital information).
                        How do your eyes receive these images? How does your brain translate optical information to meaning? How do you process information? Why do you want to do any of this? Why is the sky blue? */}
            I wanted to use this knowledge to make the world better somehow:
            improve the process of detecting disease bio-markers and protein
            binding sites to develop life-saving medicine, bio-hack the genome
            to induce regeneration, biodegrade plastics, build more efficient
            batteries, reduce atmospheric CO2
            <br></br>...You get the point, I could go on forever - and I love to
            actually, <a href="/contact">come chat</a> about all things science.
          </p>

          <p>
            <span className="big">Hobbies</span>
            <br></br>I have a wide array of interests: science, technology,
            business, economics, politics, history, music, art, sports, food,
            culture, you name it. Feel free to{" "}
            <a href="/contact">chat with me</a> about anything.
            <br></br>I like learning new things, travelling the world, exploring
            the outdoors, music, cooking, eating, sunsets, sports,
            weightlifting, board/card games, observing other organisms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
