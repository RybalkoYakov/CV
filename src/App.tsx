import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {CarShow, Loading} from "./components";

function App() {

  return (
    <Suspense fallback={<Loading/>}>
      <div className="App">
        <Canvas shadows={true}>
          <CarShow/>
        </Canvas>
      </div>
    </Suspense>
  );
}

export default App;
