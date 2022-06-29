import { ReactElement, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Page } from "../page.js";
import { NotFound } from "../NotFound.js";
import { Loading, styled } from "../index.js";

const StyledMain = styled("main", {
  gridArea: "content",
  bc: "$gray1",
  height: "100%",
});

interface BaseContentProps {
  defaultPath?: string;
  logoSrc: string;
}

interface ChildrenContentProps extends BaseContentProps {
  children: ReactElement;
}

interface PagesContentProps extends BaseContentProps {
  pages: Page[];
}

type ContentProps = ChildrenContentProps | PagesContentProps;

export function Content(props: ContentProps): ReactElement {
  const { defaultPath, logoSrc } = props;
  let content: ReactElement;
  if ("children" in props) {
    content = props.children;
  } else {
    content = (
      <Suspense fallback={<Loading logoSrc={logoSrc} />}>
        <Routes>
          <Route
            index
            element={<Navigate to={defaultPath || props.pages[0].path} />}
          />
          {props.pages.map((p) => (
            <Route key={p.path} path={`${p.path}/*`} element={p.component} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    );
  }
  return <StyledMain>{content}</StyledMain>;
}
