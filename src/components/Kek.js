import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"as": "h2",
	"font": "--headline1",
	"md-font": "--headline2",
	"margin": "20px 0 0 0",
	"color": "#f4e7e7",
	"children": "test netlify"
};
const overrides = {};

const Kek = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(Kek, { ...Text,
	defaultProps,
	overrides
});
export default Kek;