export interface Book {
	isbn: string;
	title: string;
	authors: string;
	published: string;
	description: string;
	coverImage?: string;
}

interface BooksProps {
	books: Book[];
}

export default function Books(props: BooksProps) {
	const { books } = props;

	return (
		<div>
			<table>
				<caption></caption>
				<thead>
					<tr>
						<th>ISBN</th>
						<th>Title</th>
						<th>Authors</th>
						<th>Published</th>
					</tr>
				</thead>
				<tbody>
					{books.map((book) => (
						<tr key={book.isbn}>
							<td>{book.isbn}</td>
							<td>{book.title}</td>
							<td>{book.authors}</td>
							<td>{new Date(book.published).toISOString()}</td>
						</tr>
					))}
				</tbody>
				<tfoot></tfoot>
			</table>
			{books.map((book) => (
				<li key={book.isbn}>{book.title}</li>
			))}
		</div>
	);
}
