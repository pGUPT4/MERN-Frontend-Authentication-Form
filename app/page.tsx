'use client'

import Image from "next/image";
import { BrowserRouter } from "react-router-dom";
import { LoginForm } from "./components/forms";

export default function Home() {
	return (
		<div>
			<BrowserRouter>
				<p>Test</p>
			</BrowserRouter>
		</div>
	);
}
