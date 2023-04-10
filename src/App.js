import { useCallback, useState, useMemo } from "react";
import "./App.css";
import { ChildArea } from "./ChildArea";

function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState("");
  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // 関数メモ化
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // 変数メモ化
  const temp = useMemo(() => 1 + 3, []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

export default App;
