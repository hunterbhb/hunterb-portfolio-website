"use client";

import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hunterbhb11@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Resets after 2 seconds
  };
  return (
    <button
      onClick={handleCopyEmail}
      className={`hover:cursor-pointer shadow bg-neutral-content p-1 rounded-lg transition-all ${
        copied ? "animate-glow" : ""
      }`}
    >
      <FaRegCopy className="text-secondary" size={24} />
    </button>
  );
};

export default CopyEmailButton;
