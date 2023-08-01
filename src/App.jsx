import { Paper, ThemeProvider } from "@mui/material";

import AppTheme from "./assets/theme";

import Index from "./pages/Index";

function App() {

	return (
		<ThemeProvider theme={AppTheme}>
			<Paper sx={{ minHeight: "100vh", borderRadius: 0, backgroundColor: "#000", backgroundImage: "none" }}>
				<Index />
			</Paper>
		</ThemeProvider>
	);
}

export default App;
