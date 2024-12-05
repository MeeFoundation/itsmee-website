import { useCallback, useEffect, useState } from "react";
import { Loading } from "mee-components/react-components";
import { getUser } from "api/api";
import type { User } from "@utils/types";
import { Routes, Route } from "react-router-dom";
import Connections from "@components/react/connections/Connections";
import ConnectionsItem from "@components/react/connections/ConnectionsItem";
import CreateConnection from "@components/react/connections/CreateConnection";
import "@styles/base.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  const [user, setUser] = useState<User>();
  const loadData = useCallback(async () => {
    const user = await getUser();
    setUser(user);
  }, []);
  useEffect(() => {
    loadData();
  }, [loadData]);
  return (
    <div>
      {user ? (
        <Routes>
          <Route index element={<Connections user={user} />} />
          <Route path="/create" element={<CreateConnection />} />
          <Route path="/:id" element={<ConnectionsItem />} />
        </Routes>
      ) : (
        <Loading />
      )}
    </div>
  );
}
// export default function App() {
//   return (
//     <>
//       <Route path="/" component={<Connections />} />
//     </>
//   );
// }
