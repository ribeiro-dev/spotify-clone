import { useState } from "react";

import { Box } from "@mui/material";
import { GoHome, GoSearch } from "react-icons/go";



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

	const itemBgColor = (theme) => theme.palette.background.default;

	return (
		<Box component="main" sx={{ padding: "8px" }}>

			<Box display="grid" sx={gridConfig}>
				<Box gridArea='left-sidebar'>

					<Box 
						component="nav"
						display="flex"
						flexDirection="column"
						fontSize="1.7rem"
					>
						<Box padding="20px" sx={{ backgroundColor: itemBgColor}} >
							<GoHome />
							Início
						</Box>
						<Box padding="20px">
							<GoSearch />
							Buscar
						</Box>
					</Box>
				</Box>
			</Box>

		</Box>
	);
}