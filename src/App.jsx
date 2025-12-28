import './App.css'
import { useState } from "react";
import StoryBar from "./components/StoryBar";
import stories from "./data/stories";
import StoryViewer from "./components/StoryViewer";


function App() {

  const [selectedStory, setSelectedStory] = useState(null);
  

  return (
    <>
      <div className="container-fluid p-0" style={{ maxWidth: "420px" }}>
      <StoryBar stories={stories} onSelect={setSelectedStory} />
    </div>

    {selectedStory !== null && (
        <StoryViewer
          stories={stories}
          startIndex={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </>
  )
}

export default App
