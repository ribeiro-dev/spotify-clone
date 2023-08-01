import { Box, Typography } from "@mui/material";
import { GoHome, GoSearch } from "react-icons/go";

import "./style.css";

export default function Sidebar() {
	const itemBgColor = (theme) => theme.palette.background.default;

	return (
		<Box gridArea='left-sidebar'>

			<Box
				component="nav"
				className="nav"
				backgroundColor={itemBgColor}
				borderRadius={3}
			>
				<Box className="nav-item">
					<GoHome className="icon" fontSize="1.7rem" />
					<Typography
						variant="body1"
						className="text"
					>
						Início
					</Typography>
				</Box>

				<Box className="nav-item">
					<GoSearch className="icon" />
					<Typography
						variant="body1"
						className="text"
					>
						Buscar
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}