const Values = () => {
  return (
    <div className="w-full text-center">
      <p className="text-3xl font-bold">Our Values</p>

      <div className="grid grid-cols-3">
        <div>
          <p className="mb-3 text-xl font-semibold">Community</p>
          <p className="text-xl">
            We aim to be a dedicated learning space for students from all
            backgrounds to learn introductory design.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xl font-semibold">Creativity</p>
          <p className="text-xl">
            We aim to be a home for aspiring designers to enhance their design
            skills and discover new ways to create.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xl font-semibold">Career</p>
          <p className="text-xl">
            We aim to provide students an opportunity to network and the
            necessary resources for a future design career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
