import * as React from "react";
import Head from "next/head";
import { ChakraProvider, Button, Box, Stack, Switch, List, ListItem, Text, Spacer } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Stack direction="column" spacing={4} align="stretch">

        <Stack bg='#9EB8D9' align='center' h='5vh'>
          <Text>ROBOT PENYIRAM TEMANI</Text>
        </Stack>

        <Stack bg='gray' h='30vh'>
          VIDEO
        </Stack>

        <Stack direction='column' spacing={4} h='35vh'>
          <Stack direction='row'>
            <Text>Mode: Manual</Text>
            <Spacer />
            <Switch colorScheme='teal' size='lg' />
          </Stack>
          <Button colorScheme="teal" variant="outline">
            Start
          </Button>
          <Button>
            Cek Kelembaban Tanah
          </Button>
        </Stack>

        <Stack direction='column' h='30vh'>
          <Text>Log Event</Text>
          <List>
            <ListItem>20:45:50 asdasdas</ListItem>
            <ListItem>20:46:00 robot meledak</ListItem>
            <ListItem>20:46:15 kelembaban 20%, melakukan penyiraman</ListItem>
            <ListItem>20:45:50 asdasdas</ListItem>
            <ListItem>20:46:00 robot meledak</ListItem>
            <ListItem>20:46:15 kelembaban 20%, melakukan penyiraman</ListItem>
            <ListItem>20:45:50 asdasdas</ListItem>
            <ListItem>20:46:00 robot meledak</ListItem>
            <ListItem>20:46:15 kelembaban 20%, melakukan penyiraman</ListItem>
            <ListItem>20:45:50 asdasdas</ListItem>
            <ListItem>20:46:00 robot meledak</ListItem>
            <ListItem>20:46:15 kelembaban 20%, melakukan penyiraman</ListItem>
            <ListItem>20:45:50 asdasdas</ListItem>
            <ListItem>20:46:00 robot meledak</ListItem>
            <ListItem>20:46:15 kelembaban 20%, melakukan penyiraman</ListItem>
          </List>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}
