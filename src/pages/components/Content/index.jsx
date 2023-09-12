import PropTypes from "prop-types";

import { Box, Chip, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiDownArrowCircle } from "react-icons/bi";
import { BsExplicitFill } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";
import { VscVerifiedFilled } from "react-icons/vsc";

import "./style.css";
import topTracks from "../../../mocks/artistTopTracks";



function SongItem({ position, name, duration, explicit, urlImg }) {
	const durationInMinutes = (duration / 60000).toFixed(2).replace(".", ":");

	return (
		<ListItem disablePadding>
			<ListItemButton
				disableRipple
				sx={{
					borderRadius: "4px"
				}}>

				<Stack
					direction="row"
					spacing={2}
					alignItems="center"
					width={1}
				>

					<Stack
						direction="row"
						alignItems="center"
						spacing={2}
						flexBasis="60%"
					>
						<Typography>{position}</Typography>
						<Box component="img" src={urlImg} width="40px" height="40px" />
						<Box>
							<Typography>{name}</Typography>
							{ explicit && (
								<BsExplicitFill color="darkgray" fontSize={13} />
							)}
						</Box>
					</Stack>
					<Typography className="text-gray" textAlign="right" flexGrow={1}>{durationInMinutes}</Typography>
				</Stack>

			</ListItemButton>
		</ListItem>
	);
}


export default function Content() {

	return (
		<Stack
			component="main"
			gridArea="main-view"
			borderRadius={2}
			sx={{ overflowX: "hidden", overflowY: "auto"}}
		>
			<Box
				padding="16px"
				sx={{
					position: "relative",
					borderTopLeftRadius: "inherit",
					borderTopRightRadius: "inherit",
				}}
			>
				{/* COLOR BOXES */}
				<Box sx={{
					borderTopLeftRadius: "inherit",
					borderTopRightRadius: "inherit",
					display: "block",
					height: "100%",
					left: "0",
					position: "absolute",
					top: "0",
					width: "100%",
					backgroundColor: "rgb(176, 48, 72)"
				}} />
				<Box sx={{
					display: "block",
					height: "100%",
					left: "0",
					position: "absolute",
					top: "0",
					width: "100%",
					background: "linear-gradient(transparent 0,rgba(0,0,0,.5) 100%)"
				}} />
				{/* END COLOR BOXES */}

				<Box position="relative">
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

					<Stack direction="row" alignItems="center" mt={2}>
						<Box
							component="img"
							src="https://i.scdn.co/image/ab67616100005174cb8060f9f0e9249f6df52559"
							alt="MC Cabelinho"
							sx={{
								width: "232px",
								height: "232px",
								borderRadius: "50%",
								boxShadow: "0 4px 60px rgba(0,0,0,.5)",
								objectFit: "cover"
							}}
						/>

						<Box ml={3} pt={2}>
							<Box mb={3}>
								<Stack direction="row" alignItems="center" spacing={1}>
									<VscVerifiedFilled className="icon-verified" fontSize={25} />
									<Typography variant="body2" fontSize={14}>Artista Verificado</Typography>
								</Stack>
								<Typography variant="h1" fontWeight="bold">MC Cabelinho</Typography>
							</Box>
							<Typography>9.848.122 ouvintes mensais</Typography>
						</Box>
					</Stack>
				</Box>
			</Box>

			<Box
				padding="24px 20px"
				flex={1}
				sx={{
					position: "relative",
					backgroundColor: "#121212",
					borderBottomLeftRadius: "inherit",
					borderBottomRightRadius: "inherit"
				}}
			>
				{/* COLOR BOX */}
				<Box sx={{
					backgroundImage: "linear-gradient(rgba(0,0,0,.6) 0, #121212 100%)",
					height: "232px",
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					backgroundColor: "rgb(176, 48, 72)"
				}} />

				<Box position="relative">
					<Stack direction="row" alignItems="center" spacing={4} mb={2}>
						<Box
							sx={{
								display: "inline-block",
								cursor: "pointer",
								"&:hover": {
									transform: "scale(1.05)"
								}
							}}
						>
							<FaCirclePlay color="#1db954" fontSize={50} />
						</Box>

						<Chip
							label="Seguir"
							sx={{
								fontWeight: "bold",
								border: "1px solid #878787",
								background: "transparent",
								"&:hover": {
									cursor: "pointer",
									border: "1px solid white",
								}
							}}
						/>

						<Box
							sx={{
								color: "#A7A7A7",
								"& :hover": {
									color: "white",
									cursor: "pointer",
								}
							}}
						>
							<BiDotsHorizontalRounded fontSize={30} />
						</Box>
					</Stack>

					<Stack>
						<Typography fontWeight="bold" variant="h6">Populares</Typography>

						<List mb={2}>
							{topTracks.map((track, index) => (
								<SongItem
									position={index+1}
									key={track.name}
									name={track.name}
									explicit={track.explicit}
									urlImg={track.img}
									reproductions={"Reproduções"}
									duration={track.duration}
								/>
							))}
						</List>
						<Typography
							ml={1}
							component="span"
							className="text-gray"
							fontWeight="bold"
							variant="body2"
							sx={{
								display: "contents",
								"&:hover": {
									cursor: "default !important",
									color: "white"
								}
							}}
						>
						Ver mais
						</Typography>
					</Stack>
				</Box>
			</Box>
		</Stack>
	);
}


SongItem.propTypes = {
	position: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
	explicit: PropTypes.bool.isRequired,
	urlImg: PropTypes.string.isRequired,
};