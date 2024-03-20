import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="h-screen w-full grid place-items-center">
			<header className="flex flex-col items-center justify-center min-h-screen text-center">
				<p className="text-4xl">Motswana Mind</p>
				<p className="mt-2">
					<button
						type="button"
						className="text-blue-500"
						onClick={() => setCount((count) => count + 1)}
					>
						count is: {count}
					</button>
				</p>
			</header>
		</div>
	);
}

export default App;
