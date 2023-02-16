import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
        <TawkMessengerReact
          propertyId="62aead82b0d10b6f3e78139d"
          widgetId="1g5t5bhl4"
          onLoad={() => console.log("loading")}
        />
      </MantineProvider>
    </>
  );
}
