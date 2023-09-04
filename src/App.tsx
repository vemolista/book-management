import Books from "./components/Books";
import { books } from "./data.ts";

function App() {
	return (
		<div className="p-16 bg-slate-200 h-screen m-8 rounded-2xl">
			<h1 className="text-3xl">Books</h1>
			<ul>
				<li>Add book</li>
			</ul>
			<Books books={books} />
		</div>
	);
}

export default App;
