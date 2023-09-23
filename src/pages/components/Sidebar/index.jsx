import PropTypes from "prop-types";

import { Box, Chip, IconButton, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";

import { BiLibrary } from "react-icons/bi";
import { GoHome, GoSearch } from "react-icons/go";
import { HiArrowRight, HiPlus } from "react-icons/hi";

import "./style.css";

function PlaylistItem({ imageURL, title, artist, type }) {
	return (
		<ListItem disablePadding className="playlist-item">
			<ListItemButton sx={{ borderRadius: "4px" }}>
				<Stack direction="row" alignItems="center" spacing={1}>
					<Box component="img" src={imageURL} alt="Image" className="img" />

					<Stack>
						<Typography variant="body1" className="title">{title}</Typography>
						<Typography variant="body1" className="subtitle">{type} • {artist}</Typography>
					</Stack>
				</Stack>
			</ListItemButton>
		</ListItem>
	);
}

export default function Sidebar() {
	const itemBgColor = (theme) => theme.palette.background.default;

	return (
		<Box gridArea="left-sidebar" display="flex" flexDirection="column" gap={1} pl={1} overflowY="scroll">

			<Box
				component="nav"
				className="container nav text-gray"
				backgroundColor={itemBgColor}
				borderRadius={3}
			>
				<Box className="nav-item">
					<GoHome className="icon" />
					<Typography
						variant="body1"
						className="text"
						cursor="inherit"
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
				display="flex"
				flexDirection="column"
				flex={1}
				overflow="hidden"
			>
				<Box paddingX={1}>
					<Box
						component="header"
						display="flex"
						alignItems="center"
						justifyContent="space-between"
						mb={2}
					>
						<Stack direction="row" alignItems="center" spacing={1} className="text-gray">
							<BiLibrary className="icon" />
							<Typography className="text">Sua Biblioteca</Typography>
						</Stack>

						<Stack direction="row" spacing={1}>
							<IconButton size="small" >
								<HiPlus className="text-gray" />
							</IconButton>
							<IconButton size="small" >
								<HiArrowRight className="text-gray" />
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
				</Box>


				<Box sx={{ overflowY: "auto" }}>
					<Stack direction="row" justifyContent="space-between" my={2} className="playlist-filters">
						<IconButton size="small">
							<GoSearch />
						</IconButton>
						<Typography variant="body2" className="text-gray">Recentes </Typography>
					</Stack>

					<List overflowY="auto">
						<PlaylistItem artist="Vários intérpretes" imageURL="https://i.scdn.co/image/ab67616d00004851e2e352d89826aef6dbd5ff8f" type="Album" title="Spider-Man: Into the Spider-Verse"  />
						<PlaylistItem artist="Migos" imageURL="https://i.scdn.co/image/ab67616d000048519c188c494d8bfaf895411890" type="Album" title="Culture II"  />
						<PlaylistItem artist="Justin Bieber" imageURL="https://i.scdn.co/image/ab67616d000048517fe4a82a08c4f0decbeddbc6" type="Album" title="Changes"  />
						<PlaylistItem artist="DJ Khaled" imageURL="https://i.scdn.co/image/ab67616d00004851dcd4d70294f17175991ba1bb" type="Album" title="KHALED KHALED"  />
						<PlaylistItem artist="Young Thug" imageURL="https://i.scdn.co/image/ab67616d00004851f8d415dab5ed7e3747bd38dd" type="Album" title="Punk"  />
						<PlaylistItem artist="YoungBoy Never Broke Again" imageURL="https://i.scdn.co/image/ab67616d00004851ee7d7d77c33d8feccf4e1d61" type="Album" title="Don't Try This At Home"  />
					</List>
				</Box>
			</Box>
		</Box>
	);
}


PlaylistItem.propTypes = {
	imageURL: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	artist: PropTypes.string.isRequired,
};