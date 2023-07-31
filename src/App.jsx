import { Paper, ThemeProvider } from "@mui/material";

import AppTheme from "./assets/theme";

import Index from "./pages/Index";

function App() {

	return (
		<ThemeProvider theme={AppTheme}>
			<Paper sx={{ minHeight: "100vh", borderRadius: 0 }}>
				<Index />
			</Paper>
		</ThemeProvider>
	);
}

export default App;
