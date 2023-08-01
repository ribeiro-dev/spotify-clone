import { useState } from "react";

import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";


export default function Index() {
	const [sidebarWidth, setSidebarWidth] = useState(300);
	const gridConfig = {
		height: "100%",
		minHeight: "100%",
		position: "relative",
		rowGap: "8px",
		gridTemplateAreas:
			`"left-sidebar main-view right-sidebar"
		"now-playing-bar now-playing-bar now-playing-bar"`,
		gridTemplateColumns: `${sidebarWidth}px 1fr 0`,
		gridTemplateRows: "1fr auto"
	};


	return (
		<Box component="main" sx={{ padding: "8px" }}>

			<Box display="grid" sx={gridConfig}>
				<Sidebar />
			</Box>

		</Box>
	);
}