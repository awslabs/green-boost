import { Fragment, type ReactElement } from "react";
import { Button, Divider, Flex, Placeholder } from "@aws-amplify/ui-react";
import { MdCheck } from "react-icons/md";
import { styled } from "../index.js";

const StepContainer = styled(Button, {
  display: "flex",
  gap: "$2",
  alignItems: "center",
  color: "$primary12 !important",
  bc: "transparent !important",
  bs: "none !important",
  fontWeight: "normal",
});
const StatusCircle = styled("div", {
  alignItems: "center",
  bc: "$gray3",
  br: "50%",
  display: "flex",
  flexShrink: "0",
  height: "$7",
  justifyContent: "center",
  width: "$7",
  "&:hover": {
    border: "2px solid $success12",
  },
  variants: {
    active: {
      true: {
        border: "2px solid $success12",
      },
    },
    complete: {
      true: {
        bc: "$success8",
      },
    },
    disabled: {
      true: {
        bc: "$gray8",
        "&:hover": {
          border: "none",
        },
      },
    },
  },
});
const Check = styled(MdCheck, { color: "white", size: 30 });
const Title = styled("div", { fontWeight: "bold" });
const Description = styled("div", { fontSize: "$3" });
const StyledDivider = styled(Divider, {
  flex: "1 1 0%",
  margin: "auto",
  variants: {
    active: {
      true: {
        borderColor: "$success8",
      },
    },
  },
});
/**
 * @deprecated
 */
export interface Step {
  /**
   * @default false
   */
  active?: boolean;
  /**
   * @default false
   */
  complete?: boolean;
  description?: string;
  /**
   * @default false
   */
  disabled?: boolean;
  handleClick?: () => void;
  title: string;
}

interface FlowStepperProps {
  loading?: boolean;
  steps: Step[];
}
/**
 * @deprecated
 */
export function FlowStepper(props: FlowStepperProps): ReactElement {
  const { loading, steps } = props;
  return (
    <Placeholder isLoaded={!loading} style={{ height: "61px" }}>
      <Flex basis="0">
        {steps.map((s, i) => (
          <Fragment key={s.title}>
            {i !== 0 && <StyledDivider active={s.active} />}
            <StepContainer
              variation="link"
              onClick={s.handleClick}
              isDisabled={s.disabled}
            >
              <StatusCircle
                complete={s.complete}
                active={s.active}
                disabled={s.disabled}
              >
                {s.complete ? <Check /> : <Title>{i + 1}</Title>}
              </StatusCircle>
              <div>
                <Title>{s.title}</Title>
                <Description>{s.description}</Description>
              </div>
            </StepContainer>
          </Fragment>
        ))}
      </Flex>
    </Placeholder>
  );
}
