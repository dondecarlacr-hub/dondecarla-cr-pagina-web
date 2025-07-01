import React, { useState, useRef } from "react";
import Data from "../json/menu.json";
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon } from "lucide-react";

interface MenuProps {
  useElementOnScreen: (
    options: IntersectionObserverInit
  ) => [React.RefObject<any>, boolean];
}

const Menu: React.FC<MenuProps> = ({ useElementOnScreen }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const categoriesContainerRef = useRef(null);

  const [titleRef, titleVisible] = useElementOnScreen({ threshold: 0.3 });
  const [inputRef, inputVisible] = useElementOnScreen({ threshold: 0.3 });
  const [categoriesRef, categoriesVisible] = useElementOnScreen({
    threshold: 0.3,
  });
  const [itemsRef, itemsVisible] = useElementOnScreen({ threshold: 0 });

  const scrollCategories = (direction) => {
    if (categoriesContainerRef.current) {
      const scrollAmount = 200;
      categoriesContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="w-full bg-[#F5F1EB] py-12">
      <div className="container mx-auto px-4">
        <header>
          <h1
            ref={titleRef}
            className={`text-3xl font-merriweather md:text-4xl font-bold text-center text-[#2D1B14] mb-8 ${
              titleVisible
                ? "animate__animated animate__fadeInDown"
                : "opacity-0"
            }`}
          >
            Nuestro Menú
          </h1>
        </header>

        <div
          ref={inputRef}
          className={`relative mx-auto w-full max-w-lg mb-4 ${
            inputVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
          }`}
        >
          <input
            type="text"
            placeholder="Buscar platillos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="font-opensans w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-gray-700 placeholder-gray-400"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <section
          ref={categoriesRef}
          className={`bg-white-1 p-4 rounded-lg shadow-md mb-8 ${
            categoriesVisible
              ? "animate__animated animate__fadeIn"
              : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            <div className="relative flex items-center">
              <button
                onClick={() => scrollCategories("left")}
                className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md text-gray-600 hover:bg-gray-100 focus:outline-none -ml-4"
              >
                <ChevronLeftIcon size={20} />
              </button>
              <nav
                ref={categoriesContainerRef}
                className="flex flex-row overflow-x-auto pb-2 px-8 custom-scrollbar"
                style={{ scrollbarWidth: "none", MsOverflowStyle: "none" }}
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex-shrink-0 flex flex-col items-center p-2 mx-2 transition-transform transform hover:scale-105 ${
                      activeCategory === category.id
                        ? "border-b-2 border-[#8B6F47]"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center p-1.5 ${
                        activeCategory === category.id ? "bg-[#8B6F47]" : ""
                      }`}
                    >
                      <img
                        src={category.image}
                        alt={category.alt}
                        loading="lazy"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <span
                      className={`font-opensans mt-2 text-sm font-medium ${
                        activeCategory === category.id
                          ? "text-[#8B6F47]"
                          : "text-gray-700"
                      }`}
                    >
                      {category.name}
                    </span>
                  </button>
                ))}
              </nav>
              <button
                onClick={() => scrollCategories("right")}
                className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md text-gray-600 hover:bg-gray-100 focus:outline-none -mr-4"
              >
                <ChevronRightIcon size={20} />
              </button>
            </div>
          </div>
        </section>

        <section
          ref={itemsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
            itemsVisible ? "animate__animated animate__fadeIn" : "opacity-0"
          }`}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-lato text-xl font-semibold text-[#2D1B14]">
                      {item.name}
                    </h3>
                    <span className="font-opensans text-[#8B6F47] font-bold">
                      ₡{item.price}
                    </span>
                  </div>
                  <p className="font-opensans text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-opensans inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {getCategoryName(item.category)}
                    </span>
                    {item.isSpecial && (
                      <span className="font-opensans inline-block bg-golden-1 text-white text-xs px-2 py-1 rounded">
                        Especial
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-12 col-span-full">
              <p className="text-lg text-gray-600">
                No se encontraron platillos que coincidan con tu búsqueda.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="mt-4 text-[#8B6F47] hover:text-[#9d8259] font-medium"
              >
                Mostrar todos los platillos
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

const getCategoryName = (categoryId: string) => {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.name : "";
};

const categories = Data.categories;
const menuItems = Data.menuItems;

export default Menu;
