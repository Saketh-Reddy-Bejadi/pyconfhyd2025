import { CONFERENCE } from '@/conference';
import { Paragraph } from '@/components/Typography';
import Icon from '@/components/Icon';

const ArchiveBanner = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark border-b border-secondary-100 dark:border-secondary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5">
            <Icon
              name="Clock"
              size={16}
              className="text-secondary-600 dark:text-secondary-400 flex-shrink-0"
            />
            <Paragraph
              level={5}
              className="text-secondary-800 dark:text-secondary-200"
            >
              You&apos;re viewing the 2025 event archive.
            </Paragraph>
          </div>
          <a
            href={CONFERENCE.nextYearSiteURL}
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
      </div>
    </div>
  );
};

export default ArchiveBanner;
