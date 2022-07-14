import { ChangeEvent, ReactElement, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { useNotifications } from "gboost-ui";

const variations = ["info", "error", "success", "warning"] as const;

export function DemoNotification(): ReactElement {
  const [body, setBody] = useState("Body of notification");
  const [heading, setHeading] = useState("");
  const [variation, setVariation] = useState<typeof variations[number]>("info");
  const [timeout, setTimeout] = useState(5000);
  const { notify } = useNotifications();
  return (
    <Flex
      direction="column"
      maxWidth="500px"
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <Heading level={1} style={{ textAlign: "center" }}>
        Notifications Demo
      </Heading>
      <TextField
        placeholder="Input body of notification"
        label="Body"
        value={body}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setBody(e.target.value)}
      />
      <TextField
        label="Heading"
        placeholder="Input heading of notification"
        value={heading}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setHeading(e.target.value)
        }
      />
      <SelectField
        label="Variation"
        value={variation}
        onChange={(e) =>
          setVariation(e.target.value as typeof variations[number])
        }
      >
        {variations.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </SelectField>
      <TextField
        label="Timeout (ms)"
        value={timeout}
        type="number"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTimeout(Number(e.target.value))
        }
      />
      <Button
        onClick={() => notify({ body, heading, variation, timeout })}
        variation="primary"
      >
        Notify
      </Button>
    </Flex>
  );
}
