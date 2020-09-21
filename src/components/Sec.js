import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import { Text, Button } from "@quarkly/widgets";
import Kek from "./Kek";
const defaultProps = {
	"padding": "100px 0",
	"sm-padding": "40px 0",
	"background": "rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1599687266725-0d4d52716b86?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 0% 0% /auto repeat scroll padding-box"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h2",
			"font": "--headline1",
			"md-font": "--headline2",
			"margin": "20px 0 0 0",
			"color": "#f4e7e7",
			"children": "V3"
		}
	},
	"kek": {
		"kind": "Kek",
		"props": {
			"children": "sadsadsawwwd"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h2",
			"font": "--headline1",
			"md-font": "--headline2",
			"margin": "20px 0 0 0",
			"color": "#f4e7e7",
			"children": "test netlify"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "p",
			"font": "--lead",
			"margin": "20px 0 0 0",
			"children": "Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are."
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"font": "--lead",
			"margin": "20px",
			"children": "Button"
		}
	}
};

const Sec = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" align-items="center" />
		<Text {...override("text")} />
		<Kek {...override("kek")} />
		<Text {...override("text1")} />
		<Text {...override("text2")} />
		<Button {...override("button")} />
		{children}
	</Section>;
};

Object.assign(Sec, { ...Section,
	defaultProps,
	overrides
});
export default Sec;