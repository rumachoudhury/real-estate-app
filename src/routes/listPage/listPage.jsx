import React from "react";
import listData from "../../lib/dummydata";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import Map from "../../components/map/Map.jsx";

function ListPage() {
  const data = listData;
  return (
    <div className="p-6 mt-20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE – List + Filter */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <Filter />
          <div>
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* RIGHT SIDE – Map */}
        <div className="w-full lg:w-1/2 h-[700px] rounded-xl overflow-hidden mt-8 lg:mt-12 lg:sticky lg:top-48">
          <Map items={data} />
        </div>
      </div>
    </div>
  );
}

export default ListPage;
