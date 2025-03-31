import {  forwardRef } from "react";
import type { ComponentProps } from "react";

import { MagnifyingGlass } from "@phosphor-icons/react";

import { Container } from "./styles";

type ButtonIconProps = ComponentProps<"button">

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>( 
   ({children, ...props
}, ref) => {
	return (
		<Container {...props} ref={ref}>
			<MagnifyingGlass />
		</Container>
	);
});
