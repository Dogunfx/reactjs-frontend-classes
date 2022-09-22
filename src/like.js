import React from "react";

import { useState } from "react";

export function LikeComponent() {
  function handleAction() {
    updateLike(nLike + 1);
  }

  const [nLike, updateLike] = useState(501);

  return (
    <button title="like" onClick={handleAction}>
      <i class="fa fa-heart"></i>
      <span>{nLike}</span>
    </button>
  );
}
