import React from "react";
const handleResult = (exp) => {
	if (exp === "") {
		return "Error";
	}
	try {
		// eslint-disable-next-line no-eval
		const res = eval(exp);
		return res;
	} catch (error) {
		return "Error";
	}
};
const Button = ({ children, handleClickFun, curExp, setRes }) => {
	return (
		<button
			onClick={() => {
				// eslint-disable-next-line eqeqeq
				if (children == "=") {
					const res = handleResult(curExp);
					setRes(res);
				} else {
					handleClickFun(children);
				}
			}}
		>
			{children}
		</button>
	);
};

export default Button;