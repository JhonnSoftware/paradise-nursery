
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const products = [
  // Air Purifying
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b30?w=600",
    description: "A beautiful and easy-care indoor plant.",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=600",
    description: "An elegant plant with beautiful white flowers.",
  },
  {
    id: 3,
    name: "Areca Palm",
    price: 35,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1597055181300-9a7a7e2c8b1e?w=600",
    description: "A tropical plant that adds a fresh atmosphere.",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 20,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600",
    description: "A popular plant with long green leaves.",
  },
  {
    id: 5,
    name: "Boston Fern",
    price: 28,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1597055181449-3d7e7b2a7b4a?w=600",
    description: "A lush fern with delicate green foliage.",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 40,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600",
    description: "A striking plant with glossy leaves.",
  },

  // Low Maintenance
  {
    id: 7,
    name: "Monstera",
    price: 45,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600",
    description: "A tropical favorite with distinctive leaves.",
  },
  {
    id: 8,
    name: "ZZ Plant",
    price: 32,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1632207691143-643e2c7a9f6a?w=600",
    description: "A resilient plant that needs little attention.",
  },
  {
    id: 9,
    name: "Pothos",
    price: 22,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1611211232932-da3113c5b122?w=600",
    description: "A trailing plant perfect for shelves.",
  },
  {
    id: 10,
    name: "Dracaena",
    price: 38,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600",
    description: "A decorative plant with tall elegant leaves.",
  },
  {
    id: 11,
    name: "Chinese Evergreen",
    price: 34,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1597055181300-9a7a7e2c8b1e?w=600",
    description: "A colorful plant for indoor spaces.",
  },
  {
    id: 12,
    name: "Philodendron",
    price: 29,
    category: "Low Maintenance",
    image: "https://images.unsplash.com/photo-1612363148953-5b2a5e5c2c6d?w=600",
    description: "A versatile plant with heart-shaped leaves.",
  },

  // Succulents
  {
    id: 13,
    name: "Aloe Vera",
    price: 18,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600",
    description: "A popular succulent with thick green leaves.",
  },
  {
    id: 14,
    name: "Echeveria",
    price: 15,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600",
    description: "A compact succulent with rosette-shaped leaves.",
  },
  {
    id: 15,
    name: "Jade Plant",
    price: 20,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600",
    description: "A charming succulent with rounded leaves.",
  },
  {
    id: 16,
    name: "Haworthia",
    price: 17,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600",
    description: "A small succulent ideal for desks.",
  },
  {
    id: 17,
    name: "Burro's Tail",
    price: 24,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600",
    description: "A trailing succulent with fleshy leaves.",
  },
  {
    id: 18,
    name: "Cactus",
    price: 12,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600",
    description: "A small cactus that adds character to any room.",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <main className="products-page">
      <div className="page-heading">
        <h1>Our Indoor Plants</h1>
        <p>Bring nature into your home with Paradise Nursery.</p>
      </div>

      {categories.map((category) => (
        <section className="product-category" key={category}>
          <h2>{category}</h2>

          <div className="products-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => {
                const isAdded = cartItems.some(
                  (item) => item.id === product.id
                );

                return (
                  <article className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />

                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <strong>S/ {product.price.toFixed(2)}</strong>

                      <button
                        className="add-button"
                        disabled={isAdded}
                        onClick={() => dispatch(addToCart(product))}
                      >
                        {isAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
