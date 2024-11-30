// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/product" element={<Product />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

const ClerkProviderWrapper = ({ children }) => (
  <>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
    <SignedIn>{children}</SignedIn>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ClerkProviderWrapper>
              <Home />
            </ClerkProviderWrapper>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
