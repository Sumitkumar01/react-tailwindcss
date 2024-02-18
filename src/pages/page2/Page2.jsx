import React from "react";
import NavBar from "../../components/NavBar";
import img from "../../images/high-end-clean-atmospheric-hotel-rooms-1.avif";

function Page2() {
  return (
    <>
      <NavBar />
      <section className="c_conteiner">
        <div className=" ">
          <h1 className="text-3xl font-bold capitalize text-white center py-3 text-center">
            cards
          </h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 p-2">
            {card.map((item, i) => (
              <div
                className="bg-indigo-400 shadow-lg rounded-xl overflow-hidden"
                key={i}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.url}
                    className="w-[100%] hover:scale-125 h-[200px] duration-1000"
                    alt="card_img"
                  />
                </div >
                <h2 className="text-2xl font-semibold uppercase text-center py-2">
                  {item.desc}
                </h2>
              </div>
            ))}
            <input type="date" name="" placeholder="seect" id="" />
          </div>
        </div>
      </section>
    </>
  );
}

const card = [
  { desc: "lorem eption", url: img },
  { desc: "lorem eption", url: img },
  { desc: "lorem eption", url: img },
  { desc: "lorem eption", url: img },
  { desc: "lorem eption", url: img },
  { desc: "lorem eption", url: img },
  { desc: "lorem eption", url: img },
  { desc: "lorem eption", url: img },
];

export default Page2;
