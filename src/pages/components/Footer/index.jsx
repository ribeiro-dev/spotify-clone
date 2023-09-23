import { useState } from "react";

import { Box, IconButton, Slider, Stack, Typography } from "@mui/material";

import { AiFillHeart, AiOutlineArrowsAlt, AiOutlineHeart } from "react-icons/ai";
import { FaCirclePlay, FaComputer } from "react-icons/fa6";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BiShuffle, BiRepeat, BiVolumeFull } from "react-icons/bi";
import { CgPlayButtonR } from "react-icons/cg";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";


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
				<Box
					component="img"
					className="img"
					mr={2}
					borderRadius={1}
					src="https://i.scdn.co/image/ab67616d00004851d84eb47817bacd302f0529a4"
					alt="Image Placeholder"
					sx={{ width: "54px", height: "54px" }}
				/>
				<Stack direction="column" mr={3}>
					<Typography variant="body2" className="song-name">Mourning</Typography>
					<Typography variant="body2" className="artist-name">Post Malone</Typography>
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
				<Stack direction="row" spacing={2}>
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

				<Box sx={{ width: "100%" }}>
					<Stack
						direction="row"
						justifyContent="center"
						alignItems="center"
						spacing={1}
					>
						<Typography className="slider-timer" variant="body2">0:00</Typography>
						<Slider
							size="small"
							defaultValue={15}
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
						<Typography className="slider-timer" variant="body2">3:21</Typography>
					</Stack>
				</Box>

			</Stack>

			<Stack flex={1} direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
				<CgPlayButtonR className="buttons" />
				<TbMicrophone2 className="buttons" />
				<HiOutlineQueueList className="buttons" />
				<FaComputer className="buttons" />

				<Stack direction="row" spacing={1} alignItems="center"
					sx={{
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
					}}>
					<BiVolumeFull className="buttons" />
					<Slider
						size="small"
						defaultValue={15}
						sx={{
							color: "white",
							cursor: "default",
							width: "100px",
							height: 4
						}}
					/>
				</Stack>
				<AiOutlineArrowsAlt className="buttons" />
			</Stack>
		</Stack>
	);
}