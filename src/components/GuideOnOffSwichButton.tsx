import { Button, ButtonProps, Tooltip } from "@chakra-ui/react";
import React from "react";
import { memo } from "react";

type Props = ButtonProps & {
	onClickButton: React.Dispatch<React.SetStateAction<boolean>>;
	guideOnFlag: boolean;
};

//ローマ字打ちGuideの表示切替ボタンコンポーネント
export const GuideOnOffSwitchButton: React.FC<Props> = memo((props: Props) => {
	const { onClickButton, guideOnFlag, ...buttonProps } = props;

	const tooltipLabel = guideOnFlag ? "Switch to GuideOff" : "Switch to GuideOn";

	return (
		<Tooltip label={tooltipLabel} placement={"right-end"}>
			<Button
				{...buttonProps}
				colorScheme={guideOnFlag ? "teal" : "gray"}
				onClick={() => {
					onClickButton((prev) => !prev);
				}}
			>
				{guideOnFlag ? "Guide:ON" : "Guide:OFF"}
			</Button>
		</Tooltip>
	);
});

GuideOnOffSwitchButton.displayName = "GuideOnOffSwitchButton";
