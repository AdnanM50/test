import './styles/app.scss'
import Providers from "../providers/userProvider";

export const metadata = {
    title: "Car2Go",
    description: "Do your ride with ease",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                    <Providers>
                        {children}
                    </Providers>
            </body>
        </html>
    );
}
