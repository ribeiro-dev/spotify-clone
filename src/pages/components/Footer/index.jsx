import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import "./style.css";

export default function Footer() {

	const [heartWasClicked, setHeartWasClicked] = useState(false);

	return (
		<Stack
			component="footer"
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			padding="0 16px"
			gridArea="now-playing-bar"
		>

			<Stack className="current-song" direction="row" alignItems="center">
				<Box component="img" borderRadius={1} mr={2} src="https://placehold.co/54x54" alt="Image Placeholder" className="img" />
				<Stack direction="column" mr={3}>
					<Typography className="song-name">Nome da Música</Typography>
					<Typography className="artist-name">Artista</Typography>
				</Stack>
				<Box
					sx={{
						cursor: "pointer",
						fontSize: "1.2rem"
					}}
					onClick={() => setHeartWasClicked(!heartWasClicked)}
					title="Salvar na sua biblioteca"
				>
					{ heartWasClicked ? <AiFillHeart color="limegreen" /> : <AiOutlineHeart /> }
				</Box>
			</Stack>

			<Stack>Player</Stack>
			<Stack>Buttons</Stack>
		</Stack>
	);
}