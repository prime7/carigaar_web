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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TMSSD27');
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
