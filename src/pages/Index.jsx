import { useState } from "react";

import { Box, Button } from "@mui/material";



export default function Index() {
	const [sidebarWidth, setSidebarWidth] = useState("300px");
	const gridConfig = {
		height: "100%",
		minHeight: "100%",
		position: "relative",
		rowGap: "8px",
		gridTemplateAreas:
		`"left-sidebar main-view right-sidebar"
		"now-playing-bar now-playing-bar now-playing-bar"`,
		gridTemplateColumns: `${sidebarWidth} 1fr 0`,
		gridTemplateRows: "1fr auto"
	};

	return (
		<Box component="main" sx={{ padding: "8px" }}>

			<Box display="grid" sx={gridConfig}>
				<Box gridArea='left-sidebar'>

					<Box>
						<Box>
							ICON
							SECTION NAME
						</Box>
						<Box>
							ICON
							SECTION NAME
						</Box>
					</Box>
				</Box>
			</Box>

		</Box>
	);
}