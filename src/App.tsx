import { BrowserRouter, Route, Routes } from "react-router";
import { Shell } from "./components/Shell";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { Albums } from "./pages/Albums";
import { NotFound } from "./pages/NotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<Home />} />
          <Route path="historia" element={<History />} />
          <Route path="albumes" element={<Albums />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
