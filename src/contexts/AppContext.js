import React, { useContext, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
const AppContext = React.createContext();

export function useAppContext() {
	return useContext(AppContext);
}

export function AppProvider({ children }) {
	const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
	const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

	const isMatch = useMediaQuery("(max-width: 768px)");
	const value = {
		isLeftSidebarOpen,
		setIsLeftSidebarOpen,
		isRightSidebarOpen,
		setIsRightSidebarOpen,
		isMobile: isMatch,
	};
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContext;
