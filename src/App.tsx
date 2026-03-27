import { use, useEffect } from "react";
import { useHabboByName } from "./hooks/useHabboByName";
import { useHabboById } from "./hooks/useHabboById";
function App() {
  // ✅ direto no componente, sem useEffect, sem async
  const { data: user, loading, error } = useHabboByName("amigo-punk");
  const { data: user2 } = useHabboById(user?.uniqueId || "");

  useEffect(() => {
    console.log(user);
  }, [user]);
  useEffect(() => {
  console.log("User 2:", user2);
  }, [user2]);

  if (loading) return <p>Carregando...</p>;
  if (error)   return <p>Erro: {error}</p>;

  return (
    <>
      <p>{user?.name}</p>
    </>
  );
}

export default App;