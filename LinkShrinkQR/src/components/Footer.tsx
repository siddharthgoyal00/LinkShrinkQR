import { SocialLinks } from "./SocialLinks";

export function Footer (){
    return (
        <footer className="bg-white dark:bg-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <SocialLinks />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
    )
}