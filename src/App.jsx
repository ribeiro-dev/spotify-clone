import { Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {

	return (
		<ThemeProvider theme={darkTheme}>
			<Paper>
				Hello World
			</Paper>
		</ThemeProvider>
	);
}

export default App;
