import React from "react";

const CollageCard = () => {
  return (
    <>
    <h2 className="py-15 text-5xl text-center font-bold text-green-500">Collage Cards</h2>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 w-[80%] mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-auto rounded">
            <img src="https://i.ibb.co/Hp3q8nD/clg-3.jpg"  />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Harvard University</h2>
          <p>Admission Date:Until 31 july,2023 </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className="avatar">
          <div className="w-auto rounded">
            <img src="https://i.ibb.co/DK8yNGR/clg-4.jpg"  />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">University Of Oxford</h2>
          <p>Admission Date:Until 5 September,2023 </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className="avatar">
          <div className="w-auto rounded">
            <img src="https://i.ibb.co/pvmLFR9/clg-5.jpg"  />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Stanford University</h2>
          <p>Admission Date:Until 20 August,2023 </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CollageCard;
