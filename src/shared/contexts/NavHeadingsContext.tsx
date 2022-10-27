import React, { useState } from 'react';

export const NavHeadingsContext = React.createContext({
	pinned: true,

	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
	setPinned: (pinned: boolean) => {},
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NavHeadingsContextProvider = (props: any) => {
	const [pinned, setPinned] = useState(true);

	return (
		<NavHeadingsContext.Provider value={{ pinned, setPinned }}>
			{props.children}
		</NavHeadingsContext.Provider>
	);
};
