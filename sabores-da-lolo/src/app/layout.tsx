import './globals.css';
import { Providers } from '../app/provider/providers';

export const metadata = {
  title: 'Sabores da Lolô',
  description: 'Delícias artesanais direto da cozinha da Lolô',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}