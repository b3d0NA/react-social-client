import { useEffect, useState } from "react";
import sunnah from "../helpers/axios";
const useSunnah = (method, url, formData = null) => {
	const [response, setResponse] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	async function hitEndpoint(method, url, formData) {
		await sunnah({
			method: method,
			url: url,
			data: formData,
		})
			.then(function (response) {
				setResponse(response);
				setError(false);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(true);
				setResponse(error);
				setIsLoading(false);
			});
	}

	useEffect(() => {
		hitEndpoint(method, url, formData);
	}, [method, url, formData]);
	return { response, error, isLoading };
};
export default useSunnah;
