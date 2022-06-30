import { useFormik } from "formik";
import { useEffect, useState } from "react";
import sunnah from "../../../helpers/axios";
import useAuthUser from "../../../hooks/useAuthUser";
import Error from "../../messages/Error";
import Success from "../../messages/Success";

const SettingsProfile = () => {
	const { currentUser, loading } = useAuthUser();
	const [message, setMessage] = useState();
	const [errorMessage, setErrorMessage] = useState();

	const validate = (values) => {
		const errors = {};

		if (!values.name) {
			errors.name = "Name must be filled";
		}

		if (!values.username) {
			errors.username = "Username is required";
		} else if (values.username.length < 3) {
			errors.username = "Must be 3 characters or more";
		}

		if (!values.email) {
			errors.email = "Email is Required";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = "Invalid email address";
		}

		return errors;
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			username: "",
			email: "",
			country: "Bangladesh",
			city: "",
			state: "",
			zip: "",
			street: "",
		},
		validate,
		onSubmit: (values) => {
			sunnah
				.post(`profile/update/${currentUser.id}`, values)
				.then(({ data }) => {
					data.status === 200 &&
						setMessage(
							"Alhamdulillah! Your profile updated successfully"
						);
				})
				.catch((err) => {
					err.response.status === 422 &&
						setErrorMessage(err.response.data.message);
				});
		},
	});

	useEffect(() => {
		if (!loading) {
			formik.setValues(currentUser);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading, currentUser]);

	return (
		<div>
			<h1 className="mb-5 text-2xl font-bold text-center text-gray-700">
				Profile
			</h1>
			<div className="mt-10 sm:mt-0">
				<div className="md:grid md:grid-cols-1 md:gap-6">
					<div className="mt-5 md:mt-0 md:col-span-2">
						<div className="overflow-hidden sm:rounded-md">
							{message && <Success message={message} />}
							{errorMessage && <Error message={errorMessage} />}
							<form onSubmit={formik.handleSubmit}>
								<div className="px-4 py-5 sm:p-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="name"
												className="block text-sm font-medium text-gray-700"
											>
												Full Name
											</label>
											<input
												type="text"
												id="name"
												name="name"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.name}
												className="block w-full px-3 py-2 mt-1 border border-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:outline-none sm:text-sm focus:ring-2 focus:ring-offset-2"
											/>
											{formik.errors.name && (
												<Error
													message={formik.errors.name}
												/>
											)}
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="username"
												className="block text-sm font-medium text-gray-700"
											>
												Username
											</label>
											<input
												type="text"
												id="username"
												name="username"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.username}
												className="block w-full px-3 py-2 mt-1 border border-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:outline-none sm:text-sm focus:ring-2 focus:ring-offset-2"
											/>
											{formik.errors.username && (
												<Error
													message={
														formik.errors.username
													}
												/>
											)}
										</div>

										<div className="col-span-6 sm:col-span-4">
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-700"
											>
												Email address
											</label>
											<input
												type="email"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.email}
												id="email"
												name="email"
												className="block w-full px-3 py-2 mt-1 border border-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:outline-none sm:text-sm focus:ring-2 focus:ring-offset-2"
											/>
											{formik.errors.email && (
												<Error
													message={
														formik.errors.email
													}
												/>
											)}
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="country"
												className="block text-sm font-medium text-gray-700"
											>
												Country
											</label>
											<select
												defaultValue={
													formik.values.country
												}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												id="country"
												name="country"
												className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-2 focus:ring-offset-2 sm:text-sm"
											>
												<option value="Bangladesh">
													Bangladesh
												</option>
											</select>
										</div>

										<div className="col-span-6">
											<label
												htmlFor="street"
												className="block text-sm font-medium text-gray-700"
											>
												Street address
											</label>
											<input
												type="text"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.street}
												id="street"
												name="street"
												autoComplete="street-address"
												className="block w-full px-3 py-2 mt-1 border border-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:outline-none sm:text-sm focus:ring-2 focus:ring-offset-2"
											/>
										</div>

										<div className="col-span-6 sm:col-span-6 lg:col-span-2">
											<label
												htmlFor="city"
												className="block text-sm font-medium text-gray-700"
											>
												City
											</label>
											<input
												type="text"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.city}
												id="city"
												name="city"
												autoComplete="address-level2"
												className="block w-full px-3 py-2 mt-1 border border-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:outline-none sm:text-sm focus:ring-2 focus:ring-offset-2"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label
												htmlFor="region"
												className="block text-sm font-medium text-gray-700"
											>
												State / Province
											</label>
											<input
												type="text"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.state}
												id="region"
												name="state"
												autoComplete="address-level1"
												className="block w-full px-3 py-2 mt-1 border border-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:outline-none sm:text-sm focus:ring-2 focus:ring-offset-2"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label
												htmlFor="postal-code"
												className="block text-sm font-medium text-gray-700"
											>
												ZIP / Postal code
											</label>
											<input
												type="text"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.zip}
												id="postal-code"
												name="zip"
												className="block w-full px-3 py-2 mt-1 border border-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:outline-none sm:text-sm focus:ring-2 focus:ring-offset-2"
											/>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 text-right sm:px-6">
									<button
										type="submit"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsProfile;
