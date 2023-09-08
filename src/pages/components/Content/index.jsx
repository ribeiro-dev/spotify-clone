import { Box, IconButton, Stack, Typography } from "@mui/material";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiDownArrowCircle } from "react-icons/bi";

import "./style.css";

export default function Content() {

	return (
		<Stack
			component="main"
			gridArea="main-view"
			padding="16px 16px"
			backgroundColor="gray"
			borderRadius={1}
		>

			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<Stack className="navigation-buttons" direction="row" spacing={1}>
					<Box className="wrapper">
						<AiOutlineLeft fontSize="1.3rem" />
					</Box>
					<Box className="wrapper">
						<AiOutlineRight fontSize="1.3rem" />
					</Box>
				</Stack>

				<Stack
					direction="row"
					alignItems="center"
					spacing={1}
					sx={{
						backgroundColor: "rgba(0,0,0,0.56)",
						padding: "6px 10px",
						borderRadius: "20px",
						"&:hover": {
							transform: "scale(1.05)"
						}
					}}
				>
					<BiDownArrowCircle fontSize={20} />
					<Typography fontSize={13} fontWeight="bold">Instalar Aplicativo</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
}