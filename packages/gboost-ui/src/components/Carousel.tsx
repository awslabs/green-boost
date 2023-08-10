import { Icon } from "@aws-amplify/ui-react";
import { useInterval } from "@mantine/hooks";
import { type ReactElement, useCallback, useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { type CSS, styled } from "../index.js";

// Adapted from https://mdbootstrap.com/docs/standard/components/carousel

const Container = styled("div", {
  position: "relative",
});
const IndicatorContainer = styled("div", {
  position: "absolute",
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: "$2",
  display: "flex",
  justifyContent: "center",
  padding: 0,
  mb: "$4",
});
const IndicatorButton = styled("button", {
  boxSizing: "content-box",
  cursor: "pointer",
  flex: "0 1 auto",
  bc: "$primary1",
  opacity: 0.5,
  transition: "opacity .5s ease",
  border: 0,
  mx: "$1",
  variants: {
    active: {
      true: {
        opacity: 1,
      },
    },
    shape: {
      rectangle: {
        width: "$6",
        height: "$1",
      },
      circle: {
        br: "$round",
        height: "$3",
        width: "$1",
      },
    },
  },
});
const ItemsContainer = styled("div", {
  position: "relative",
  width: "100%",
  overflow: "hidden",
});
const Item = styled("div", {
  opacity: 0,
  transitionProperty: "opacity",
  transform: "none",
  position: "relative",
  display: "none",
  float: "left",
  width: "100%",
  mr: "-100%",
  backfaceVisibility: "hidden",
  transition: "transform .6 ease-in-out",
  variants: {
    active: {
      true: {
        zIndex: "$1",
        opacity: 1,
        display: "block",
      },
    },
  },
});
const Control = styled("button", {
  position: "absolute",
  top: 0,
  bottom: 0,
  zIndex: "$2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "15%",
  p: 0,
  color: "$primary1",
  ta: "center",
  background: "none",
  border: 0,
  opacity: 0.5,
  transition: "opacity .15s ease",
  cursor: "pointer",
  "&:hover": {
    color: "$primary1",
    textDecoration: "none",
    outline: 0,
    opacity: 0.9,
  },
  variants: {
    direction: {
      previous: {
        left: 0,
      },
      next: {
        right: 0,
      },
    },
  },
});
const ControlIcon = styled(Icon, {
  fontSize: "$9",
});

interface CarouselProps {
  children: JSX.Element[];
  height?: CSS["height"];
  /**
   * @default false
   */
  hideControls?: boolean;
  /**
   * @default false
   */
  hideIndicators?: boolean;
  /**
   * @default "rectangle"
   */
  indicatorShape?: "rectangle" | "circle";
  /**
   * @default 5000
   */
  interval?: number;
  /**
   * @default true
   */
  pauseOnHover?: boolean;
}

/**
 * Cycling slideshow of different elements such as photos, videos or text
 * @deprecated
 */
export function Carousel(props: CarouselProps): ReactElement {
  const {
    children,
    height,
    hideControls,
    hideIndicators,
    indicatorShape = "rectangle",
    interval: int = 5000,
  } = props;
  const [active, setActive] = useState(0);
  const cycleActive = useCallback(
    (direction: "next" | "previous") => {
      setActive((a) => {
        const newActive = direction === "next" ? a + 1 : a - 1;
        if (newActive < 0) {
          return children.length - 1;
        } else {
          return newActive % children.length;
        }
      });
    },
    [children.length]
  );
  const interval = useInterval(() => cycleActive("next"), int);
  useEffect(() => {
    interval.start();
    return interval.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // stop carousel when tab not visible
    const type = "visibilitychange";
    function handleVisiblityChange() {
      if (document.hidden) {
        interval.stop();
      } else {
        interval.start();
      }
    }
    document.addEventListener(type, handleVisiblityChange);
    return () => document.removeEventListener(type, handleVisiblityChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let indicators: ReactElement | undefined;
  if (!hideIndicators) {
    indicators = (
      <IndicatorContainer className="carousel-indicators-container">
        {children.map((_c, i) => (
          <IndicatorButton
            key={i}
            active={active === i}
            onClick={() => setActive(i)}
            shape={indicatorShape}
          />
        ))}
      </IndicatorContainer>
    );
  }
  let controls: ReactElement | undefined;
  if (!hideControls) {
    controls = (
      <>
        <Control direction="previous" onClick={() => cycleActive("previous")}>
          <ControlIcon as={MdNavigateBefore} />
        </Control>
        <Control direction="next" onClick={() => cycleActive("next")}>
          <ControlIcon as={MdNavigateNext} />
        </Control>
      </>
    );
  }
  return (
    <Container
      onMouseEnter={() => interval.stop()}
      onMouseLeave={() => interval.start()}
      className="carousel-container"
      css={{ height }}
    >
      {indicators}
      <ItemsContainer className="carousel-items-container">
        {children.map((c, i) => (
          <Item key={i} active={active === i}>
            {c}
          </Item>
        ))}
      </ItemsContainer>
      {controls}
    </Container>
  );
}
