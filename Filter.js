import React from "react";

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title){
    setCategory(title);

  }
  return (
    <div className="w-11/12 flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-centre">
      {filterData.map((data) => (
        <button 
        className={`text-lg px-2 py-1 ronded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${category === data.title} ? "bg-opacity-60 boarder-white" : "bg-opacity-40 boarder-transparent" `}
        key={data.id}
        onClick={() => filterHandler(data.title)}
        >{data.title}</button>
      ))
      }
    </div>
  );
};

export default Filter;
