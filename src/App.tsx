import { useEffect } from "react";
import { useHabboByName } from "./hooks/useHabboByName";
function App() {
  // ✅ direto no componente, sem useEffect, sem async
  const { data: user, loading, error } = useHabboByName("amigo-punk");

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (loading) return <p>Carregando...</p>;
  if (error)   return <p>Erro: {error}</p>;

  return (
    <>
      <p>{user?.name}</p>
    </>
  );
}

export default App;