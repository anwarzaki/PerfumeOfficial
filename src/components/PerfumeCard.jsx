import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";

const PerfumeCard = () => {
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";

  const [perfumes, setPerfumes] = useState([
    {
      id: 1,
      imgSrc: "img/perfume01/perfumeCard-01.jpg",
      title: "Ethereal Elegance",
      price: "₹1,200",
    },
    {
      id: 2,
      imgSrc: "img/perfume01/perfumeCard-02.jpg",
      title: "Glass Frame with Beveled Edges",
      price: "₹1,800",
    },
    {
      id: 3,
      imgSrc: "img/perfume01/perfumeCard-03.jpg",
      title: "Black Matte Metal Frame",
      price: "₹1,500",
    },
    {
      id: 4,
      imgSrc: "img/perfume01/perfumeCard-04.jpg",
      title: "Acrylic Frame with Gold Highlights",
      price: "₹2,000",
    },
    {
      id: 5,
      imgSrc: "img/perfume01/perfumeCard-07.jpg",
      title: "Raw Wooden Frame",
      price: "₹1,500",
    },
    {
      id: 6,
      imgSrc: "img/perfume01/perfumeCard-05.jpg",
      title: "Polished Silver Metal Frame",
      price: "₹2,500",
    },
    {
      id: 7,
      imgSrc: "img/perfume01/perfumeCard-09.jpg",
      title: "Wrapped Canvas Frame",
      price: "₹3,500",
    },
    {
      id: 8,
      imgSrc: "img/perfume01/perfumeCard-10.jpg",
      title: "Antique Brass Frame",
      price: "₹2,800",
    },
  ]);

  const [newPerfume, setNewPerfume] = useState({
    imgSrc: "",
    title: "",
    price: "",
  });

  const handleAddPerfume = () => {
    setPerfumes([...perfumes, { ...newPerfume, id: perfumes.length + 1 }]);
    setNewPerfume({ imgSrc: "", title: "", price: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPerfume({ ...newPerfume, [name]: value });
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {perfumes.map((perfume) => (
          <a
            key={perfume.id}
            href="#"
            className="group relative block overflow-hidden"
          >
            <div className="relative border border-gray-100 bg-white p-6">
              <img
                src={perfume.imgSrc}
                alt="Perfume"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {perfume.title}
              </h3>
              <p className="mt-1.5 text-sm text-gray-700">{perfume.price}</p>
              <form className="mt-4">
                <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                  Purchase
                </button>
              </form>
            </div>
          </a>
        ))}
      </div>

      {isAdmin && (
        <div className="mt-8 p-6 border border-gray-200 bg-white">
          <h2 className="text-lg font-medium text-gray-900">Admin Panel</h2>
          <div className="mt-4">
            <input
              type="text"
              name="imgSrc"
              value={newPerfume.imgSrc}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="title"
              value={newPerfume.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="price"
              value={newPerfume.price}
              onChange={handleInputChange}
              placeholder="Price"
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleAddPerfume}
              className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            >
              Add Perfume
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfumeCard;
