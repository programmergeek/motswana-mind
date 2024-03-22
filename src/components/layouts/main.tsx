import React from "react";
import NavMenu from "../custom/navigation-menu";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ ...props }) => {
	return (
		<div className="h-screen grid grid-rows-[5vh_auto]">
			<div></div>
			<NavMenu />
			{props.children}
		</div>
	);
};

export default Layout;
