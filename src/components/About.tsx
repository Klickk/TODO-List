export const AboutPage = () => {
  return (
    <div className="h-full w-full overflow-auto bg-gray-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl mb-10 space-y-6">
        <h1 className="text-3xl font-bold text-center text-purple-700">
          About This To-Do List App
        </h1>
        <p className="text-lg text-gray-700">
          This To-Do List application is built using React and TypeScript. It
          allows users to add, edit, and delete tasks, as well as mark them as
          completed. The app is designed to help you stay organized and manage
          your daily tasks efficiently.
        </p>
        <p className="text-lg text-gray-700">Features of the app include:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Add new tasks to your to-do list.</li>
          <li>Edit existing tasks to update their details.</li>
          <li>Delete tasks that are no longer needed.</li>
          <li>Mark tasks as completed to keep track of your progress.</li>
          <li>Responsive design for use on both desktop and mobile devices.</li>
        </ul>
      </div>
    </div>
  );
};
