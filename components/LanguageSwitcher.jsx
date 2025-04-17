"use client";

import React from "react";
import { TbLanguageHiragana } from "react-icons/tb";

const LanguageSwitcher = () => {
  return (
    <div className="bg-primary p-1 bg-base-200 rounded-lg">
      <TbLanguageHiragana className="text-accent" size={24} />
    </div>
  );
};

export default LanguageSwitcher;
