const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          From my resume, you will also see that I am a dynamic, goal-oriented,
          and positive person.
          <br />I was introduced into the programming later in my career as I
          believe it's truly my passion.
          <br />I also enjoy hiking, traveling the world and cooking diffeent
          cultures meals.
        </p>
      </div>
    </div>
  );
};

export default About;
