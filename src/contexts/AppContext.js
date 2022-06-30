import React, { useContext, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
const AppContext = React.createContext();

export function useAppContext() {
	return useContext(AppContext);
}

export function AppProvider({ children }) {
	const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState({
		open: false,
		bottom: 0,
	});
	const [isRightSidebarOpen, setIsRightSidebarOpen] = useState({
		open: false,
		bottom: 0,
	});

	const [imageModal, setImageModal] = useState({
		images: [],
		startsAt: 0,
	});

	const isMobile = useMediaQuery("(max-width: 768px)");
	const value = {
		isLeftSidebarOpen,
		setIsLeftSidebarOpen,
		isRightSidebarOpen,
		setIsRightSidebarOpen,
		isMobile,
		imageModal,
		setImageModal,
	};
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContext;
