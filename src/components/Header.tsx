import React from "react";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="px-12 py-6 border-8 border-black text-[14px] font-bold text-black sm:text-[30px]">
      {title}
    </div>
  );
};

export default Header;
