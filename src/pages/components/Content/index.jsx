import { Box, Stack, Typography } from "@mui/material";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiDownArrowCircle } from "react-icons/bi";
import { VscVerifiedFilled } from "react-icons/vsc";

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
		</Stack>
	);
}