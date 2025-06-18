import { json } from '@sveltejs/kit';

const GET = () => {
	const number = Math.floor(Math.random() * 6) + 1;

	return json(number);
}

export { GET };