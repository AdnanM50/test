import "@fontsource/mulish";
import Providers from "./providers/userProvider";
import "/globals.scss";
import "@fontsource/plus-jakarta-sans"; 
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/400-italic.css"; 
export const metadata = {
  title: "Car2Go",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
