import Container from './UI/Container.jsx';

export default function TeamShowcase() {
  return (
    <section className="relative py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - sticky note and India Gate */}
          <div className="relative flex flex-col items-center lg:items-start"> 
            {/* Sticky note image (Note: Your code previously had group-9.png here, but the image shows group-2.png. I'm keeping group-2.png for the sticky note as per your image. If the sticky note image itself is group-9.png, please adjust the src accordingly.) */}
            <img
              src="/team/group-9.png" // This should be the sticky note image with text
              alt="Some craft films note"
              className="w-[320px] sm:w-[360px] lg:w-[420px] -rotate-6 drop-shadow-xl select-none"
              draggable={false}
            />

            {/* India Gate framed illustration */}
            <div className="mt-12 w-[300px] sm:w-[340px] relative lg:ml-0">
              <div className="relative border-[6px] border-ink/30">
                <img
                  src="/team/india-gate.png"
                  alt="India Gate illustration"
                  className="w-full h-auto object-contain"
                  draggable={false}
                />
                {/* Small underline bar */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1.5 w-24 bg-accent/60 rounded-full" />
              </div>
            </div>
          </div>

          {/* Right side - silhouettes with labels/arrows */}
          <div className="relative mt-20 lg:mt-0 flex flex-col items-center lg:items-start">
            <div className="relative flex items-end justify-center">
              <img
                src="/team/group-2.png" // This should be the image of the team silhouettes (group-9.png)
                alt="Team silhouettes"
                className="w-full max-w-2xl h-auto object-contain select-none top-[-5]"
                draggable={false}
              />

              {/* NEW ARROW 1: Curved arrow pointing down-right (from your image 1) */}
              <div className="absolute -top-12 left-[-20%] -translate-x-1/2 text-ink/90">
                <p className="font-display italic text-[18px]">Film Makers</p>
                </div>
              <img
                src="/team/arrow-down-right.png" // Make sure this path is correct
                alt="Arrow pointing down-right"
                className="absolute top-[-5%] left-[-15%] w-24 h-auto rotate-[-10deg] lg:rotate-0" // Adjust positioning and rotation as needed
                draggable={false}
              />

              {/* NEW ARROW 2: Curled arrow pointing up-right (from your image 2) */}
              <div className="absolute top-[80%] left-[-25%] -translate-x-1/2 text-ink/90">
                <p className="font-display italic text-[18px]">Branding Experts</p>
                </div>
              <img
                src="/team/arrow-up-right.png" // Make sure this path is correct
                alt="Arrow pointing up-right"
                className="absolute bottom-[25%] left-[-20%] w-28 h-auto rotate-[10deg] lg:rotate-0" // Adjust positioning and rotation as needed
                draggable={false}
              />

              <div className="absolute top-[-10%] right-[20%] text-ink/90">
                <p className="font-display italic text-[18px]">Art Curators</p>
              </div>
              <img
                src="/team/down-left.png" // Make sure this path is correct
                alt="Arrow pointing up-right"
                className="absolute top-[-40%] right-[-5%] w-28 h-auto rotate-[10deg] lg:rotate-0" // Adjust positioning and rotation as needed
                draggable={false}
              />

              
              {/* Art Curators label with arrow (existing) */}
              
            </div>

            {/* Bottom copy and CTA */}
            <div className="mt-10">
              {/* UPDATED: Alignment classes moved here */}
              <p className="text-center lg:text-left text-xl md:text-2xl font-serif text-ink/90 mb-5">
                Take a closer look at the stories V bring to life.
              </p>
              
              {/* NEW: Wrapper div to center the button */}
              <div className="text-center">
                <a
                  href="#portfolio"
                  className="inline-block rounded-full px-5 py-2 text-white shadow-md hover:shadow-lg transition"
                  style={{ backgroundColor: '#F26938' }}
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}