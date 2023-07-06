import React from "react";
import avatar from "../../../assets/default-avatar.svg";

//Type
type People = {
  id: number;
  name: string;
  nickName?: string;
  images?: {
    small: {
      url: string;
    };
  }[];
};

export function Person({ name, nickName = "Shake And Bake", images }: People) {
  // ?? or||
  const img = images?.[0]?.small?.url ?? avatar;
  return (
    <div>
      <img
        src={img}
        alt={name}
        style={{
          width: "50px",
        }}
      />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  );
}
