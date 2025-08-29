export default function UserCard({ user, onClick }) {
    return (
      <div
        onClick={onClick}
        className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow"
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{user.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{user.company.name}</p>
      </div>
    );
  }