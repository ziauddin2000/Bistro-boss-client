const Cover = ({ img, title, subtitle }) => {
  return (
    <>
      <div
        className="pt-20 pb-10 px-2 h-[500px] flex items-center justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="max-w-2xl w-full mx-auto  flex flex-col items-center gap-3 bg-[#15151587] p-10 rounded-sm text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl uppercase font-bold text-white">
            {title}
          </h1>
          <h4 className="text-lg uppercase font-normal text-white">
            {subtitle}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Cover;
