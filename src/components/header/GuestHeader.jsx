import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/sunnah_logo.svg";
import { useAppContext } from "../../contexts/AppContext";
const GuestHeader = () => {
	const { isMobile } = useAppContext();
	const [makeStickyHeader, setMakeStickyHeader] = useState(false);
	const stickyHeader = useRef();

	useEffect(() => {
		window.onscroll = () => {
			if (125 <= window.scrollY) {
				setMakeStickyHeader(true);
			} else {
				setMakeStickyHeader(false);
			}
		};
	}, [isMobile, makeStickyHeader]);
	return (
		<div
			className={`bg-white flex flex-col md:h-20 items-center justify-between md:flex-row md:space-y-0" px-8 space-y-4 md:sticky top-0 z-40`}
		>
			<div className="logo_section pt-1.5 row-span-2">
				<Link to={`/`}>
					<Logo className="w-20 h-12"></Logo>
				</Link>
			</div>
			<div
				ref={stickyHeader}
				className={`-top-5 ${
					isMobile &&
					makeStickyHeader &&
					"fixed justify-center p-3 w-full z-10 border-b border-green-300 shadow-xl"
				} bg-white col-span-4  flex  md:flex-row  profile_related_section space-x-10 items-center`}
			></div>
			<div className="flex space-x-3 buttons">
				<Link
					to="/login"
					className="flex items-center px-6 py-2 space-x-3 text-teal-500 ease-in-out border hover:text-white rounded-xl hover:bg-gradient-to-r hover:from-sky-500 hover:to-teal-500 border-sky-500"
				>
					<span>Login</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</Link>
				<Link
					to="/register"
					className="flex items-center px-6 py-2 space-x-3 ease-in-out border border-teal-500 text-sky-500 hover:text-white rounded-xl hover:bg-gradient-to-r hover:from-teal-500 hover:to-sky-500"
				>
					<FontAwesomeIcon icon={faRightToBracket} />
					<span>Register</span>
				</Link>
			</div>
		</div>
	);
};

export default GuestHeader;
