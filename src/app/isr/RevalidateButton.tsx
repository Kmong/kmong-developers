"use client";

import React from "react";
import createPost from "./createPost";

function RevalidateButton() {
  const handleClickRevalidate = async () => {
    createPost();
  };

  return (
    <button
      className="p-2 bg-white text-gray-800 rounded-lg mb-4 hover:bg-gray-100"
      onClick={handleClickRevalidate}
    >
      재검증
    </button>
  );
}

export default RevalidateButton;
