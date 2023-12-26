import React, { useEffect } from "react";
import ItemCard from "../../../../components/ItemCard/ItemCard";

export default function ExpItem({ data }) {
  useEffect(() => {
    onCapitalize("knowledgeGained");
  }, []);
  let renderStack = (stack) => {
    return stack.map((stack, index) => {
      return <ItemCard key={index} content={stack} className="mb-2.5" />;
    });
  };

  let renderCategContent = (content) => {
    return content.map((stack, index) => {
      return (
        <div key={index} className="value col-span-3 flex items-baseline space-x-3 mb-1">
          <i className="fa-brands fa-slack text-sm"></i>
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

  let renderExp = () => {
    if (data) {
      let keyName = Object.keys(data).splice(1);
      return keyName.map((item, index) => {
        switch (item) {
          case "technologyStack":
            return (
              <div key={index} className="grid grid-cols-4 gap-5">
                <div className="category col-span-1 text-right tracking-wider font-semibold">{onCapitalize(item)}:</div>
                <div className="value col-span-3">{renderStack(data[item])}</div>
              </div>
            );
          case "responsibility":
          case "knowledgeGained":
            return (
              <div key={index} className="grid grid-cols-4 gap-5 items-baseline">
                <div className="category col-span-1 text-right tracking-wider font-semibold">{onCapitalize(item)}:</div>
                <div className="value col-span-3">{renderCategContent(data[item])}</div>
              </div>
            );
          default:
            return (
              <div key={index} className="grid grid-cols-4 gap-5 items-baseline">
                <div className="category col-span-1 text-right tracking-wider font-semibold">{onCapitalize(item)}:</div>
                <div className="value col-span-3">{data[item]}</div>
              </div>
            );
        }
        // if (item === "technologyStack") {
        //   return (
        //     <div key={index} className="grid grid-cols-4 gap-5">
        //       <div className="category col-span-1 text-right tracking-wider font-semibold">{item}:</div>
        //       <div className="value col-span-3">{renderStack(data[item])}</div>
        //     </div>
        //   );
        // } else if (item === "responsibility" || item === "knowledgeGained") {
        //   return (
        //     <div key={index} className="grid grid-cols-4 gap-5 items-baseline">
        //       <div className="category col-span-1 text-right tracking-wider font-semibold">{item}:</div>
        //       <div className="value col-span-3">{renderCategContent(data[item])}</div>
        //     </div>
        //   );
        // } else {
        //   return (
        //     <div key={index} className="grid grid-cols-4 gap-5 items-baseline">
        //       <div className="category col-span-1 text-right tracking-wider font-semibold">{item}:</div>
        //       <div className="value col-span-3">{data[item]}</div>
        //     </div>
        //   );
        // }
      });
    }
  };
  return <div className="exp-item py-5 space-y-3 text-lg">{renderExp()}</div>;
}
