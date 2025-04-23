import { useState, useEffect } from "react";
import { FaShoppingCart, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import AddFlower from "./components/AddFlower/AddFlower";
import Homepage from "./components/Homepage/Homepage";
import UpdateFlower from "./components/UpdateFlower/UpdateFlower";
import Footer from "./components/Footer";
import Contact from "./components/ConatctUs";
import Shop from "./components/Shop/Shop";
import Services from "./components/Services/Services";
import CartModal from "./components/CartModal";
import ConfirmOrder from "./components/ConfirmOrder";
import Login from "./components/Login/Login";
import { onAuthStateChanged, signOut } from "firebase/auth"; // ✅ FIXED HERE
import auth from "./components/firebase/firebase.init";
import PrivateRoute from "./components/firebase/PrivateRoute";
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleAddToCart = (flower) => {
    setCart((prevCart) => [...prevCart, flower]);
  };

  const toggleCartModal = () => {
    setShowCart((prev) => !prev); // Toggle the cart modal
  };

  const handleBuyNow = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== product._id));
    setShowCart(false);
    navigate("/confirm-order", { state: { product } });
  };

  const handleClose = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== product._id));
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/signin"); // redirect after sign out
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); // Toggle mobile menu
  };

  return (
    <>
      <nav className="my-5 px-6 py-4 rounded-b-2xl sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-600">🌸 Floral Vibe</h1>

          {/* Hamburger icon for mobile */}
          <div className="sm:hidden">
            <button onClick={toggleMobileMenu} className="text-pink-600">
              {isMobileMenuOpen ? (
                <FaTimes size={24} /> // Show close icon when menu is open
              ) : (
                <FaBars size={24} /> // Show hamburger icon when menu is closed
              )}
            </button>
          </div>

          {/* Navbar Links */}
          <ul
            className={`flex gap-6 items-center sm:flex-row sm:gap-6 ${
              isMobileMenuOpen ? "flex-col" : "hidden sm:flex"
            }`} // On mobile, show as column; on larger screens, show as row
          >
            <li>
              <Link
                to="/"
                className="text-pink-600 font-semibold hover:text-white hover:bg-pink-500 px-4 py-2 rounded-full transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-pink-600 font-semibold hover:text-white hover:bg-pink-500 px-4 py-2 rounded-full transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-pink-600 font-semibold hover:text-white hover:bg-pink-500 px-4 py-2 rounded-full transition duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-pink-600 font-semibold hover:text-white hover:bg-pink-500 px-4 py-2 rounded-full transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-pink-600 font-semibold hover:text-white hover:bg-pink-500 px-4 py-2 rounded-full transition duration-300"
              >
                Contact
              </Link>
            </li>

            <li>
  {user ? (
    <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-4">
      <span className="text-pink-600 font-semibold">
        👋 {user.displayName}
      </span>
      <button
        onClick={handleSignOut}
        className="text-pink-600 hover:text-white hover:bg-pink-500 px-4 py-2 rounded-full transition duration-300"
      >
        Sign Out
      </button>
    </div>
  ) : (
    <Link
      to="/signin"
      className="text-pink-600 font-semibold hover:text-white hover:bg-pink-500 px-4 py-2 rounded-full transition duration-300"
    >
      <FaUserPlus size={20} className="inline-block mr-2" />
      Sign In
    </Link>
  )}
</li>

            <li>
              <div className="cart-icon cursor-pointer" onClick={toggleCartModal}>
                <FaShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="cart-count bg-pink-500 text-white rounded-full px-2 text-sm ml-1">
                    {cart.length}
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {showCart && (
        <CartModal
          cart={cart}
          closeModal={toggleCartModal}
          handleBuyNow={handleBuyNow}
          handleClose={handleClose}
        />
      )}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/addFlower"
          element={
            <PrivateRoute user={user}>
              <AddFlower />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/shop"
          element={
            <PrivateRoute user={user} restrictedRoutes={["shop"]}>
              <Shop handleAddToCart={handleAddToCart} />
            </PrivateRoute>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />
        <Route path="/signin" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
