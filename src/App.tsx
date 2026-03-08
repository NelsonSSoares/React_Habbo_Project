import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/users?name=amigo-punk");
        console.log(response.data);
        
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>

    </>
  )
}

export default App
