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

interface ContentProps {
  defaultPath?: string;
  logoSrc: string;
  pages: Page[];
}

export function Content(props: ContentProps): ReactElement {
  const { defaultPath, logoSrc, pages } = props;
  return (
    <StyledMain>
      <Suspense fallback={<Loading logoSrc={logoSrc} />}>
        <Routes>
          <Route
            index
            element={<Navigate to={defaultPath || pages[0].path} />}
          />
          {pages.map((p) => (
            <Route key={p.path} path={`${p.path}/*`} element={p.component} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </StyledMain>
  );
}
