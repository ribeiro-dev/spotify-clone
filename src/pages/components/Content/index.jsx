import PropTypes from "prop-types";

import { Box, Chip, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiDownArrowCircle } from "react-icons/bi";
import { BsExplicitFill } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";
import { VscVerifiedFilled } from "react-icons/vsc";

import "./style.css";

function SongItem({ name, duration, explicit, urlImg }) {
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
						<Typography>1</Typography>
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
			borderRadius={1}
		>
			<Box
				padding="16px"
				sx={{
					borderTopLeftRadius: "inherit",
					borderTopRightRadius: "inherit",
					backgroundImage: "linear-gradient(to bottom, #4c4c4c, #424242, #383838, #2e2e2e, #252525)"
				}}
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
								<Typography className="text-gray" variant="body2" fontSize={14}>Artista Verificado</Typography>
							</Stack>
							<Typography variant="h1" fontWeight="bold">MC Cabelinho</Typography>
						</Box>
						<Typography className="text-gray">9.848.122 ouvintes mensais</Typography>
					</Box>
				</Stack>
			</Box>

			<Box
				padding="24px 20px"
				flex={1}
				sx={{
					backgroundColor: "rgb(83, 83, 83)",
					backgroundImage: "linear-gradient(to bottom, #272626, #222121, #1c1c1c, #171717, #121212)"
				}}
			>
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
						<SongItem name="X1" explicit={true} urlImg={"https://placehold.co/40x40"} reproductions={"Reproduções"} duration={188852} />
						<SongItem name="MINHA CURA" explicit={false} urlImg={"https://placehold.co/40x40"} reproductions={"Reproduções"} duration={150000} />
						<SongItem name="FOGO E GASOLINA" explicit={true} urlImg={"https://placehold.co/40x40"} reproductions={"Reproduções"} duration={300000} />
						<SongItem name="BEM MELHOR" explicit={false} urlImg={"https://placehold.co/40x40"} reproductions={"Reproduções"} duration={300000} />
						<SongItem name="CAOS" explicit={false} urlImg={"https://placehold.co/40x40"} reproductions={"Reproduções"} duration={300000} />
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
		</Stack>
	);
}


SongItem.propTypes = {
	name: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
	explicit: PropTypes.bool.isRequired,
	urlImg: PropTypes.string.isRequired,
};