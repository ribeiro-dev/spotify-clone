import { useState } from "react";

import { Box, IconButton, Slider, Stack, Typography } from "@mui/material";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaCirclePlay } from "react-icons/fa6";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BiShuffle, BiRepeat } from "react-icons/bi";


import "./style.css";

export default function Footer() {

	const [heartWasClicked, setHeartWasClicked] = useState(false);

	return (
		<Stack
			component="footer"
			direction="row"
			alignItems="center"
			justifyContent="center"
			padding="0 16px"
			gridArea="now-playing-bar"
		>

			<Stack flex={1} className="current-song" direction="row" alignItems="center">
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

			<Stack flex={1} className="song-controls" alignItems="center" flexBasis="40%">
				<Stack direction="row">
					<IconButton disableRipple className="player-buttons">
						<BiShuffle />
					</IconButton>
					<IconButton disableRipple className="player-buttons">
						<MdSkipPrevious />
					</IconButton>
					<IconButton disableRipple className="player-buttons" id="play-button">
						<FaCirclePlay />
					</IconButton>
					<IconButton disableRipple className="player-buttons">
						<MdSkipNext />
					</IconButton>
					<IconButton disableRipple className="player-buttons" sx={{transform: "rotate(180deg)"}}>
						<BiRepeat />
					</IconButton>
				</Stack>

				<Slider
					size="small"
					value={15}
					sx={{
						color: "white",
						cursor: "default",
						maxWidth: "600px",
						height: 4,
						"& .MuiSlider-thumb": {
							width: 0,
							height: 0,
							boxShadow: "none"
						},
						"& .MuiSlider-rail": {
							opacity: 0.28,
						},
						"&:hover .MuiSlider-track": {
							color: "#1db954"
						},
						"&:hover .MuiSlider-thumb": {
							width: 10,
							height: 10,
						},
						"& .MuiSlider-thumb.Mui-focusVisible": {
							width: 10,
							height: 10,
						}
					}}
				/>
			</Stack>

			<Stack flex={1}>
				Buttons
			</Stack>
		</Stack>
	);
}