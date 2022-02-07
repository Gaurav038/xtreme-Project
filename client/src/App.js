import { Route, Routes, Navigate } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<AllUsers />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/signup" />} />
		</Routes>
	);
}

export default App;
