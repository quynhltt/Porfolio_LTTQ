import React, { useEffect } from "react";
import ItemCard from "../../../../components/ItemCard/ItemCard";
import WOW from "wowjs";

export default function ExpItem({ data, isFirstIndex }) {
  useEffect(() => {
    onCapitalize("knowledgeGained");
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  let renderStack = (stack) => {
    return stack.map((stack, index) => {
      return <ItemCard key={index} content={stack} className="mb-2.5" />;
    });
  };

  let renderCategContent = (content) => {
    return content.map((stack, index) => {
      return (
        <div key={index} className="value col-span-3  flex items-baseline space-x-3 mb-1">
          {content.length > 1 ? <i className="fa-brands fa-slack text-sm"></i> : ""}
          <p>{stack}</p>
        </div>
      );
    });
  };

  let onCapitalize = (string) => {
    let result = string.replace(/([A-Z])/g, " $1");
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };

  const categoryClassName = `category col-span-1 text-right tracking-wider font-semibold wow animate__animated animate__fadeInLeft animate__delay-${isFirstIndex ? "2" : "0"}s`;

  const valueClassName = `value col-span-3 wow animate__delay-${isFirstIndex ? "2" : "0"}s animate__animated animate__fadeInRight`;

  let renderExp = () => {
    if (data) {
      let keyName = Object.keys(data).splice(1);
      return keyName.map((item, index) => {
        if (data[item]) {
          switch (item) {
            case "technologyStack":
              return (
                <div key={index} className="grid grid-cols-4 gap-5">
                  <div className={categoryClassName}>{onCapitalize(item)}:</div>
                  <div className={valueClassName}>{renderStack(data[item])}</div>
                </div>
              );
            case "responsibility":
            case "knowledgeGained":
              return (
                <div key={index} className="grid grid-cols-4 gap-5 items-baseline">
                  <div className={categoryClassName}>{onCapitalize(item)}:</div>
                  <div className={valueClassName}>{renderCategContent(data[item])}</div>
                </div>
              );
            default:
              return (
                <div key={index} className={`grid grid-cols-4 gap-5 items-baseline  `}>
                  <div className={categoryClassName}>{onCapitalize(item)}:</div>
                  <div className={`${valueClassName} ${item == "projectName" ? "font-semibold text-xl italic" : ""}`}>{data[item]}</div>
                </div>
              );
          }
        }
      });
    }
  };
  return <div className="exp-item py-5 pr-5 space-y-3 text-lg">{renderExp()}</div>;
}
