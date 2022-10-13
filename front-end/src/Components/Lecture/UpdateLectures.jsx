import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateLectures() {
  const { id } = useParams();
  console.log(id);
  return <div>{id}</div>;
}
