const CmnTitle = ({ subtitle, title }) => {
  return (
    <div className="max-w-lg mx-auto text-center">
      <p className="text-[#D99904] font-medium">
        <i>{subtitle}</i>
      </p>
      <div className="h-[2px] w-full bg-[#E8E8E8] my-4"></div>
      <h1
        className={`uppercase text-2xl sm:text-3xl font-semibold ${
          title == "FEATURED PRODUCT" ? "text-white" : ""
        }`}
      >
        {title}
      </h1>
      <div className="h-[2px] w-full bg-[#E8E8E8] my-4"></div>
    </div>
  );
};

export default CmnTitle;
