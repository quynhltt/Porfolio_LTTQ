import React from "react";

export default function Button({ content, typeBtn }) {
  return <button className={`btn ${typeBtn} font-medium tracking-wider`}>{content}</button>;
}
