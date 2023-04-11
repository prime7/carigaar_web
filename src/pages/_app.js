import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { MantineProvider } from "@mantine/core";
import Script from "next/script";

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10816289133"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-10816289133');
        `}
        </Script>
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
