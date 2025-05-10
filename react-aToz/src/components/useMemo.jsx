import { useMemo, useState } from "react";

function UseMemoExample() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [theme, setTheme] = useState(false);

  const total = useMemo(() => {
    console.log("calculating...");
    let res = 0;
    console.log("before Calculation total:", res);
    for (let i = 0; i < numbers.length; i++) {
      res += Number(numbers[i]);
    }
    console.log("after Calculation total:", res);
    return res;
  }, [numbers]);

  const pushRandomNumber = () => {
    let n = Math.floor(Math.random() * 9);
    console.log("random number", n);
    setNumbers([...numbers, n]);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme ? `bg-white` : `bg-black`
      }`}
    >
      <h1
        className={`${theme ? `text-black` : `text-white`} text-2xl mb-[12px]`}
      >
        Sum : {total}
      </h1>
      <button
        className={`${
          theme ? `text-black` : `text-white`
        } text-2xl mb-[12px] border-2 p-2`}
        onClick={() => setTheme(!theme)}
      >
        Change Theme
      </button>
      <button
        className={`${
          theme ? `text-black` : `text-white`
        } text-2xl mb-[12px] border-2 p-2`}
        onClick={pushRandomNumber}
      >
        Push one random Number
      </button>
    </div>
  );
}

export default UseMemoExample;
