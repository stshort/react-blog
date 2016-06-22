import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const DELETE_SINGLE_POST = 'DELETE_SINGLE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=iobfuhiho2345ioi7ug89aujh3io457gykzl';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload: request
	};
}

export function fetchSinglePost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_SINGLE_POST,
		payload: request
	};
}

export function deleteSinglePost(id) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: DELETE_SINGLE_POST,
		payload: request
	};
}