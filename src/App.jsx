import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
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
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
      </Routes>
    </Router>
  );
}

export default App;
