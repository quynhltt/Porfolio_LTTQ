import React from "react";

export default function ItemCard({ content, className }) {
  return <span className={`${className} item-card inline-block mr-3 py-1.5 px-2.5`}>{content}</span>;
}
