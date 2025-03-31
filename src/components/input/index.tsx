import type { ComponentProps } from "react";
import { forwardRef } from "react";


import { Container } from "./styles";

type InputProps = ComponentProps<"input"> & {
	label?: string;
	variant?: "black" | "dark";
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, variant = "black", id, ...props }, ref) => {
		return (
			<Container $variant={variant}>
				{label && <label htmlFor={id}>{label}</label>}
				<input ref={ref} {...props} />
			</Container>
		);
	},
);
