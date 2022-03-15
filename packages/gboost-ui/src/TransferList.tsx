import {
  Button,
  CheckboxField,
  Heading,
  SearchField,
  Text,
} from "@aws-amplify/ui-react";
import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Box } from "./Box.js";
import { styled } from "./stitches.config.js";

type TransferDirection = "left" | "right";
type TransferListType = "source" | "target";

export interface TransferListProps<T> {
  errorMessage?: string;
  getKey?: (option: T) => string;
  hasError?: boolean;
  /**
   * @default "300px"
   */
  listHeight?: string;
  isDisabled?: boolean;
  label: ReactNode;
  onChange: (nextTargetKeys: string[]) => void;
  /**
   * If defined, will enable filter search box within lists
   */
  onFilter?: (
    filterText: string,
    listOptions: T[],
    listType?: TransferListType
  ) => T[] | Promise<T[]>;
  /**
   * If getKey is not defined, each option object must have `key` property
   */
  options: T[];
  render: (option: T) => string;
  /**
   * Target or selected keys (in right list) of items
   */
  value: string[];
  /**
   * @default ["Source", "Target"]
   */
  titles?: [string, string];
}

export const defaultListHeight = "300px";
const StyledFieldContainer = styled(Box, {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});
const StyledContainer = styled(Box, {
  display: "grid",
  gap: "$1",
  gridTemplateColumns: "1fr auto 1fr",
});
const StyledHeadingContainer = styled(Box, {
  display: "flex",
  gap: "$2",
  m: "$2",
});
const StyledSearchField = styled(SearchField, {
  m: "$2",
});
const StyledListContainer = styled(Box, {
  border: "1px solid var(--amplify-components-fieldcontrol-border-color)",
  borderRadius: "var(--amplify-components-fieldcontrol-border-radius)",
  overflow: "hidden",
  variants: {
    hasError: {
      true: {
        borderColor:
          "var(--amplify-components-fieldcontrol-error-border-color)",
      },
    },
  },
});
const StyledList = styled("ul", {
  listStyle: "none",
  gap: "$2",
  px: "$2",
  overflowY: "scroll",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TransferList<T extends Record<string, any>>(
  props: TransferListProps<T>,
  ref: ForwardedRef<HTMLUListElement>
): ReactElement {
  const {
    errorMessage,
    hasError,
    listHeight = defaultListHeight,
    getKey = (option) => option.key as string,
    label,
    onChange,
    onFilter: handleFilter,
    options,
    render,
    value: initTargetKeys,
    titles = ["Source", "Target"],
  } = props;
  const [sourceFilter, setSourceFilter] = useState("");
  const [targetFilter, setTargetFilter] = useState("");
  const [sourceKeys, setSourceKeys] = useState<string[]>([]);
  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  const optionsMap = useMemo(
    () =>
      options.reduce(
        (prev, cur) => ({ ...prev, [getKey(cur)]: cur }),
        {} as Record<string, T>
      ),
    [getKey, options]
  );
  useEffect(() => {
    async function filter() {
      const initSourceKeys = options
        .map((o) => getKey(o))
        .filter((k) => !initTargetKeys.includes(k));
      if (handleFilter && sourceFilter) {
        let filteredItems = handleFilter(
          sourceFilter,
          initSourceKeys.map((k) => optionsMap[k]),
          "source"
        );
        if ("then" in filteredItems) {
          filteredItems = await filteredItems;
        }
        setSourceKeys(filteredItems.map((o) => getKey(o)));
      } else {
        setSourceKeys(initSourceKeys);
      }
    }
    filter();
  }, [getKey, handleFilter, initTargetKeys, options, optionsMap, sourceFilter]);
  useEffect(() => {
    async function filter() {
      if (handleFilter && targetFilter) {
        let filteredItems = handleFilter(
          targetFilter,
          initTargetKeys.map((k) => optionsMap[k]),
          "target"
        );
        if ("then" in filteredItems) {
          filteredItems = await filteredItems;
        }
        setTargetKeys(filteredItems.map((o) => getKey(o)));
      } else {
        return setTargetKeys(initTargetKeys);
      }
    }
    filter();
  }, [getKey, handleFilter, initTargetKeys, optionsMap, targetFilter]);

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const transfer = useCallback(
    (direction: TransferDirection) => {
      const nextTargetKeys = [] as string[];
      for (const o of options) {
        const key = getKey(o);
        if (direction === "right") {
          if (selectedKeys.includes(key) || targetKeys.includes(key)) {
            nextTargetKeys.push(key);
          }
        } else if (!selectedKeys.includes(key) && targetKeys.includes(key)) {
          nextTargetKeys.push(key);
        }
      }
      onChange(nextTargetKeys);
      setSelectedKeys([]);
    },
    [getKey, onChange, options, selectedKeys, targetKeys]
  );
  const handleCheck = useCallback(
    (key: string, checked: boolean) => {
      if (checked) {
        setSelectedKeys((selectedKeys) => [...selectedKeys, key]);
      } else {
        setSelectedKeys((selectedKeys) =>
          selectedKeys.filter((k) => k !== key)
        );
      }
    },
    [setSelectedKeys]
  );
  return (
    <StyledFieldContainer>
      <label className="amplify-label">{label}</label>
      <StyledContainer>
        <StyledListContainer>
          <StyledHeadingContainer>
            <Heading>{titles[0]}</Heading>
          </StyledHeadingContainer>
          {handleFilter && (
            <StyledSearchField
              label="Source Filter"
              labelHidden
              placeholder="Search"
              onSubmit={(s) => setSourceFilter(s)}
              onClear={() => setSourceFilter("")}
              size="small"
            />
          )}
          <StyledList ref={ref} style={{ height: listHeight }}>
            {sourceKeys.map((s) => (
              <li key={s} style={{ display: "flex" }}>
                <CheckboxField
                  checked={selectedKeys.includes(s)}
                  label={render(optionsMap[s])}
                  name={s}
                  onChange={(e) => handleCheck(s, e.target.checked)}
                  value={s}
                />
              </li>
            ))}
          </StyledList>
        </StyledListContainer>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "$4",
          }}
        >
          <Button
            isDisabled={!selectedKeys.length}
            onClick={() => transfer("right")}
            size="small"
          >
            <MdArrowForwardIos />
          </Button>
          <Button
            isDisabled={!selectedKeys.length}
            onClick={() => transfer("left")}
            size="small"
          >
            <MdArrowBackIos />
          </Button>
        </Box>
        <StyledListContainer hasError={hasError}>
          <StyledHeadingContainer>
            <Heading>{titles[1]}</Heading>
          </StyledHeadingContainer>
          {handleFilter && (
            <StyledSearchField
              label="Target Filter"
              labelHidden
              placeholder="Search"
              onSubmit={(s) => setTargetFilter(s)}
              onClear={() => setTargetFilter("")}
              size="small"
            />
          )}
          <StyledList style={{ height: listHeight }}>
            {targetKeys.map((t) => (
              <li key={t}>
                <CheckboxField
                  checked={selectedKeys.includes(t)}
                  label={render(optionsMap[t])}
                  name={t}
                  onChange={(e) => handleCheck(t, e.target.checked)}
                  value={t}
                />
              </li>
            ))}
          </StyledList>
        </StyledListContainer>
      </StyledContainer>
      {hasError && (
        <Text className="amplify-field__error-message">{errorMessage}</Text>
      )}
    </StyledFieldContainer>
  );
}

// https://fettblog.eu/typescript-react-generic-forward-refs/#option-1%3A-type-assertion
export const RefTransferList = forwardRef(TransferList) as <T>(
  props: TransferListProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReactElement;
