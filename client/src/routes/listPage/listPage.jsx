import React from "react";

import Filter from "../../components/Filter";
import Card from "../../components/Card";
import Map from "../../components/map/Map.jsx";
import { useLoaderData } from "react-router-dom";
import { Await } from "react-router-dom";
import { Suspense } from "react";

function ListPage() {
  const data = useLoaderData();
  return (
    <div className="p-6 mt-20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE – List + Filter */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                  // <Card key={post.id} post={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
        {/* RIGHT SIDE – Map */}
        <div className="w-full lg:w-1/2 h-[700px] rounded-xl overflow-hidden mt-8 lg:mt-12 lg:sticky lg:top-48">
          {/* <Map items={posts} /> */}
        </div>
      </div>
    </div>
  );
}

export default ListPage;
