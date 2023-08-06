import { Box, Chip, IconButton, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";

import { BiLibrary } from "react-icons/bi";
import { GoHome, GoSearch } from "react-icons/go";
import { HiArrowRight, HiPlus } from "react-icons/hi";

import "./style.css";

function PlaylistItem() {
	return (
		<ListItem disablePadding className="playlist-item">
			<ListItemButton sx={{ borderRadius: "4px" }}>
				<Stack direction="row" alignItems="center" spacing={1}>
					<img src="https://placehold.co/48x48" alt="Image Placeholder" className="img" />

					<Stack>
						<Typography variant="body1" className="title">Nome</Typography>
						<Typography variant="body1" className="subtitle">Playlist • Podcast</Typography>
					</Stack>
				</Stack>
			</ListItemButton>
		</ListItem>
	);
}

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
				className="container"
			>
				<Box
					component="header"
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					mb={2}
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

						<Chip label={<HiArrowRight />} />
					</Stack>
				</Box>

				<Box sx={{ overflowY: "auto" }}>
					<Stack direction="row" justifyContent="space-between" my={2} className="playlist-filters">
						<IconButton size="small">
							<GoSearch />
						</IconButton>
						<Typography variant="body2">Recentes </Typography>
					</Stack>

					<List>
						<PlaylistItem />
						<PlaylistItem />
						<PlaylistItem />
					</List>
				</Box>
			</Box>
		</Box>
	);
}