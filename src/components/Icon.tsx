const Icon = ({ img, label }: any) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={img} alt={label} className=" h-[80px]" />
      <span className="font-mont text-[18px]  md:text-[24px]">{label}</span>
    </div>
  );
};

export default Icon;
