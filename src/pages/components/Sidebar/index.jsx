import { Box, Chip, IconButton, Stack, Typography } from "@mui/material";

import { BiLibrary } from "react-icons/bi";
import { GoHome, GoSearch } from "react-icons/go";
import { HiArrowRight, HiPlus } from "react-icons/hi";

import "./style.css";

export default function Sidebar() {
	const itemBgColor = (theme) => theme.palette.background.default;

	return (
		<Box gridArea="left-sidebar" display="flex" flexDirection="column" gap={1}>

			<Box
				component="nav"
				className="container nav"
				backgroundColor={itemBgColor}
				borderRadius={3}
			>
				<Box className="nav-item">
					<GoHome className="icon" />
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

			<Box
				backgroundColor={itemBgColor}
				borderRadius={3}
			>
				<Box
					component="header"
					className="container"
					display="flex"
					alignItems="center"
					justifyContent="space-between"
				>
					<Stack direction="row" alignItems="center" spacing={1}>
						<BiLibrary className="icon" />
						<Typography className="text">Sua Biblioteca</Typography>
					</Stack>

					<Stack direction="row" spacing={1}>
						<IconButton size="small" >
							<HiPlus />
						</IconButton>
						<IconButton size="small" >
							<HiArrowRight />
						</IconButton>
					</Stack>
				</Box>

				<Box>
					<Stack direction="row" position="relative">
						<Stack direction="row" spacing={1} sx={{ overflowX: "hidden" }}>
							<Chip label="Playlists" />
							<Chip label="Artistas" />
							<Chip label="Álbuns" />
							<Chip label="Álbuns" />
							<Chip label="Álbuns" />
						</Stack>

						<Chip label={<HiArrowRight />} sx={{  }} />
					</Stack>
				</Box>

			</Box>
		</Box>
	);
}