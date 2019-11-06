import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 81db6a7889ad8749cfef41071f67ccf814c02e963f57f01b2d468fe8df20619c'
	}
});