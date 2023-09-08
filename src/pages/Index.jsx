import { useState } from "react";

import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


export default function Index() {
	const [sidebarWidth, setSidebarWidth] = useState(300);
	const gridConfig = {
		flexGrow: 1,
		position: "relative",
		rowGap: "8px",
		gridTemplateAreas:
			`"left-sidebar main-view right-sidebar"
		"now-playing-bar now-playing-bar now-playing-bar"`,
		gridTemplateColumns: `${sidebarWidth}px 1fr 0`,
		gridTemplateRows: "1fr 80px"
	};


	return (
		<Box display="grid" sx={gridConfig}>
			<Sidebar />

			<Footer />
		</Box>
	);
}