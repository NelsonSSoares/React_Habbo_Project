import { useEffect } from "react";
import { useHabboByName } from "./hooks/useHabboByName";
import { useHabboFullProfile } from "./hooks/useHabboFullProfile";

function App() {
  const { data: user, loading, error } = useHabboByName("amigo-punk");
  const { data: fullProfile } = useHabboFullProfile(user?.uniqueId || "");

  useEffect(() => {
    console.log("User:", user);
    console.log("Full Profile:", fullProfile);
  }, [user, fullProfile]);


  if (loading) return <p>Carregando...</p>;
  if (error)   return <p>Erro: {error}</p>;

  return (
    <>
      <p>{user?.name}</p>
    </>
  );
}

export default App;