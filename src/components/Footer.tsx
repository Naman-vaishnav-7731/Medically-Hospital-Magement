import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="footer flex h-[7vh] bg-[#312E81] mt-10">
      <div className="right-footer w-2/4 flex justify-center items-center">
        <h3 className="text-white text-2xl">Medically🩺</h3>
      </div>
      <div className="left-footer w-2/4 flex justify-center items-center">
        <h4 className="text-white text-lg">Terms of Services | Privacy Policy</h4>
      </div>
    </footer>
  );
};

export default Footer;
