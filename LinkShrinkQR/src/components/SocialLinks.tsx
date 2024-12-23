import { Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { socialLinks } from '../config/Social'
export function SocialLinks(){
    return (
        <div
        className="flex space-x-6">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}

        </div>
    )
}