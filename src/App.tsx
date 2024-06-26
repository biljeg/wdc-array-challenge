import { useState } from "react";
import "./App.css";

function App() {
  const [stringArray, setStringArray] = useState<string[]>(["A", "B", "C"]);
  const addBox = (idx: number): void => {
    setStringArray(prevArr => {
      const newArr = [...prevArr];
      newArr.splice(idx + 1, 0, "");
      return newArr;
    });
  };

  const removeBox = (idx: number): void => {
    setStringArray(prevArr => {
      const newArr = [...prevArr];
      newArr.splice(idx, 1);
      return newArr;
    });
  };

  const changeText = (newText: string, idx: number): void => {
    setStringArray(prevArr => {
      const newArr = [...prevArr];
      newArr[idx] = newText;
      return newArr;
    });
  };

  const finalString = stringArray.join("");

  return (
    <>
      <h1>{finalString}</h1>
      <main className="box-container">
        {stringArray.map((str, idx) => (
          <>
            <div className="box">
              <input
                type="text"
                value={str}
                onChange={e => changeText(e.target.value, idx)}
              />
              <span className="x-close" onClick={() => removeBox(idx)}>
                x
              </span>
              {idx !== stringArray.length - 1 && (
                <div className="gap" onClick={() => addBox(idx)} />
              )}
            </div>
          </>
        ))}
        {stringArray.length === 0 && (
          <button onClick={() => addBox(-1)}>Add box</button>
        )}
      </main>
    </>
  );
}

export default App;
