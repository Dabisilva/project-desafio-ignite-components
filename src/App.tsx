import { useState } from "react";

import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";

import "./styles/global.scss";
import "./styles/sidebar.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar onSelectedGenreId={(id) => setSelectedGenreId(id)} />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
