import { HomeIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '/' },
    { name: 'Users', icon: UsersIcon, href: '/users' },
    { name: 'Analytics', icon: ChartBarIcon, href: '/analytics' },
  ];

  return (
    <div className="hidden md:flex md:w-64 md:flex-col fixed inset-y-0">
      <div className="flex flex-col flex-grow pt-5 bg-white dark:bg-gray-800 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <item.icon className="mr-3 flex-shrink-0 h-6 w-6" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}