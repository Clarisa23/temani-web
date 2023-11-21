import { React } from "react";
import Head from "next/head";
import {
  ChakraProvider,
  Button,
  Stack,
  Switch,
  List,
  ListItem,
  Text,
  Spacer,
  useControllableState,
} from "@chakra-ui/react";
import useArray from "../hooks/useArray";

export default function Home() {
  const [isStarted, setIsStarted] = useControllableState({
    defaultValue: false,
  });
  const [isModeAutomatic, setIsModeAutomatic] = useControllableState({
    defaultValue: true,
  });
  const [humidity, setHumidity] = useControllableState({ defaultValue: 20 });
  const logs = useArray([
    {
      timestamp: new Date().toLocaleTimeString(),
      description: "TEMANI robot connected",
    },
  ]);

  return (
    <ChakraProvider>
      <Stack direction="column" spacing={4} align="stretch">
        <Stack bg="#9EB8D9" align="center" h="5vh" justify="center">
          <Text>TEMANI Control Panel</Text>
        </Stack>

        <Stack bg="gray" h="27vh" m={4} rounded="lg">
          VIDEO
        </Stack>

        <Stack direction="column" spacing={8} h="35vh" align="center">
          <Stack direction="row" w="100%" px={6}>
            <Text>Mode: {isModeAutomatic ? "Automatic" : "Manual"}</Text>
            <Spacer />
            <Switch
              colorScheme="teal"
              size="lg"
              onChange={(e) => {
                setIsModeAutomatic(!e.target.checked)
                logs.push({
                  timestamp: new Date().toLocaleTimeString(),
                  description: "Mode changed to " + (isModeAutomatic ? "manual" : "automatic")
                })
              }}
              defaultChecked={false}
            />
          </Stack>
          <Button
            colorScheme="teal"
            variant="outline"
            h="30%"
            w="50%"
            onClick={() => {
              setIsStarted(!isStarted);
              logs.push({
                timestamp: new Date().toLocaleTimeString(),
                description: "Robot " + (isStarted ? "stopped" : "started")
              })
            }}
          >
            {isStarted ? "Stop" : "Start"}
          </Button>
          <Stack w="70%" align="center" spacing={1.5}>
            <Button
              disabled={isModeAutomatic}
              onClick={() => {
                const curHumidity = Math.floor(Math.random() * 100);
                setHumidity(curHumidity);
                logs.push({
                  timestamp: new Date().toLocaleTimeString(),
                  description: "Kelembaban " + curHumidity + "%",
                });
              }}
            >
              Cek Kelembaban Tanah
            </Button>
            <Text>Kelembaban: {humidity}%</Text>
          </Stack>
        </Stack>

        <Stack direction="column" h="30vh" borderTop="1px" p={2}>
          <Text>Log Event</Text>
          <List>
            {logs.value.map((log) => (
              <ListItem>
                {log.timestamp} {log.description}
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}
