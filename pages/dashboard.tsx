import { useAuthSession } from '../hooks/useAuthSession';

const DashboardPage = () => {
  const { user } = useAuthSession();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
    </div>
  );
};

export default DashboardPage;
