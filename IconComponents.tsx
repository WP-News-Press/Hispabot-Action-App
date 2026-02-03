
import React from 'react';

export const HispabotHead = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Monitor Frame */}
    <rect x="10" y="15" width="80" height="65" rx="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
    <rect x="15" y="20" width="70" height="55" rx="8" fill="#0f172a" />
    
    {/* Glowing Eyes */}
    <rect x="30" y="35" width="8" height="15" rx="4" fill="#38bdf8" className="animate-pulse">
      <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
    </rect>
    <rect x="62" y="35" width="8" height="15" rx="4" fill="#38bdf8" className="animate-pulse">
      <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
    </rect>
    
    {/* Glowing Mouth / Smile */}
    <path d="M35 60 C 45 68, 55 68, 65 60" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" />
    
    {/* Antennas / Details */}
    <rect x="45" y="80" width="10" height="5" fill="#38bdf8" />
  </svg>
);

export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M2.25 12v8.25a1.5 1.5 0 001.5 1.5h3.75a1.5 1.5 0 001.5-1.5V16.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3.75a1.5 1.5 0 001.5 1.5h3.75a1.5 1.5 0 001.5-1.5V12m-18 0A24.06 24.06 0 0112 2.25c5.302 0 9.998 1.836 13.5 4.86" />
  </svg>
);

export const HomeModernIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5-1.5l-1.5.545m-3.145.545l1.5-.545M12.75 3.545l7.5-2.727M2.25 5.727l4.5-1.636m0 0l4.5-1.636M2.25 21V3.545c0-.621.504-1.125 1.125-1.125h3c.621 0 1.125.504 1.125 1.125V21M4.5 17.25h1.5v1.5H4.5v-1.5zm1.5-3h-1.5v-1.5h1.5v1.5zm-1.5-3h1.5v1.5H4.5v-1.5zm1.5-3h-1.5V6.75h1.5v1.5zm11.25 10.5h1.5v1.5h-1.5v-1.5zm1.5-3h-1.5v-1.5h1.5v1.5zm-1.5-3h1.5v1.5h-1.5v-1.5zm.75-6.75h1.5v1.5h-1.5v-1.5z" />
  </svg>
);

export const ChatBubbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3h9m-9 3h3m-6.75 4.125l-.122.08a.75.75 0 01-1.148-.667V19.5a2.25 2.25 0 00-2.25-2.25h-3.375A2.25 2.25 0 011 15V5.25A2.25 2.25 0 013.25 3h17.5A2.25 2.25 0 0123 5.25V15a2.25 2.25 0 01-2.25 2.25h-3.375a2.25 2.25 0 00-2.25 2.25v2.308c0 .59-.693.895-1.148.52l-3.375-2.828a2.25 2.25 0 00-1.423-.51h-.75" />
  </svg>
);

export const RobotIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.625a2.25 2.25 0 01-2.25-2.25V6.375c0-.621.504-1.125 1.125-1.125H9M12 7.5V12m0 0V15m0-3h3.375M9 15h3.375" />
  </svg>
);

export const PaperAirplaneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

export const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V14.15M15.75 14.15v-2.03a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25v2.03m4.5 0v.916c0 .621-.504 1.125-1.125 1.125h-1.5a1.125 1.125 0 01-1.125-1.125V14.15" />
  </svg>
);

export const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.006M15 15.75a3 3 0 01-3-3M15 15.75a3 3 0 00-3-3m-3.75 3.75a3 3 0 01-3-3M6.25 15.75a3 3 0 00-3-3M18.75 6.75h.008v.008h-.008V6.75zM12 12.75h.008v.008H12v-.008zM12 12.75L11.25 12M12 12.75L12.75 12M11.25 12l-.75-.75M12.75 12l.75-.75M12 12.75v-1.5M12 12.75A2.25 2.25 0 009.75 15M12 12.75A2.25 2.25 0 0114.25 15M12 12.75c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h.008a1.125 1.125 0 001.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-.008zM7.5 15.75c0-1.313.264-2.561.731-3.611m0 0a48.545 48.545 0 01-.731 3.611M7.5 15.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-.008a1.125 1.125 0 01-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h.008zM16.5 15.75c0-1.313-.264-2.561-.731-3.611m0 0a48.544 48.544 0 00.731 3.611M16.5 15.75c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h.008a1.125 1.125 0 001.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-.008z" />
  </svg>
);

export const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L16.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 13.75M18.25 12L17 10.25M18.25 12L19.5 11.25M18.25 12L19.5 12.75M12 18.75L10.25 17M12 18.75L13.75 17M12 18.75L11.25 19.5M12 18.75L12.75 19.5M5.25 9L3.5 10.25M5.25 9L6.5 10.25M5.25 9L4.5 8.25M5.25 9L5.25 7.5" />
  </svg>
);

export const NewspaperIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.625a2.25 2.25 0 01-2.25-2.25V6.375c0-.621.504-1.125 1.125-1.125H9M12 7.5V12m0 0V15m0-3h3.375M9 15h3.375M9 15c-2.828 0-5.099-.012-5.099-.012a2.253 2.253 0 00-1.273 1.193M15 15C12.172 15 9.901 14.988 9.901 14.988a2.253 2.253 0 01-1.273 1.193M15 15v2.25m0-2.25a2.25 2.25 0 002.25-2.25V12M15 15a2.25 2.25 0 012.25-2.25V12" />
  </svg>
);

export const MagnifyingGlassIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

export const CalendarDaysIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008z" />
  </svg>
);

export const TagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

export const UserCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const LockClosedIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

export const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

export const ShareIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.195.025.39.044.586.058a2.25 2.25 0 012.135 2.135V17.25m-2.135-4.108V12.75m0 2.25h-2.135m2.135 0L12 15m0 0V9.75M12 15l-2.25 2.25M12 9.75L14.25 12M12 9.75L9.75 12m9-3.375a2.25 2.25 0 100 2.186m0-2.186c-.195.025-.39.044-.586.058a2.25 2.25 0 00-2.135 2.135V17.25m2.135-4.108V12.75m0 2.25h2.135M16.783 10.907l-2.25 2.25m2.25-2.25l2.25 2.25m0 0l2.25 2.25M16.783 10.907l2.25-2.25m-2.25 4.5l2.25 2.25m0-4.5l2.25-2.25m-4.5 0l2.25 2.25m-2.25-2.25L12 9.75" />
    </svg>
);

export const BookmarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
    </svg>
);

export const ExclamationTriangleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

export const TicketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6.75V17.25c0 .966-.784 1.75-1.75 1.75h-7.5A1.75 1.75 0 015.5 17.25V6.75m11 0c0-.966-.784-1.75-1.75-1.75H7.25A1.75 1.75 0 005.5 6.75m11 0H5.5m4.875 4.875h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V11.625zm0 2.25h.008v.008h-.008V13.875zm0 2.25h.008v.008h-.008V16.125zm-2.25-4.5h.008v.008h-.008V11.625zm0 2.25h.008v.008h-.008V13.875zm0 2.25h.008v.008h-.008V16.125zm0 2.25h.008v.008h-.008V18.375zm2.25-2.25h.008v.008h-.008V16.125zm0-2.25h.008v.008h-.008V13.875zm0-2.25h.008v.008h-.008V11.625zm0-2.25h.008v.008h-.008V9.375z" />
  </svg>
);

export const GiftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 16.5V21m0-16.5l1.5 3.75M12 3L10.5 6.75M12 3c0 .866-.226 1.686-.628 2.433A4.5 4.5 0 008.25 9V12.75a4.5 4.5 0 004.5 4.5h3a4.5 4.5 0 004.5-4.5V9a4.5 4.5 0 00-3.372-4.317c-.402-.747-.628-1.567-.628-2.433m-3 16.5c0-.866.226-1.686.628-2.433A4.5 4.5 0 0115.75 15V11.25a4.5 4.5 0 01-4.5-4.5h-3a4.5 4.5 0 01-4.5 4.5V15a4.5 4.5 0 013.372 4.317c.402.747.628 1.567.628 2.433m0-11.25a2.25 2.25 0 00-2.25 2.25v3.75c0 1.24 1.01 2.25 2.25 2.25h3c1.24 0 2.25-1.01 2.25-2.25v-3.75a2.25 2.25 0 00-2.25-2.25h-3z" />
  </svg>
);

export const ShoppingBagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export const FaceSmileIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a8.949 8.949 0 005.126-1.665M12 21a8.949 8.949 0 01-5.126-1.665m10.252 0a8.964 8.964 0 002.198-4.923A8.964 8.964 0 0012.001 6a8.964 8.964 0 00-7.375 3.412A8.964 8.964 0 002.428 14.412a8.964 8.964 0 002.198 4.923M9 10.5h.008v.008H9v-.008zm6 0h.008v.008h-.008v-.008zm-3 3.75a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" />
  </svg>
);

export const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const XCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const QuestionMarkCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
);
