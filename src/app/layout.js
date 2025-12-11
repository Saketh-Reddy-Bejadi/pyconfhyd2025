import './globals.css';
import { CONFERENCE } from '@/conference';
import { metadata } from '@/metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/components/ThemeContext';
import InfoAlert from '@/components/InfoAlert';
import Icon from '@/components/Icon';
import { Paragraph } from '@/components/Typography';
export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <InfoAlert>
            <div className="flex flex-wrap items-center gap-1.5 justify-center">
              <Icon
                name="Clock"
                size={14}
                className="text-secondary-600 dark:text-secondary-400 flex-shrink-0"
              />
              <Paragraph
                level={5}
                className="text-secondary-800 dark:text-secondary-200"
              >
                You&apos;re viewing the 2025 event archive.
              </Paragraph>
              <a
                href={CONFERENCE.latestYearSiteURL}
                className="underline hover:no-underline font-semibold text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
              >
                <Paragraph
                  level={5}
                  className="text-secondary-600 dark:text-secondary-400"
                >
                  Visit the current edition →
                </Paragraph>
              </a>
            </div>
          </InfoAlert>
          <Header themeToggle={<ThemeToggle />} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
